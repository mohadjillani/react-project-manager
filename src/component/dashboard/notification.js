import React from 'react'
import moment from 'moment';

export default function Notification({notifications}) {
    
const notify=notifications?notifications.map(n=><li key={n.id}>
    <span className="pink-text">{n.user}</span>&nbsp;&nbsp;
    <span>{n.content}</span>
    <div className="grey-text">{moment(n.time.toDate()).fromNow()}</div><hr/>
    </li>)
:(<p className="container blue-text">Loading...</p>);
    return (
      <div className="section">
          <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Notification</span>
                <ul className="notifications">
                    {notify}
                </ul>
            </div>
          </div>
      </div>
    )
}
