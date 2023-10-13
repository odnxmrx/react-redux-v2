
const validation = (input) => {
    const errors = {};

    if(!input.email.includes('@')) {
        errors.email = 'Must be a valid email'
    }
    if(!input.email.includes('.')){
        errors.email = 'Unvalid email'
    }
    if(input.password.length < 5) {
        errors.password = 'Password must be greater than 5 characters'
    }

    return errors;
}

export default validation;