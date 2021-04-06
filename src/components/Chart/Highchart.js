import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { MDBIcon } from "mdbreact";

export default class Highchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        chart: {
          type: "column",
          marginTop : 90,
        },
        title: {
          text: "Memory Usage",
          align: 'left',
          y: 15,
          x: 15 
        },
        legend: {
          layout: "horizontal",
          align: "top",
          verticalAlign: "top",
          squareSymbol: false,
          symbolWidth: 16,
          symbolRadius: 0,
          y: 30,
          x: 10
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          gridLineDashStyle: "Dash",
          gridLineColor: "#ccc",
          title: {
            text: "$ (thousands)",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.1,
            borderWidth: .5,
          },
        },
        responsive: {  
            rules: [{  
              condition: {  
                maxWidth: 500  
              },  
            }]  
          },
        series: [],
      },
      hoverData: null,
    };
  }

  setHoverData = (e) => {
    this.setState({ hoverData: e.target.category });
  };
  componentWillReceiveProps(nextprops) {
      console.log(nextprops)
    if(nextprops.dataChart &&
      nextprops.dataChart.series && 
      nextprops.dataChart.series.length > 0) {  
        this.setState(prev=>({
            ...prev,
            chartOptions : {
                ...prev.chartOptions,
                series: nextprops.dataChart.series
            }
        }));
    } 
  }
  render() {
    const { chartOptions, hoverData } = this.state;
    return (
      <div>
        <p className="updateButton">
          <MDBIcon icon="sync" />
        </p> 
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    );
  }
}
