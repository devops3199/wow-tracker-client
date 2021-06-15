import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Records } from 'interfaces/Global';

export default function BarChart({ RecordsArr, title } : Records) {
    const labels = RecordsArr.map((val) => val.date);

    const dun = RecordsArr.map((val) => {
        return val.dun;
    });

    const raid = RecordsArr.map((val) => {
        return val.raid;
    });

    const hours = RecordsArr.map((val) => {
        const begin = val.begin_time.replace(':', '');
        const end = val.end_time.replace(':', '');
        const result = (Number(end) - Number(begin)) / 60;
        return result;
    });
    
    return (
        <div>
            <Bar
                type="bar"
                data={{
                    labels: labels,
                    datasets: [{
                        label: title,
                        data:  title === '플레이 시간' ? hours : ( title === "던전 횟수" ? dun : raid ),
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
                width={900}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};