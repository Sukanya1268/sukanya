{ Component } from "react";
class App extends Component{
  constructor(){
    super();
    this.state={
      "sub":"Angular9"
    }

  }
  render(){
    return (<div><h1>Sub:<span style={{color:'red'}}></span></h1></div>)
  }

}

export default App;


