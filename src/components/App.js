import React from 'react';
import Search from './Search';
import View from './View';
import './App.scss';

const APIkey = "968e94fc56180717722c598405dbd766";

let searchValue = "";

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

    handleInputChange = e => {
        this.setState({value: e.target.value})
    }

    getData = () => {
        console.log(this.state)

        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}`

        fetch(API)
        .then(response => {
            if (response.ok) {
                return response
            }
            throw Error("Nie udało się")
            })
        .then(response => response.json())
        .then(data => {

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
                console.log("Nie znaleziono")
            })
    }

    componentDidMount(prevProps, prevState) {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
        this.getData()
        }

        searchValue = this.state.value;

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Search value={searchValue} change={this.handleInputChange}/>
                    <View weather={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;