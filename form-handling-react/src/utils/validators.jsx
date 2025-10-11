export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validateRequired = (value) => {
    return value.trim() !== '';
};

export const validatePassword = (password) => {
    return password.length >= 6; // Example: Password must be at least 6 characters long
};