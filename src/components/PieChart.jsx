import React, {useState, useCallback, useTransition} from "react";
import { PieChart, Pie, ResponsiveContainer, Sector } from "recharts";

export default function Piechart() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (... index) => {
          setActiveIndex(index);
        },
        [setActiveIndex]
      );

    const data = [
        { name: "Erd Gas", value: 400 },
        { name: "Strom", value: 300 },
        { name: "Wasser", value: 300 },
        { name: "Anderes", value: 200 }
      ];

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const {cx,cy,midAngle,innerRadius,outerRadius,startAngle,endAngle,fill,payload,percent,value} = props;

        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";
      
        return (
          <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
              {payload.name}
            </text>
            <Sector
              cx={cx}
              cy={cy}
              isAnimationActive = {false}
              innerRadius={innerRadius + 3}
              outerRadius={outerRadius + 3}
              startAngle={startAngle}
              endAngle={endAngle}
              fill={fill}
              className="piechart"
            />
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={"#aedbec"}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={4} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="black"
            >{`Gebraucht ${value}`}</text>
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              dy={18}
              textAnchor={textAnchor}
              fill="black"
            >
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
      };
    
    return (
        <div className="piechart-container">
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <PieChart width={350} height={300}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="55%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        fill="#aedbec"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            {/* </ResponsiveContainer> */}
        </div>
    )
}