export const validateDataSignIn = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) {
        return "Email is not valid";
    }
    if(!isPasswordValid) {
        return "Password is not valid";
    }

    return null;
}
export const validateDataSignUp = (fullName, email, password) => {
    const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isFullNameValid) {
        return "Name is not valid";
    }

    if(!isEmailValid) {
        return "Email is not valid";
    }
    if(!isPasswordValid) {
        return "Password is not valid";
    }

    return null;
}