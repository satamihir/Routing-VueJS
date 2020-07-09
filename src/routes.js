import User from './components/user/User';
import Home from './components/Home.vue';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import UserStart from './components/user/UserStart';

export const routes = [
    {path: '',component: Home},
    {path: '/User',component: User, children:[
        {path: '',component: UserStart},
        {path: ':id', component: UserDetail},
        {path: '/edit', component: UserEdit}
    ]}
];