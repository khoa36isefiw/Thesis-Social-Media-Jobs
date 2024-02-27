import ForgotPassword from '../components/Guest/ForgotPassword/ForgotPassword';
import SignIn from '../components/Guest/SignIn/SignIn';
import DefaultLayout from '../layouts/DefaultLayouts/DefaultLayouts';
import GuestLayouts from '../layouts/GuestLayouts/GuestLayouts';
import GuestHomePage from '../pages/GuestHomePage';
import LoginPage from '../pages/LoginPage';
import UserHomePage from '../pages/UserHomePage';

// not sign into this website
const publicRoutes = [
    { path: '/', component: GuestHomePage, layout: GuestLayouts },
    { path: '/sign-in', component: SignIn, layout: GuestLayouts },
    { path: '/sign-up', component: LoginPage, layout: GuestLayouts },
    { path: '/forgot-password', component: ForgotPassword, layout: GuestLayouts },
];

// must signed into
const privateRoutes = [{ path: '/signed-in', component: UserHomePage, layout: DefaultLayout }];
const userRoutes = [];

export { publicRoutes, privateRoutes };
