import { data } from 'react-router-dom'
import Thumbnail1 from './images/blog1.png'
import Thumbnail2 from './images/blog2.png'
import Thumbnail3 from './images/blog3.png'
import Thumbnail4 from './images/blog4.png'
// import Avatar from '../images/avatar1.jpg'

export const DUMMY_POSTS = [
    {
        id: '1',
        Thumbnail: Thumbnail1,
        category: 'education',
        title: 'Welcome to New India.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        authorID: 3,
    },
    {
        id: '2',
        Thumbnail:  Thumbnail2,
        category: 'science',
        title: 'This is ths title of the very second post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        authorID: 1,
    },
    {
        id: '3',
        Thumbnail: Thumbnail3,
        category: 'weather',
        title: 'This is ths title of the very Third post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        authorID: 13,
    },
    {
        id: '4',
        Thumbnail:  Thumbnail4,
        category: 'farming',
        title: 'This is ths title of the very  post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        authorID: 11,
    },
]

export default data