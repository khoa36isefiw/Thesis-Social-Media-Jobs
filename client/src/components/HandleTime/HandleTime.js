export const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : '`AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return strTime;
};

export const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export const getTimeDisplay = (messageDate) => {
    const now = new Date();
    const timeDifference = now - messageDate;

    // Check if the message was sent within the last 24 hours
    const isRecent = timeDifference < 24 * 60 * 60 * 1000;
    return isRecent ? formatTime(messageDate) : formatDate(messageDate);
};

export const calculateTimeElapsed = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMs = now - postTime;
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    if (diffInMins < 60) {
        return `${diffInMins} minutes ago`;
    } else if (diffInMins < 1440) {
        return `${Math.floor(diffInMins / 60)} hours ago`;
    } else {
        return `${Math.floor(diffInMins / 1440)} day ago`;
    }
};

export const calculateTimeComment = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInMs = now - postTime;
    const diffInSecs = Math.floor(diffInMs / 1000); // convert to second
    const diffInMins = Math.floor(diffInMs / (1000 * 60)); // convert to minute
    if (diffInMins === 0) {
        return `${diffInSecs} s`;
    } else if (diffInMins < 60) {
        return `${diffInMins} m`;
    } else if (diffInMins < 1440) {
        return `${Math.floor(diffInMins / 60)} h`;
    } else {
        return `${Math.floor(diffInMins / 1440)} d`;
    }
};
