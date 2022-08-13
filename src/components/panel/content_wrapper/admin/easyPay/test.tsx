import React from "react";
import ChartistGraph from "react-chartist";

export class Test extends React.Component {


    constructor(props: any) {

        super(props)
    }


    render() {


        var data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
        };


        return (
            <>
                <ChartistGraph type="Bar" data={data} />
            </>
        )

    }





}