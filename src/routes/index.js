import { Home, Dashboard } from '../pages';
const routes = [
    {
        key: 'home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        key: 'dashboard',
        path: '/dashboard',
        exact: true,
        component: Dashboard
    }
]

export default routes;