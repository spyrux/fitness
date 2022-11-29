import React, { Component } from "react";



class Calendar extends Component {


    constructor(){
        super();

        this.weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

        this.state = {
            currentDay : new Date()
        }
    }

    render(){
        return (
            <div>
                <h1>
                    Calendar Component
                </h1>
                <h2>{this.weekdays[this.state.currentDay.getDay() -1]}</h2>
            </div>
        )
    }
}

export default Calendar;