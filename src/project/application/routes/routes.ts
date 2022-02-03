import { EditUser, UsersPage } from '../../application/pages';
import { Route } from '../../shared/interfaces';

export const routes: Route[] = [
    {
        to: 'users',
        path: 'users',
        Component: UsersPage,
        name: 'Users'
    },
    {
        to: 'edit-user',
        path: 'edit-user',
        Component: EditUser,
        name: 'Edit User'
    }
];