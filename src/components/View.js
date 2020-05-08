import React from 'react';

const View = props => {

    const {value, city, country, day, data, temp, pressure, description} = props.weather

    return ( 
        <div className="view">
            <div className="box">
                <h2 className="place">{city}, {country}</h2>
                <p className="data">{day}, {data}</p>
                <div className="tempBox">
                    <h1 className="temp">{temp}°C</h1>
                </div>
                <h2 className="description">{description}</h2>
                <p className="pressure">{pressure} hPa</p>
                
            </div>
        </div>
     );
}
 
export default View;