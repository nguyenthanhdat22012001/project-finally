
export  const  registerAuthAction = (user) => {
    return {
        type: "REGISTER",
        payload: user,
    }
}

export  const  LoginAuthAction = (user) => {
    return {
        type: "LOGIN",
        payload: user,
    }
}

export  const  LoginGoogleAuthAction = (user) => {
    return {
        type: "LOGIN_GOOGLE",
        payload: user,
    }
}