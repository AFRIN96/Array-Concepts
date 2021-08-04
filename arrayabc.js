import './App.css';
import { Component } from 'react';

class App extends Component {

  render(){
    const arrays =[{name:"A"},{name:"B"},{name:"C"},{name:"D"}];
   let listArrays =[];
   console.log("Array Length:",listArrays.length)
   listArrays = arrays.map((array)=>
  { 
    return(
    <li key={array.name}>
    {array.name}
    </li>
  )
  });
  console.log("Array Length:",listArrays.length)
  return (
    <div className="App">
       <ul>
       {listArrays}
       </ul>
    </div>
  );
  }
}
export default App;
