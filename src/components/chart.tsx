import { Doughnut } from "react-chartjs-2";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LinearScale,
    Title,
    Tooltip,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
);

interface DoughnutChartsProps {
    labels: string[],
    data: number[],
    backgroundColor: string[],
    cutout?: number | string,
    legends?: boolean,
    offset?: number[]
}

export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
    cutout = "80%",
    legends = true,
    offset
}: DoughnutChartsProps) => {
    const doughnutData: ChartData<"doughnut", number[], string> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderColor: ["#000000", "#000000", "#000000", "#000000"], // Set the border color
                borderWidth: 0, // Set the border width
                offset,
            }
        ]
    };

    const doughnutOptions: ChartOptions<"doughnut"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: legends,
                position: 'right',
                labels: {
                    padding: 20,
                }
            }
        },
        cutout
    };

    return <Doughnut data={doughnutData} options={doughnutOptions} />
}
