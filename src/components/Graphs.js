import React from 'react'
import { useSelector } from 'react-redux';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 400 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#80ffdb', '#72efdd', '#64dfdf', '#56cfe1', '#48bfe3'];
const COLORS1 = ['#4ea8de', '#5390d9', '#5e60ce', '#6930c3', '#7400b8']

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Graphs() {
  const incomeData = useSelector(state => state.income)
  const expenseData = useSelector(state => state.expense)
  //console.log(incomes)
  return (
    <div className="flex justify-around items-center mt-4 mb-4 bg-gray-900 w-3/4 m-auto rounded">
      <div className="flex flex-col items-center">
        <h2 className="text-gray-200 text-4xl transform translate-y-16 font-light">Income chart</h2>
        <PieChart className="bg-red-100" width={400} height={400}>
          <Pie
            data={incomeData}
            cx={200}
            cy={200}
            innerRadius={60}
            paddingAngle={5}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#48bfe3"
            dataKey="price"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-col items-center">  
        <h2 className="text-gray-200 text-4xl transform translate-y-16 font-light">Expense Chart</h2>
        <PieChart width={400} height={400}>
          <Pie  
            data={expenseData}
            cx={200}
            cy={200}
            innerRadius={60}
            paddingAngle={5}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#7400b8"
            dataKey="price"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />)
            }
          </Pie>
        </PieChart>
      </div>
      
    </div>
  )
}

export default Graphs;
