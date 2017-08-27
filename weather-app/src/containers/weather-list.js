import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Chart                from '../components/chart';
import GoogleMap            from '../components/gmap';

class WeatherList extends Component {
    renderWeather(data) {
        const name         = data.city.name,
              temps        = data.list.map(weather => weather.main.temp),
              pressures    = data.list.map(weather => weather.main.pressure),
              humidities   = data.list.map(weather => weather.main.humidity),
              { lat, lon } = data.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} colour="orange" unit="K" /></td>
                <td><Chart data={pressures} colour="green" unit="hPa" /></td>
                <td><Chart data={humidities} colour="black" unit="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);