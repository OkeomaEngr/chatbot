import React from 'react';
import "../css/App.css";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../robots';
import space from '../images/space.gif';

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
        robots: robots, //state 1
        searchfield: '' //state 2
    }
  }



  onSearchChange = (event) => { // 
    this.setState({searchfield: event.target.value}) // if you wanna change the state , always remember to add target.value
      console.log(event.target.value); // always remember this 
  }

   
  
  render(){ // This is where the action happens ;)
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
  
   return(
    <div style={{ backgroundImage:`url(${space})`,backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className="tc">
      <h1 className='f1'>CHATBOTS</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      {/* <button onClick={()=>setCount(count+1)}>Click Me!</button> */}
      <Scroll>
          <CardList robots={filteredRobots} />
      </Scroll>
    </div>
   );
  }
};

export default App;


// import React, { useState, useEffect } from 'react';
// import "../css/App.css";
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';

// function App() {
//   const [robots, setRobots] = useState([])
//   const [searchfield, setSearchfield] = useState('')

//   useEffect(()=> {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response=> response.json())
//       .then(users => {setRobots(users)});
//   },[]) 

//   const onSearchChange = (event) => {
//     setSearchfield(event.target.value)
//   }

//   const filteredRobots = robots.filter(robot =>{
//     return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//   })
  
//   return !robots.length ?
//     <h1>Loading</h1> : (
//     <div className="tc">
//       <h1 className='f1'>CHATBOTS</h1>
//       <SearchBox searchChange={onSearchChange}/>
//       {/* <button onClick={()=>setCount(count+1)}>Click Me!</button> */}
//       <Scroll>
//           <CardList robots={filteredRobots} />
//       </Scroll>
//     </div>
//   );
// };

// export default App;
