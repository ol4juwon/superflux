import GENERAL from './general/index';
import LandingPage from './general/LandingPage';
import { HOME, NOT_FOUND } from './pagesPath';

export default [
    {
        path:NOT_FOUND,
        element: <><h1>Hi</h1></>,
        exact: true,
    },
    
    {
        path:"/",
        element: GENERAL,
        exact: false,
    },
]
