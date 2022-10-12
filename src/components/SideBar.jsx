import Logo from '../static/DFKI.png';
import '../App.css';

import { MdSpaceDashboard } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export default function SideBar() {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-top'>
                <div className="sidebar-logo">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="sidebar-content">
                <ul>
                    <li>
                        <a href="">
                            <MdSpaceDashboard />
                            <span>Center</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <GiElectric />
                            <span>Electric</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaGasPump />
                            <span>Gas</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <MdWaterDrop />
                            <span>Water</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <FaMoneyCheckAlt />
                            <span>Money</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <ul>
                    <li>
                        <a href="">
                            <IoSettings />
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}