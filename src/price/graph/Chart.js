import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Badge } from "react-bootstrap";

class ChartsPage extends React.Component {
  constructor(props) {
    super(props);
    let backgroundColor;
    let borderColor;
    let pointBackgroundColor;
    if (this.props.price > this.props.previousPrice) {
      backgroundColor = "rgb(191,227,209,0.4)";
      borderColor = "rgb(191,227,209)";
    } else {
      backgroundColor = "rgba(255, 134,159,0.4)";
      borderColor = "rgba(255, 134,159)";
    }

    this.state = {
      dataLine: {
        labels: this.props.dates.map(timestamp => new Date(timestamp * 1000).getDate()),
        datasets: [
          {
            label: "Price History",
            fill: true,
            lineTension: 0.3,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: borderColor,
            pointBackgroundColor: borderColor,
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: borderColor,
            pointHoverBorderColor: pointBackgroundColor,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.data.map(price => price.toFixed(2)),
          },
        ],
      },
    };
  }

  render() {
    return (
      <MDBContainer>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
        <Badge variant="info">{this.props.t('badgeGraph')}</Badge>
      </MDBContainer>
    );
  }
}

export default ChartsPage;
