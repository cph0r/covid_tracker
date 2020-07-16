import React from "react";
import { Card, CardContent, Typography, Grid} from "@material-ui/core";
import CountUp from "react-countup";

import styles from './Cards.modules.css';


const Cards = ({data: {confirmed, recovered , deaths, lastUpdate}}) => {
    if(!confirmed || !recovered || !deaths || !lastUpdate){
        return 'Loading';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom> Infected</Typography>
                        <Typography variant={"h5"}>
                            {/*<CountUp */}
                            {confirmed.value}</Typography>
                        <Typography color={"textSecondary"}> REAL DATE</Typography>
                        <Typography variant={"body2"}>Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom> Recovered</Typography>
                        <Typography variant={"h5"}>{recovered.value}</Typography>
                        <Typography color={"textSecondary"}> REAL DATE</Typography>
                        <Typography variant={"body2"}>Number of Recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom> Deaths</Typography>
                        <Typography variant={"h5"}>{deaths.value}</Typography>
                        <Typography color={"textSecondary"}> REAL DATE</Typography>
                        <Typography variant={"body2"}>Number of Deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;