const initState={
    authStatus:null
};
const authReducer=(state=initState,action)=>{
    switch(action.type)
    {
        case "LOGIN_SUCCESS":
            
            return {
                ...state,
                authStatus:null
            }
        case "LOGIN_ERR":
            
            return{
                ...state,
                authStatus:"Login Failed"
            }
        case "SIGNOUT_SUCCESS":
            console.log("signOut")
            return state;
        case "SIGNOUT_ERR":
            console.log("signOut error",action.err);
            return state;
        case "SIGNUP_SUCCESS":
            return{
                ...state,
                authStatus:null
            }
        case "SIGNUP_ERR":
            return{
                ...state,
                authStatus:action.err
            }
        default:
            return state;
    }
    
}
export default authReducer;