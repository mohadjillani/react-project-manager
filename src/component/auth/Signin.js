import React,{useState} from 'react'
import { connect } from 'react-redux';
import {signIn} from '../../reducers/actions/authAction'
import { Redirect } from 'react-router-dom';
function Signin(props) {
    const [inputs, setinputs] = useState({
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
        props.signIn(inputs);
        
    };
    if(props.state.firebase.auth.uid){
        return <Redirect to="/"></Redirect>
    }
    return (
        <div className="container">
            <br/><br/>
            <h5 className="grey-text text-darken-3 text-bold">Sign In</h5>
            <br/>
            <form onSubmit={handleSubmit} className="white">
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
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Sign In</button>
                </div>
        {props.state.auth.authStatus&&(<div className="red-text center">Login Failed</div>)}
            </form>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
return{
    signIn:(creds)=>dispatch(signIn(creds))
    }
};
const mapStateToProps=(state)=>{
   
    return{
        state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)
