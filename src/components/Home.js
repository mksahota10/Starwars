import React, {useEffect, useState} from 'react'
//import axios
import axios from 'axios'
import{Link} from 'react-router-dom'
import Starships from './Starships'
//Import Spinner 

//CSS import
//import "../css/components/Blog.css";
// if the div is in the same line as the return you dont need the () in return
const Home = () => {
  //initial state
  const [starship, setStarship] = useState([])
  //spinner will use the state below
  
//happens at the very end, 

  useEffect(()=>{
    axios.get('https://swapi.dev/api/starships/').then((res) =>{
        console.log(res.data.results)
      setStarship(res.data.results)
    })
  }, [])
  
  const display = () => {
    return starship.map ((ship, index) => (
        <div key={ship.id} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{ship.name}</span>
            </div>
            <div className="card-action">       
  <Link
    to={{
      pathname: `/Starships/${index}`,
      state: { ship }
    }}
    key={ship.name}
  >
    <h2>View Starship Infomation</h2>
    {/* //{{starship.name}} */}
  </Link>
            </div>
          </div>
        </div>
      ))
    }
    //
  return (
    <div className="container">
      <h2> Starship </h2>
      <div className="row">{starship.length>0?
      display() : null}
      </div>;
      {/* <Starships starship = {setStarship} /> */}
    </div>
  ) 
}


export default Home;
