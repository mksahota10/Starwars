import React from 'react'
import {Route, Link} from 'react-router-dom'

const Starships = (params) => {
    //console.log(params)
    //console.log(params.location.state.ship)
    let shipInfo = params.location.state.ship
    return (
        <div>
             <div class="row">
             <div class="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{shipInfo.name}</span>
              <span className="card-title">{shipInfo.model}</span>
              </div>
              </div>
            <div className="card-action">   
            

            <Link to={{pathname: "/"}}> Return </Link>
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Starships
