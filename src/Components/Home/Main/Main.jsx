import React, { useState } from 'react';
import './Main.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)

const Main = () => {

    const [data] = useState({
        labels: ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"],
        datasets: [
            {
                label: "Upcoming Hours",
                data: [27, 28, 28, 29, 30, 29, 29, 28, ],
                backgroundColor: "#3aa8fb",
                tension: 0.4,
                fill: true,
                pointStyle: "rect",

            }
        ]
    })

    return (
        <div className='main'>
            <div className="chart" style={{marginLeft : '50px'}}>
                <Line data={data}>

                </Line>
            </div>

        </div>
    )
}

export default Main
