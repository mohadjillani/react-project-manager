import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

function Test() {
    return (
        <div>
            <h1>Hello React</h1>
        </div>
    )
}
const mapToState=(state)=>{
console.log(state.firestore.data.project)
return {
    state
}
}
export default compose(
    connect(mapToState),
    firestoreConnect([
        {collection:'project'}
    ])
)(Test)
