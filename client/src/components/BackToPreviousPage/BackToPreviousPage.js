import { scrollToTop } from '../ScrollToTop/ScrollToTop';

// back go the previous page
export const backToPreviousPage = () => {
    window.history.back();
    scrollToTop();
};
