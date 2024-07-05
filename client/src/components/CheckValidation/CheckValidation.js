export const validateEmail = (email) => {
    const specialCharList = [
        '!',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '?',
        ':',
        '{',
        '}',
        '|',
        '<',
        '>',
        '`',
        '~',
    ];
    const specialChars = [];

    // check for special characters in email except "@" and "."
    for (let char of email) {
        if (specialCharList.includes(char) && !['@', '.'].includes(char)) {
            specialChars.push(char);
        }
    }

    if (specialChars.length > 0) {
        return `Email must not contain special characters: ${specialChars.join(', ')}`;
    }

    // other validations
    if (!email || typeof email !== 'string') return 'Email is required';
    if (!email.includes('@')) return 'Email must include @';
    if (specialCharList.includes(email.charAt(0)))
        return 'Email must not start with special characters';
    if (/^\d/.test(email)) return 'Email must not start with a number';

    return '';
};

export const validatePassword = (password) => {
    if (!password || typeof password !== 'string') return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters long';

    return '';
};
