import React from "react";
import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    render(){
        const{ data } = this.state

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Charts />
                <h1>App</h1>
            </div>
        )
    }
}

export default App