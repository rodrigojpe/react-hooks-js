import { types } from "../types/types";


export const authreducer = (state = {}, action) => {

        switch (action.type) {
            case types.login:
                return  {
                    ...state,
                    logged: false,
                    user: action.payload
                }
            case types.logout:
                return  {
                    logged: false,
                }
            default:
                return state;
        }
}