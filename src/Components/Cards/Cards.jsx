import React from 'react';
import CountUp from 'react-countup';
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed
    ) {
        return <>loading.....</>
    }
    return (
        <div className='cardcontainer'>
            <div className='Card'style={{borderBottom:'red 8px solid'}}>
                <h3 className='cardheading'>Infected</h3>
                <p className='value'><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></p>
                <p className='date'>{new Date(lastUpdate).toDateString()}</p>
            </div>
            <div className='Card'style={{borderBottom:'green 8px solid'}}>
                <h3 className='cardheading'>Recovered</h3>
                <p className='value'><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></p>
                <p className='date'>{new Date(lastUpdate).toDateString()}</p>
            </div>
            <div className='Card'style={{borderBottom:'blue 8px solid'}}>
                <h3 className='cardheading'>Deaths</h3>
                <p className='value'><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></p>
                <p className='date'>{new Date(lastUpdate).toDateString()}</p>
            </div>
        </div>
    )
}
export default Cards;