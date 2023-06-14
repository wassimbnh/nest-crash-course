const  PASSWORD_RULE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
const MESSAGE_RULE = "Password must have at least 1 uppercse,1 lowercase";

export const REGEX = {
    PASSWORD_RULE,
    
}

export const MESSAGES = {
    MESSAGE_RULE,
}