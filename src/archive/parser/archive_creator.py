import json
import logging
import os
from os import listdir
from os.path import isfile, join
from pathlib import Path

import requests

from src.archive.parser.utils import make_dir_if_not_exists

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("logs/archive_creator.log"),
        logging.StreamHandler()
    ]
)


def save_image(src: str):
    with open(os.path.basename(src), "wb") as img:
        img.write(requests.get(src).content)


def main(path_to_write: Path, path_to_read='output'):
    for file in [f for f in listdir(path_to_read) if isfile(join(path_to_read, f))]:
        with open(file, encoding='utf8') as file:
            data = json.load(file)

        directory_name = join(path_to_write, data['name'])
        directory_department_name = join(directory_name, "departments")

        make_dir_if_not_exists(directory_department_name)

        save_image(data['logo'])


if __name__ == '__main__':
    path = Path(__file__).parent.parent
    main(path)
