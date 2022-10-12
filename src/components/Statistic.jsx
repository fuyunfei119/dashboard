import { GiElectric } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";

export default function Statistic() {
    return (
        <div className="statistic-container">
            <div className="wrap">
                <div className="content">
                    <div className="text">
                        <h1>Strom</h1>
                        <span>$6000 <br /> in Monate</span>
                    </div>
                    <GiElectric />
                </div>
            </div>
            <div className="wrap">
                <div className="content">
                    <div className="text">
                        <h1>Gas</h1>
                        <span>$5000 <br /> in Monate</span>
                    </div>
                    <FaGasPump />
                </div>
            </div>
            <div className="wrap">
                <div className="content">
                    <div className="text">
                        <h1>Wasser</h1>
                        <span>$4000 <br /> in Monate</span>
                    </div>
                    <MdWaterDrop />
                </div>
            </div>
            <div className="wrap">
                <div className="content">   
                    <div className="text">
                        <h1>Gesamt</h1>
                        <span>$15000 <br /> in Monate</span>
                    </div>
                    <FaMoneyCheckAlt />
                </div>
            </div>  
        </div>
    )
}