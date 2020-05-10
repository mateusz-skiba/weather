import React from 'react';
import Search from './Search';
import View from './View';
import './App.scss';

const APIkey = "968e94fc56180717722c598405dbd766";

class App extends React.Component {
    state = {
        value: "Warszawa",
        city: "",
        country: "",
        day: "",
        data: "",
        temp: "",
        pressure: "",
        description: "",
        err: ""
    }

    getData = () => {
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}`

        fetch(API)
        .then(response => {
            if (response.ok) {
                return response
            }
            throw Error("Error")
            })
        .then(response => response.json())
        .then(data => {
            console.log(`Found city ${this.state.value}`)
            const numberOfDay = new Date().getDay();
            const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = week[numberOfDay];

            const date = new Date().toLocaleDateString();
            
            // degrees Kelvin to Celsius and rounded
            const temp = Math.round((data.main.temp - 273.15) * 10) / 10;

            this.setState({
                city: this.state.value,
                country: data.sys.country,
                day: day,
                data: date,
                temp: temp,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                err: false
            })
        })
        .catch(err => {
                this.setState({
                    err: true
                })
                console.log("Not found city")
            })
    }

    componentDidMount() {
        this.getData()
        }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.getData()
        }
    }

    handleInputChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Search value={this.state.value} change={this.handleInputChange}/>
                    <View weather={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;