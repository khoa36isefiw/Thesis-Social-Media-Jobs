import React, { useState, useRef } from 'react';

const CheckValidation = (initialState) => {
    const valueRef = useRef(initialState.value || '');
    const [message, setMessage] = useState('');
    const [isShow, setIsShow] = useState(initialState.isShow || false);

    const validateRequired = () => {
        const value = valueRef.current.trim();
        const specialCharRegex = /[!@#$%^&*()?":{}|<>`~]/;

        if (value === '') {
            setMessage('This field is required.');
            return false;
        }

        if (specialCharRegex.test(value)) {
            setMessage('This field should not contain special characters.');
            return false;
        }

        setMessage('');
        return true;
    };

    const validateEmail = () => {
        const value = valueRef.current.trim();

        if (value === '') {
            setMessage('Please enter an email address.');
            return false;
        }

        let validEmail = value.toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        if (validEmail) {
            if (value.toLowerCase().endsWith('@gmail.com')) {
                setMessage('');
                return true;
            } else {
                setMessage('Must includes @gmail.com in your email');
                return false;
            }
        } else {
            setMessage('Invalid email address. Email does not contain special characters');
            return false;
        }
    };

    const validatePassword = () => {
        const value = valueRef.current;

        if (value === '') {
            setMessage('Please enter a password.');
            return false;
        } else if (value.length < 6) {
            setMessage('Password must be at least 6 characters long.');
            return false;
        }

        setMessage('');
        return true;
    };

    const validateConfirmPassword = (password) => {
        const value = valueRef.current.trim();
        const trimmedPassword = String(password).trim();

        if (value === '') {
            setMessage('Please confirm your password.');
            return false;
        } else if (value !== trimmedPassword) {
            setMessage('Passwords do not match.');
            return false;
        }

        setMessage('');
        return true;
    };

    const validatePhone = () => {
        const value = valueRef.current;

        if (value === '') {
            setMessage('Vui Lòng Nhập Số Điện Thoại');
            return false;
        }

        let validPhone = value.match(/^(0[3|5|7|8|9])[0-9]{8}$/);
        if (validPhone) {
            setMessage('');
            return true;
        } else {
            setMessage('Số Điện Chỉ Có 10 Số và Không Chứa Ký Tự Đặc Biệt!');
            return false;
        }
    };

    const validateRequiredWithoutDigits = () => {
        const value = valueRef.current;

        if (/[\d!@#$%^&*()_+={};':"\\|,.<>/?`~]+/.test(value)) {
            setMessage('Không Được Tồn Tại Số Hoặc Kí Tự Đặc Biệt Trong Tên!');
            return false;
        } else if (value.trim() === '') {
            setMessage('This field is required.');
            return false;
        }

        setMessage('');
        return true;
    };

    const handleShow = () => {
        setIsShow(!isShow);
    };

    return {
        valueRef,
        message,
        isShow,
        validateRequired,
        validateEmail,
        validatePassword,
        validateConfirmPassword,
        validatePhone,
        validateRequiredWithoutDigits,
        handleShow,
    };
};

export default CheckValidation;
