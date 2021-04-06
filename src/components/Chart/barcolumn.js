import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { MDBIcon } from "mdbreact";

export default class Highchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions:{
        exporting: {
          buttons: {
            contextButton: {
              symbol: 'circle', 
              symbolStrokeWidth: 1,
              symbolFill: '#bada55',
              symbolStroke: '#330033'
            }
          }
        },
        chart: {
          type: 'column',
          height: '90px',
          //backgroundColor: 'rgb(183, 5, 32)', //back ground color
          margin: 0
        },
        title: {
          text: '' //removes title of chart
        },
      
        xAxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          crosshair: true, //hover effect of column
          lineWidth: 0, //removes axis line
          gridLineWidth: 0, //removes charts background line
          lineColor: 'transparent',
          minorTickLength: 0, //removes minor axis ticks 
          tickLength: 0, //removes  axis ticks 
          title: {
            enabled: false
          },
          labels: {
            enabled: false
          },
        },
        yAxis: {
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
        tooltip: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          name: 'Tokyo',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          color: '#ffc268'
      
        }]
      },
      hoverData: null,
    };
  }

  setHoverData = (e) => {
    this.setState({ hoverData: e.target.category });
  };

  updateSeries = () => {
    this.setState({
      chartOptions: {
        series: [{ data: [Math.random() * 5, 2, 1] }],
      },
    });
  };

  render() {
    const { chartOptions, hoverData } = this.state;
    return (
      <div>
        <HighchartsReact style={{width: "225px"}, {height: "175px"}} highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}
