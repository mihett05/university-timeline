import { Grid, useMediaQuery } from "@mui/material"
import FacultyCard from "./FacultyCard"

interface MockType {
    logo: string;
    name: string;
}

const MockList: MockType[] = [
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9GLCoqvJ4NI%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b9aec2682a0058196b553b4c5f5364cff3bba3e611d8b3849c0b8a70692d3793&ipo=images",
        "name": "Биологический факультет"
    },
    {
        "logo": "https://sun9-10.userapi.com/impf/-7z_b2ktsKoR_52kmF1I0gLLwFJ_u0ZHN9X44g/VJzCICOAWgU.jpg?size=1920x768&quality=95&crop=0,0,1920,767&sign=0cba6ba3aec30f0fb73b5d80e1773102&type=cover_group",
        "name": "Географический факультет"
    },
    {
        "logo": "https://sun9-34.userapi.com/impg/7Xlguo0p4kaFJztmW1v6HHECXJwZPDLoamUh0A/tlEJmiMKdIM.jpg?size=1080x1080&quality=95&sign=54fb45313ca68420930b041433658ef9&type=album",
        "name": "Геологический факультет"
    },
    {
        "logo": "https://sun9-41.userapi.com/impg/lEY5EmdOv5Eib8p7v4XEY0DHDOw7Tbo5OM2Adg/1GBvdqlxNPs.jpg?size=1014x1014&quality=95&sign=9e0385c1e22e388ab8b48eaf69a12234&type=album",
        "name": "Институт Компьютерных Наук и Технологий"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fxny5l62ZVsM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=5f01005aa42a124b1c3a2673d7370d696fec8cf4e4bb95fd27ffc53ff6033c41&ipo=images",
        "name": "Историко-политологический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6-ChmuWSLI4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=1c22e23b115a051cdbfffea4bf2bf5b4b8bef37b4562d141562071ca1c0fdb32&ipo=images",
        "name": "Факультет современных иностранных языков и литератур"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images",
        "name": "Физико-математический институт"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8UjuoyRJ4eQ%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=37799ea4b46f79f76e6759d3c688e8c24147ca219a69b4ac306c9c817c0eeca7&ipo=images",
        "name": "Философско-социологический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FfbrEzOr2Nw0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d9e5a5d965a013591450260f1d9c613eefe9680fda88cfc53101b45ef4971565&ipo=images",
        "name": "Филологический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6TbL4WKjUZI%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=661593add96a2f566be2fa5ec34dcd0e6e528e314cd216c7a0001bbb7d497e5d&ipo=images",
        "name": "Химический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fq2EzbvmrAqQ%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a67c82de67c07da689aa72e3e7234bea2e134dde8dbb90ba38aa97e8f97dae31&ipo=images",
        "name": "Экономический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fok-nrItq18I%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7c82106bfc9ef8f21308b3a40e1cf86a2e3423d34a803ae2df488a1568d09abf&ipo=images",
        "name": "Юридический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbCZ9zdraS-4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=c3d5de09c716220f806e387f08bdecb677ba205aa9ce0c558f2cfdf3f5db6c1c&ipo=images",
        "name": "Физический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSh5TyYxGTPE%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7fb4d9e047435e02340460f76d4636a9583020c93977589f39cf17fa2ce58265&ipo=images",
        "name": "Механико-математический факультет"
    },
    {
        "logo": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images",
        "name": "Колледж профессионального образования ПГНИУ"
    },
]

const FacultyList = () => {
    const isDesktop = useMediaQuery('(min-width:768px)');
    return (
        <Grid container spacing={2} sx={{mx: 'auto', width: '100%'}}>
        {MockList.map((faculty: any) => {
            return <Grid xs={isDesktop ? 3 : 6} item={true}>
                        <FacultyCard 
                        key={faculty.name}
                        name={faculty.name}
                        logo={faculty.logo}
                        />
                    </Grid>
        })}
        </Grid>
    )
}

export default FacultyList