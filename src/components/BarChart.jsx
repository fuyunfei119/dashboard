import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Barchart() {
  const data = [
    {
      name: 'Wohn',
      uv: 4000,
      female: 2400,
      male: 2400,
    },
    {
      name: 'Schlaf',
      uv: 3000,
      female: 1398,
      male: 2210,
    },
    {
      name: 'Küchen',
      uv: 2000,
      female: 5800,
      male: 2290,
    },
    {
      name: 'Bad',
      uv: 2780,
      female: 3908,
      male: 2000,
    }
  ];

  const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  };


  return (
    <div className='bchart-container'>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={350}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" className='xaxis' />
          <YAxis />
          <Bar dataKey="female" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={"#aedbec"} />
            ))}
          </Bar>
        </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}