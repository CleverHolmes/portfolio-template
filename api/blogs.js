// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";

import blogSingleImg1 from "/public/images/blog-details/img-1.jpg";
import blogSingleImg2 from "/public/images/blog-details/img-2.jpg";
import blogSingleImg3 from "/public/images/blog-details/img-3.jpg";



const blogs = [
    {
        id: '1',
        title: 'Helpful tips for become a successful designer',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Marilou',
        thumb:'Designer',
        create_at: 'April 2019 - March 2023',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Master These Awesome New Skills in May 2023',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Konal',
        thumb:'Developer',
        create_at: 'March 2017 - April 2019',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'We provide solutions growin your business',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Aliza',
        thumb:'Fasion',
        create_at: 'June 2015 - March 2017',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;