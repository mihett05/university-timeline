import json
import logging
from typing import Any

from bs4 import BeautifulSoup, element
from requests import get

from src.archive.parser.utils import make_dir_if_not_exists

make_dir_if_not_exists('logs')
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("logs/parser.log"),
        logging.StreamHandler()
    ]
)


def pre_add_img_src(src: str):
    if src.startswith('http://www.psu.ru/'):
        return src
    return f'http://www.psu.ru{src}' if src.startswith('/') else f'http://www.psu.ru/{src}'


def parse_link(link: element.Tag):
    if link:
        return {
            'text': link.text,
            'href': pre_add_img_src(link.attrs.get('href'))
        }
    return {}


def parse_ul(url: str) -> list[dict[str, str]]:
    page = BeautifulSoup(get(url).text, 'html.parser')

    uls = page.find('div', attrs={'class': 'cat-children'})
    if uls:
        return [parse_link(li.find('a')) for li in uls.find_all('li')]

    return []


def get_faculty_deanery(url: str):
    data = []
    page = BeautifulSoup(get(url).text, 'html.parser')

    content = page.find('div', attrs={'class': 'category-desc'})
    if content:
        trs = content.find('table').find_all('tr')
        for tr in trs:
            tds = tr.find_all('td')
            if len(tds) < 2:
                continue

            img: element.Tag = tds[0].find('img')
            text = tds[1].text

            if img and text:
                data.append(
                    {
                        'img': pre_add_img_src(img.attrs.get('src')),
                        'text': text
                    }
                )

    return data


def get_faculty_logo(url: str):
    page = BeautifulSoup(get(url).text, 'html.parser')
    logo = page.find('div', attrs={'class': 'category-desc'}).find('img')

    return pre_add_img_src(logo.attrs.get('src')) if logo else ''


def get_faculties(faculties_url='http://www.psu.ru/fakultety') -> list[dict[str, str]]:
    logging.info("Start parsing faculties")
    return parse_ul(faculties_url)


def parse_department(url):
    page = BeautifulSoup(get(url).text, 'html.parser')

    blog = page.find('div', attrs={'class': 'blog'})

    head = blog.find('div', attrs={'class': 'category-desc'})
    head_img = head.find('img')

    obj = {'head': {'content': head.text}, 'blog': []}
    if head_img:
        obj['head']['img'] = pre_add_img_src(head_img.attrs.get('src'))

    for div in blog.find_all('div', attrs={'class': 'items-row'}):
        content = div.find('div', attrs={'class': 'yutoks-postcontent'})
        obj['blog'].append({
            'title': parse_link(div.find('h2', attrs={'class': 'yutoks-postheader'}).find('a')),
            'content': {'text': content.text} | parse_link(content.find('a'))
        })

    return obj


def parse_faculty(faculty: dict[str, Any]):
    name = faculty['text'].strip()
    base_url = '/'.join(faculty['href'].split('/')[:-1])

    logging.info(f'\t\tStart parsing faculty "{name}" detail info')
    faculty['logo'] = get_faculty_logo(faculty['href'])
    faculty['deanery'] = get_faculty_deanery(f'{base_url}/dekanat')
    faculty['departments'] = parse_ul(f'{base_url}/kafedry')
    logging.info(f'\t\tEnd parsing faculty "{name}" detail info')

    logging.info(f'\t\t\tStart parsing faculty "{name}" departments detail info')
    for department in faculty['departments']:
        for k, v in parse_department(department['href']).items():
            department[k] = v
    logging.info(f'\t\t\tEnd parsing faculty "{name}" departments detail info')

    with open(f'output/{name}.json', 'w', encoding='utf8') as file:
        json.dump(faculty, file, indent=4, ensure_ascii=False)


def parse():
    logging.info("Start parsing faculties")
    faculties: list[dict[str, Any]] = get_faculties()
    logging.info("End parsing faculties")

    for faculty in faculties:
        parse_faculty(faculty)


if __name__ == '__main__':
    parse()
