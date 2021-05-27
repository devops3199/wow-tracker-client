import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Records } from 'interfaces/Global';

export default function BarLineChart({ RecordsArr, title } : Records) {

    const labels = RecordsArr.map((val) => val.date);
    const hours = RecordsArr.map((val) => {
        const begin = val.begin_time.split(':');
        const end = val.end_time.split(':');
        return Number(end[0]) - Number(begin[0]);
    })

    return (
        <div>
            <Bar
                type="bar"
                data={{
                    labels: labels,
                    datasets: [{
                        label: title,
                        data: hours,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};