const initState={
    projects:[
        {id:1,title:"i am project",content:"blan blan blan"},
        {id:2,title:"i am project",content:"blan blan blan"},
        {id:3,title:"i am project",content:"blan blan blan"}
    ]
};
const projectReducer=(state=initState,action)=>{
    switch (action.type){
        case "CREATE_PROJECT":
            return state;
        
        case "CREATE_PROJECT_ERR":
            
            return state;
        default:
            return state        
    }
    
}
export default projectReducer;