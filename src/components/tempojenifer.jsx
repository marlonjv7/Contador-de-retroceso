import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Components/Clock";

function App() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();



    const startTimer = () => {
        const countDownDate = new Date().getTime();
        let interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;


            // const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            // const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            // const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            // const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            const days = distance / (24 * 60 * 60 * 1000);
            const hours = distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60);
            const minutes = distance % (60 * 60 * 1000) / (1000 * 60);
            const seconds = distance % (60 * 1000) / 1000;
            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);

            }
        }, 1000);
    };

    useEffect(() => {
        setTimeout(() => {
            startTimer();
        }, 1000);
        console.log(interval);
    });

    return (
        <div className="App">
            <Clock
                timerDays={timerDays}
                timerHours={timerHours}
                timerMinutes={timerMinutes}
                timerSeconds={timerSeconds}
            />
        </div>
    );
}

export default App;