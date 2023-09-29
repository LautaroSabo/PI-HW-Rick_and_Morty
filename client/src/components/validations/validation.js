
export function validateEmail (email) {
    if(!email.trim()){
    return 'El email no puede estar vacio'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
    return 'El email debe ser valido'
    }
    return '';
}

export function validatePassword (password) {
    if(!password.trim()){
        return 'La contraseña no puede estar vacia.';
    }else if( password.length < 6 || password.length > 10){
        return 'La contraseña debe tener entre 6 y 10 caracteres.';
    }return '';
}