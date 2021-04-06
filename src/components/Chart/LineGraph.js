import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { MDBIcon } from "mdbreact";

export default class Highchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        chart:{
            height: '150px',
           
        },
        title: {
            text: ''
          },
        credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
        xAxis: { min: 0,
            title: {
              text: ''
            },
            lineWidth: 0,
          gridLineWidth: 0,
          lineColor: 'transparent',
          minorTickLength: 0,
          tickLength: 0,
          labels: {
            enabled: false
          },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            enabled: false
          },
        yAxis:{
            min: 0,
            title: {
              text: ''
            },
            lineWidth: 0,
            gridLineWidth: 0,
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
            labels: {
              enabled: false
            },  
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
    
        series: [{
            data: [29.9, 71.5, 10.4, 129.2, 14.0],
            color: '#f74659'
        }]
    },
      hoverData: null,
    };
  }

  render() {
    const { chartOptions, hoverData } = this.state;
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}
