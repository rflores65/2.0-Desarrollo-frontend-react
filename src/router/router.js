import {createBrowserRouter} from 'react-router-dom';

import Default from '../screens/Default';
import Products from '../screens/Product';
import LoginForm from '../screens/LoginForm'
import LandingPage from '../screens/LandingPage';
import Dictionary from '../screens/Dictionary';

import App from '../App';

const basename = process.env.NODE_ENV === 'production' ? '/v2-desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:<LandingPage/>

            },
            {
                path: '/default',
                element: <Default />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/forms',
                element: <LoginForm/>
            },
            {
                path: '/dictionary',
                element: <Dictionary/> 
            }
        ]
    }
],
{
    basename: basename
}
);

export default routes;