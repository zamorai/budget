import React from 'react'
import { useSelector } from 'react-redux';
import { PieChart, Pie, Sector, Cell, LabelList } from 'recharts';

const COLORS = ['#80ffdb', '#72efdd', '#64dfdf', '#56cfe1', '#48bfe3'];
const COLORS1 = ['#4ea8de', '#5390d9', '#5e60ce', '#6930c3', '#7400b8']



function Graphs() {
  const incomeData = useSelector(state => state.income)
  const expenseData = useSelector(state => state.expense)

  let renderIncomeLabel = (incomeData) => {
    return incomeData.name
  }

  let renderExpenseLabel = (expenseData) => {
    return expenseData.name
  }

  return (
    <div className="flex justify-around items-center mt-4  bg-gray-100 shadow w-3/4 m-auto rounded">
      <div className="flex flex-col items-center">
        <h2 className="text-gray-900 text-4xl transform translate-y-16 font-light mb-12 -mt-12">Income chart</h2>
        <PieChart width={350} height={250}>
          <Pie
            data={incomeData}
            cx='50%'
            cy='50%'
            innerRadius={60}
            paddingAngle={5}
            labelLine={false}
            label={renderIncomeLabel}
            outerRadius={80}
            fill="#48bfe3"
            dataKey="price"
          >
            {
              incomeData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-col items-center">  
        <h2 className="text-gray-900 text-4xl transform translate-y-16 font-light mb-12 -mt-12">Expense Chart</h2>
        <PieChart width={350} height={250}>
          <Pie  
            data={expenseData}
            cx='50%'
            cy='50%'
            innerRadius={60}
            paddingAngle={5}
            labelLine={false}
            label={renderExpenseLabel}
            outerRadius={80}
            fill="#7400b8"
            dataKey="price"
          >
            {
              expenseData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />)
            }
          </Pie>
        </PieChart>
      </div>
      
    </div>
  )
}

export default Graphs;


