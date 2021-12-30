import Router from './img/Router.PNG';
import portofolio from './img/portofolio.PNG';
import signs from './img/signs.PNG';



export const ProjectData = [
    {
        id: 1,
        title:"Zodiacs",
        about:"Random project. If you wanna know how your 2022 will go based on your zodiac sign, check this out!",
        tags:["PHP", "sql", "Javascript"],
        demo:"http://findyoursign.42web.io/",
        github:"https://github.com/AdinaMar/signs",
        image: require('./img/signs.PNG'),
    },

    {
    id: 2,
    title:"Portofolio",
    about:"Random project. The first portoflio i made trying to make it more 'animated'",
    tags:["Javascript", "HTML", "CSS"],
    demo:"https://clever-mestorf-295926.netlify.app",
    github:"https://github.com/AdinaMar/portofolio",
    image: require('./img/portofolio.PNG'),
},

{
    id: 3,
    title:"Router",
    about:"Random project. A simple project that i made just to practice and  get more familiar with the react router v6",
    tags:["ReactJs"],
    demo:"https://romantic-clarke-c5dd76.netlify.app",
    github:"hhttps://github.com/AdinaMar/app-router",
    image: require('./img/Router.PNG'),
}
]