import React from 'react';
import './App.css';

export class App extends React.Component{
  constructor(props) {
  super(props);
    
  }
}

 render(){
  return(
    <div>
    <header className = "header">
           CracKit
         </header>
    </div>
    <div className = "searchText"><h3>Find Your Dream Jobs Here</h3></div>
    <form className = "fields">
    <input className = "search-Form" type = "text" value = {this.state.value} onChange = {this.handleInput}/>
           <Button onClick = {this.showResults} variant = "secondary" className = "searchButton">Search</Button>
         </form>
  )
}

export default App;