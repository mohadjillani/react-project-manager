import React,{useState} from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signUp} from '../../reducers/actions/authAction'
function Signup(props) {
    
    const [inputs, setinputs] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:""
        
    })
    const handleChange=(e)=>{
        
        setinputs({...inputs,
            [e.target.id]:e.target.value
        })
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.signUp(inputs);
    };
    if(props.auth.uid){
       return <Redirect to="/" />
    }
    
    return (
        <div className="container">
            <br/><br/>
            <h4 className="grey-text text-darken-3 text-bold">Sign Up</h4>
            <br/>
    {props.signUpErr?<div className="red-text center">{props.signUpErr.message}</div>:null}
            <form onSubmit={handleSubmit}>
            <div className="input-field">
                    <label className=""  htmlFor="firstname">First Name</label>
                    <input id="firstname" type="text" onChange={handleChange}></input>
                </div>
                <br/>
                <div className="input-field">
                    <label className=""  htmlFor="lastname">Last Name</label>
                    <input id="lastname" type="text" onChange={handleChange}></input>
                </div>
                <br/>
                <div className="input-field">
                    <label className=""  htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleChange}></input>
                </div>
                <br/>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handleChange}></input>
                </div>
                <br/>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
        signUpErr:state.auth.authStatus
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(newuser)=>dispatch(signUp(newuser))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Signup)
