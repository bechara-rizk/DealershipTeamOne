import React from 'react'
import AreaChart from '../charts/AreaChart'
import HorizontalBarChart from '../charts/HorizontalBarChart'
import LineChart from '../charts/LineChart'
// import VerticalBarChart from '../charts/VerticalBarChart'

const Charts = () => {
  return (
    <div className="charts">
      <div>
        <HorizontalBarChart/>
      </div>
      {/* <div>
        <VerticalBarChart/>
      </div> */}
      <div>
        <LineChart/>
      </div>
      <div>
        <AreaChart/>
      </div> 
    </div>
  )
}

export default Charts