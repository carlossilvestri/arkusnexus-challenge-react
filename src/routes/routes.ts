import { lazy } from 'react';
import { LoginPage } from '../project/setup/pages';
import { Route } from '../project/shared/interfaces';

const Application: React.LazyExoticComponent<() => JSX.Element> = lazy(() => import(/* webpackChunkName: "Application_Module" */ '../project/application/routes/Navigation'));

export const routes: Route[] = [
    // No lazyloading on login, if there is a register, this object should be a module. /setup//* (login and register)
    {
        to: '/login',
        path: 'login',
        Component: LoginPage,
        name: 'Login'
    },
    // Lazyloading application module...
    {
        to: '/application/*',
        path: '/application//*',
        Component: Application,
        name: 'Application'
    }

];