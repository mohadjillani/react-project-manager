import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';


function ProjectDetails(props) {
    const {project}=props;
    
    
    if(project&&props.auth.uid){
       
        return (
            <div className="container center">
            <div className=" card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
        <span className="card-title"><h3>{project.title}</h3></span>
        <p className="">{project.content}</p><br/><br/>
                            <div className="card-action grey lighten-4">
                            <p>posted by the {project.autherName}</p>
                            <p>{moment(project.createat.toDate()).calendar()}</p>
                            </div>
                </div>
            </div>
           </div>
        )
    }else{
        return(
            <h3 className="container center">loading</h3>
        )
    }
    
}
const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id
    const project=state.firestore.data.project
    
    if(project){
        
    return{
        project:project[id],
        auth:state.firebase.auth
        }
    }else{
        return{
            project:null,
            auth:state.firebase.auth
            
            }
    }
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'project'}])
) (ProjectDetails)
