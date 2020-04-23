import React, { Component } from 'react';
import Notification from './notification';
import ProjectList from '../project/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const mapStateToProps=(state)=>{
    return{
        projects:state.firestore.ordered.project,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}

 class Dashboard extends Component {
    render() {
        if(!this.props.auth.uid){
            return(<Redirect to="/signin"/>)
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification notifications={this.props.notifications}/>
                    </div>

                </div>
            </div>
        )
    }
}


export default compose(connect(mapStateToProps),
                firestoreConnect([
                    {collection:'project',orderBy:['createat','desc']},
                    {collection:'notifications',limit:5,orderBy:['time','desc']}
                ]))(Dashboard)