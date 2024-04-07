import ForgotPassword from '../components/Guest/ForgotPassword/ForgotPassword';
import SignIn from '../components/Guest/SignIn/SignIn';
import UserProfile from '../components/User/UserProfile/UserProfile';
import UserActivityLayout from '../layouts/UserActivityLayout/UserActivityLayout';
import DefaultLayout from '../layouts/DefaultLayouts/DefaultLayouts';
import Header from '../layouts/DefaultLayouts/Header/Header';
import GuestLayouts from '../layouts/GuestLayouts/GuestLayouts';
import NotificationLayout from '../layouts/NotificationLayout/NotificationLayout';
import UserProfileLayout from '../layouts/UserProfileLayout/UserProfileLayout';

import GuestHomePage from '../pages/GuestHomePage';
import LoginPage from '../pages/LoginPage';
import ShowUserActivity from '../pages/ShowUserActivity';
import UserHomePage from '../pages/UserHomePage';
import UserNotifications from '../pages/UserNotifications';
import UserProfilePage from '../pages/UserProfilePage';
import UserEducationDetails from '../pages/UserEducationDetails';
import UserInterestPage from '../pages/UserInterestPage';

// not sign into this website
const publicRoutes = [
    { path: '/', component: GuestHomePage, layout: GuestLayouts },
    { path: '/sign-in', component: SignIn, layout: GuestLayouts },
    { path: '/sign-up', component: LoginPage, layout: GuestLayouts },
    { path: '/forgot-password', component: ForgotPassword, layout: GuestLayouts },
];

// must signed into
const privateRoutes = [
    { path: '/signed-in', component: UserHomePage, layout: DefaultLayout },
    { path: '/user-profile', component: UserProfilePage, layout: UserProfileLayout },
    {
        path: '/user-profile/details/education',
        component: UserEducationDetails,
        layout: UserProfileLayout,
    },
    {
        path: '/user/details/interests',
        component: UserInterestPage,
        layout: UserProfileLayout,
    },
    { path: '/user/recent-activity/all', component: ShowUserActivity, layout: UserActivityLayout },

    { path: '/notifications', component: UserNotifications, layout: NotificationLayout },
];
const userRoutes = [];

export { publicRoutes, privateRoutes };
