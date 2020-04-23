import React from 'react'
import { Link } from 'react-router-dom'
import SigninLinks from './signinLinks'
import SignoutLinks from './signoutLink'
import { connect } from 'react-redux'

function Navbar(props) {
    const links=props.auth.uid?<SigninLinks profile={props.profile}/>:<SignoutLinks/>
    return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <Link to="/" className="brand-logo left">Project Manager</Link>
        </div>
        {props.auth.isLoaded && links}
    </nav>
    )
}
const mapStateToProps=(state)=>{
    
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)