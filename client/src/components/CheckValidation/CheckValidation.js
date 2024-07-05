export const validateEmail = (email) => {
    const specialCharRegex = /^[!@#$%^&*()?":{}|<>`~]/;

    if (!email || typeof email !== 'string') return 'Email is required';
    if (!email.includes('@')) return 'Email must include @';
    if (specialCharRegex.test(email)) return 'Email must not start with special characters';
    if (/^\d/.test(email)) return 'Email must not start with a number';

    return '';
};

export const validatePassword = (password) => {
    if (!password || typeof password !== 'string') return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters long';

    return '';
};
