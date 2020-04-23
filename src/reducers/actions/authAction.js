export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
         
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((err)=>{
            dispatch({type:"LOGIN_ERR",err})
        })
    }
}

export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
     
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        }).catch((err)=>{
           return dispatch({type:"SIGNOUT_ERR",err})
        })
    }
}

export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:newUser.firstname,
                lastName:newUser.lastname,
                initial:newUser.firstname[0]+newUser.lastname[0]

            })
        }).then(()=>dispatch({type:"SIGNUP_SUCCESS"})).catch((err)=>{
            return dispatch({type:"SIGNUP_ERR",err})
        })
        
}}