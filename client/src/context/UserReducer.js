export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';


export const UserReducer = (state, action) => {



    switch(action.type){
        case UPDATE_NAME:
            return;
        case UPDATE_EMAIL:
            return;
        default:
            return state;
    }

}

export default UserReducer;