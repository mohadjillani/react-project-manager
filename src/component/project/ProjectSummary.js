import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function ProjectSummary({project}) {
    return (
       
        <div className=" card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            
            <Link to={"/project/"+project.id}><span className="card-title">{project.title}</span></Link>
            <p>posted by the {project.autherName}</p>
            <p className="grey-text">{moment(project.createat.toDate()).calendar()}</p>
        </div>
        <hr></hr>
    </div>
       
    )
}
