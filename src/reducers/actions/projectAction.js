export const createProject=(project)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //make a call to database
        const autherName=getState().firebase.profile.firstName;
        const autherId=getState().firebase.auth.uid;
        const firestore=getFirestore();
        firestore.collection('project').add({
            autherName:autherName,
            autherId:autherId,            
            title:project.title,
            content:project.content,
            createat:new Date(),
        }).then(()=>{dispatch({type:"CREATE_PROJECT",project})
                }).catch((err)=>{
                    console.log("error")
                    })
       
        
    }
}