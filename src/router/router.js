import {createBrowserRouter} from 'react-router-dom';

import Default from '../screens/Default';
import Products from '../screens/Product';
import LoginForm from '../screens/LoginForm'
import LandingPage from '../screens/LandingPage';

import App from '../App';

const basename = process.env.NOD_ENV === 'production' ? '/v2-desarrollo-frontend-react' : '/';

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
            }
        ]
    }
],
{
    basename: basename
}
);

export default routes;