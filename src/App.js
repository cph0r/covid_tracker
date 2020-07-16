import React from "react";
// import Cards from "./components/Cards/Cards";
// import Charts from "./components/Charts/Charts";
// import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Charts, CountryPicker } from './components';
import styles from 'App.module.css';

class App extends React.Component{
    render(){
        return(
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Charts />
                <h1>App</h1>
            </div>
        )
    }
}

export default App