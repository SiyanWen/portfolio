
import './App.css';
import MyTabs from './components/MyTabs.js';
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton";
import {  Heading } from "./components/Styles";
function App() {
  return (
    <Fragment >
     <Heading>A software developer with great enthusiasm for the product</Heading>
    <div className="App" style={{ padding:"0px 20px 0px 20px" }}>
    
    <MyTabs />
    
    </div>
    <ScrollButton />
    </Fragment>
  );
}

export default App;
