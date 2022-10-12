import Statistic from "./Statistic";
import Progress from "./Progress";
import AreaChart from "./AreaChart";
import Piechart from "./PieChart";
import Barchart from "./BarChart";
import Radarchart from "./RadarChart";

export default function MainBoard() {
    return (
        <div className="mainboard-container">
            <div className="box">
                <div className="card">
                    <Statistic />
                </div>
            </div>
            <div className="box">
                <div className="card">
                    <Progress />    
                </div>
            </div>
            <div className="box">
                <div className="card">
                    <AreaChart />
                </div>
            </div>
            <div className="box">
                <div className="card">
                    <Piechart />    
                </div>
            </div>
            <div className="box">
                <div className="card">
                    <Barchart />
                </div>
            </div>
            <div className="box">
                <div className="card">
                    <Radarchart />
                </div>
            </div>
        </div>
    )
}