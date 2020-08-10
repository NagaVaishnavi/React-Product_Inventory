import React from 'react';
import Chart from "react-google-charts";

class  Dashboard extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ display: 'flex', maxWidth: 900 }}>
  <Chart
    width={500}
    height={700}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Products', 'quantity', 'price'],
      ['Cheese',300, 12],
      ['shirts', 200, 500],
      ['tops', 20, 500],
      ['mobiles', 100, 12000],
      ['ipad', 200, 15000],
    ]}
    options={{
      title: 'Products Stock',
      chartArea: { width: '40%', height:'50%'},
      hAxis: {
        title: 'Total Products',
        minValue: 0,
      },
      vAxis: {
        title: '',
      },
    }}
    legendToggle
  />


<Chart
  width={'600px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Product', 'quantity'],
    ['Cheese', 300],
    ['Mobile', 100],
    ['Shirts', 100],
    ['Ipad', 200],
    ['Pan', 35],
  ]}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  
  </div>
         );
    }
}
 
export default Dashboard;