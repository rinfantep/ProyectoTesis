import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement,Tooltip,Legend);

var options = {responsive: true, maintainAspectRatio:false,}

var data = {
    labels: ['Carne','Jamon','Dulces','Turron','Vino'],
    datasets: [
        {
            label:'Enfermedades',
            data: [35,20,20,15,10],
            backgroundColor: [
                '#ef4444',
                'rgba(255,206,86,0.9)',
                'rgba(54,162,235,0.9)',
                'rgba(75,192,192,0.9',
                'rgba(153,102,255,0.9)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,206,86,1)',
                'rgba(54,162,235,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(153,102,255,0.2)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}