import React,{useState} from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../reducers/actions/projectAction';
import { Redirect } from 'react-router-dom';

function CreateProject(props) {
    const [inputs, setinputs] = useState({
        title:"",
        content:""
    })
    const handleChange=(e)=>{
        
        setinputs({...inputs,
            [e.target.id]:e.target.value
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.create(inputs);
        props.history.push("/");
    };
    if(!props.auth.uid){
        return(<Redirect to="/signin"/>)
    }
    
    return (
        <div className="container">
            <br/><br/>
            <h5 className="grey-text text-darken-3 text-bold">Create Project</h5>
            <br/>
            <form onSubmit={handleSubmit} className="white">
                <div className="input-field">
                    <label className=""  htmlFor="title">Title</label>
                    <input id="title" type="text" onChange={handleChange}></input>
                </div>
                <br/>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea  className="materialize-textarea" id="content"  onChange={handleChange}></textarea>
                </div>
                <br/>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}
    const mapToProps=(dispatch)=>{
        return{
            create:(project)=>dispatch(createProject(project))
        }
    }

    const mapStateToProps=(state)=>{
        return{
            auth:state.firebase.auth
        }
    }
export default connect(mapStateToProps,mapToProps) (CreateProject);
