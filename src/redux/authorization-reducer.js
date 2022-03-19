let initialState = {
    users:
        { id: 1, login: 'Admin', password: '12345' }
    ,
    newLogin: '',
    newPassword: '',
    isAuthorization: false
}



const authorizationReducer = (state = initialState, action) => {


    switch (action.type) {
        case "ENTER": {
            
            let stateCopy={...state};
            debugger;
            if (stateCopy.newLogin === state.users.login && stateCopy.newPassword === state.users.password) {

                window.localStorage.setItem("isAuthorization", true);
                stateCopy.newLogin = '';
                stateCopy.newPassword = '';
                return stateCopy;
            }
            else {

                alert("Mistake!!!");
                stateCopy.newLogin = '';
                stateCopy.newPassword = '';
                return stateCopy;
            }
        }
        case "UPDATE-AUTHORIZATON-LOGIN": {
            let stateCopy = { ...state };
            stateCopy.newLogin = action.login;
            return stateCopy;
        }
        case "UPDATE-AUTHORIZATON-PASSWORD": {
            let stateCopy = { ...state };
            stateCopy.newPassword = action.password;
            return stateCopy;
        }
        default: return state;
    }
}

export const enterActionCreator = () => {
    return {
        type: 'ENTER'
    }
}


export const loginActionCreator = (text) => {
    return {
        type: 'UPDATE-AUTHORIZATON-LOGIN', login: text
    }
}

export const passwordActionCreator = (text) => {
    return {
        type: 'UPDATE-AUTHORIZATON-PASSWORD', password: text
    }
}

export default authorizationReducer;