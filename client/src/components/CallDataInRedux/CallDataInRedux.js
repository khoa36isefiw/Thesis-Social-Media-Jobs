import { useSelector } from 'react-redux';
// define function call use Selector
export const useLoggedInUser = () => {
    return useSelector((state) => state.manageAccounts.loggedInUser);
};
