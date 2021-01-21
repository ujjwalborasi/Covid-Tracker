import React, { useEffect, useState } from 'react';
import {regulardata} from '../../FetchApi/fetch';
import {Line, Bar} from 'react-chartjs-2';
function Charts({ data:{confirmed, recovered, deaths, lastUpdate}, country}) {
    const [info, setinfo] = useState([]);
    useEffect(()=>{
        const callData = async () =>{
             setinfo(await regulardata());
            }
        callData();
    },[]);
    const graph =(
        info.length
        ?(
        <Line
        data={{
            labels: info.map(({date})=> date),
            datasets:[{
                data: info.map(({confirmed})=> confirmed),
                label: 'infected',
                fill: true,
                borderColor: 'red'},{
                    data: info.map(({deaths})=>deaths),
                    label: 'deaths',
                    fill: true,
                    borderColor: 'blue'
                }]
        }}/>
        ):null
    );
    const barplot = ( 
        confirmed ? (
            <Bar
              data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                  {
                    label: 'People',
                    backgroundColor: ['red', 'green', 'blue'],
                    data: [confirmed.value, recovered.value, deaths.value],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
              }}
            />
          ) : null
        );
    return (
        <div className="chart-container">
            {country? barplot:graph}
        </div>
    )
}
export default Charts;
