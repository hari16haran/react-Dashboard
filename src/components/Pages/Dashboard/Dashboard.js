import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBRow,
  MDBCol
} from "mdbreact";
import "./../../../components/style.css";
import HighChart from "../../Chart/Highchart";
import LineChart from "../../Chart/LineGraph";
import Barcolumn from "../../Chart/barcolumn";
import axios from 'axios';
import Data from "../../utils.js";
// api.mocki.io/v1/618954fe
export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            highchartData:{},
            sampleif : {
                series: [
                {
                    name: "Total",
                    color: "#ffb74e",
                    data: [49.9, 71.5, 106.4, 129.2, 144.0],
                },
                {
                    name: "Used",
                    color: "#f7485e",
                    data: [83.6, 78.8, 98.5, 93.4, 106.0],
                },
                {
                    name: "Free",
                    color: "#4782fa",
                    data: [48.9, 38.8, 39.3, 41.4, 47.0],
                },
            ]
        }
        }
    }

    
    componentDidMount() {
    axios.get(`https://api.mocki.io/v1/618954fe`)
      .then(res => {
        const data = res.data;
        console.log(data.series,'highchartData')
        this.setState({ highchartData : data });
      })
      .catch(err => {
            console.log(err)
            this.setState({
                highchartData: this.state.sampleif
            })
      })
    }

  render() {
    return (
      <div>
        <MDBRow className="mb-15 Dashboard-widgets">
          <MDBCol xl="12" md="12" sm="12" className="mb-r">
            <MDBRow className="mb-4">
              {Data &&
                Data.adminWidgets.map((list,i) => (
                  <MDBCol key={i} xl="3" md="6" className="mb-r">
                    <MDBCard className="cascading-admin-card">
                      <MDBCardBody>
                        <MDBRow className="">
                          <MDBCol
                            xl="4"
                            md="4"
                            sm="4"
                            className="mb-r left-space"
                          >
                            <MDBIcon icon={list.icon} />
                          </MDBCol>
                          <MDBCol
                            xl="8"
                            md="8"
                            sm="8"
                            className="mb-r right-space"
                          >
                            <p>{list.Tag1}</p>
                            <p>{list.Tag2}</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
            </MDBRow>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol xl="7" md="8" sm="12" className="mb-r">
            <MDBCard className="">
              <HighChart dataChart={this.state.highchartData}/>
            </MDBCard>
          </MDBCol>
          <MDBCol xl="5" md="4" sm="12" className="mb-r">
            <MDBCard className="left-side-process ">
              <MDBCardBody>
                <MDBRow className="mb-15 ">
                  <MDBCol md="8">
                    <LineChart />{" "}
                  </MDBCol>
                  <MDBCol md="4">
                    <p>PROCESSES</p>
                    <p>1,590</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="left-side-Latency">
              <div className="latency">
                <span>LATENCY</span>
                <span>2.3ms</span>
              </div>
              <MDBCardBody>
                <MDBRow className="">
                  <MDBCol md="12">
                    <Barcolumn />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
