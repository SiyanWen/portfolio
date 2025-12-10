
import './App.css';
import MyTabs from './components/MyTabs.js';
import Tab1 from './components/Tab1.js';
import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton";
import {  Heading } from "./components/Styles";
function App() {
  return (
    <Fragment >
     <Heading>Be realistic. Learn, Adapt and Discipline</Heading>
    <div className="App" style={{ padding:"0px 20px 0px 20px" }}>
    
    <Tab1 />
    
    </div>
    <ScrollButton />
    </Fragment>
  );
}

export default App;
