import axios from 'axios';
import App from "../App";

const  url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        return {confirmed, recovered, deaths, lastUpdate}

    } catch(error){
        console.log(error);
    }
}