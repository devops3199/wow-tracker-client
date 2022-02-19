import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Record } from 'types';

export default function BarChart(props: { data: Record[]; title: string }) {
    const { data, title } = props;

    const playAt = data.map((val) => val.playAt);

    const dun = data.map((val) => {
        return val.dungeonCount;
    });

    const raid = data.map((val) => {
        return val.raidCount;
    });

    const hours = data.map((val) => {
        const begin = val.beginAt.replace(':', '');
        const end = val.endAt.replace(':', '');
        const result = (Number(end) - Number(begin)) / 60;
        return result;
    });
    
    return (
        <div>
            <Bar
                type="bar"
                data={{
                    labels: playAt,
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