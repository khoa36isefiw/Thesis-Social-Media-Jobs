import ForgotPassword from '../components/Guest/ForgotPassword/ForgotPassword';
import SignIn from '../components/Guest/SignIn/SignIn';
import UserProfile from '../components/User/UserProfile/UserProfile';
import UserActivityLayout from '../layouts/UserActivityLayout/UserActivityLayout';
import DefaultLayout from '../layouts/UserHomePageLayout/UserHomePageLayout';
import Header from '../layouts/UserHomePageLayout/Header/Header';
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
import NetworkLayout from '../layouts/NetworkLayout/NetworkLayout';
import MyNetwork from '../components/MyNetwork/MyNetwork';
import MyConnections from '../components/MyConnections/MyConnections';
import ManageMyNetworkLayout from '../layouts/ManageMyNetworkLayout/ManageMyNetworkLayout';
import FollowingAndFollowers from '../components/FollowingAndFollowers/FollowingAndFollowers';
import PageIsFollowing from '../components/PageIsFollowing/PageIsFollowing';
import MyHashtags from '../components/MyHashtags/MyHashtags';

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
    {
        path: '/my-network',
        component: MyNetwork,
        layout: NetworkLayout,
    },
    {
        path: '/my-network/connections',
        component: MyConnections,
        layout: ManageMyNetworkLayout,
    },
    {
        path: '/my-network/people-follow/following',
        component: FollowingAndFollowers,
        layout: ManageMyNetworkLayout,
    },
    {
        path: '/my-network/page-is-following',
        component: PageIsFollowing,
        layout: ManageMyNetworkLayout,
    },
    {
        path: 'my-network/my-hashtag-manager',
        component: MyHashtags,
        layout: ManageMyNetworkLayout,
    },

    { path: '/user/recent-activity/all', component: ShowUserActivity, layout: UserActivityLayout },

    { path: '/notifications', component: UserNotifications, layout: NotificationLayout },
];
const userRoutes = [];

export { publicRoutes, privateRoutes };
