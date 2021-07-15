import React, { useState } from 'react'
import GoogleBar from './GoogleBar';
import Google from './Google';
import Image from './Image';
import "./App.css";
import { Route, Switch } from 'react-router-dom';
function App() {
  const [val, setVal] = useState();
  const adContactHandler = (props) => {
    setVal(props)
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <GoogleBar />}></Route>
        <Route path="/google" exact render={() => <Google adContactHandler={adContactHandler} />}></Route>
        <Route path="/image" exact render={() => <Image imageVal={val} />}></Route>
      </Switch>
    </div >
  );
}

export default App;
