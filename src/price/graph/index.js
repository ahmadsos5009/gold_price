import React from 'react'
import { Chart } from 'react-charts'
import Box from './Box';
import { Container, Badge } from 'react-bootstrap';

const MyChart = ({pricesHistory}) => {
  const data = React.useMemo(
    () => pricesHistory,
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
      { type: 'linear', position: 'right' }
    ],
    []
  )
  const series = React.useMemo(
    () => ({
      type: 'area',
    }),
    []
  )

  return (
    <>
      <br />
      <br />
      <Container>
      <div style={{ resize: 'both', overflow: 'auto', width: '500px' }}>
        <Box>
          <Chart data={data} series={series} axes={axes} tooltip />
        </Box>
      </div>
      <caption><Badge variant="info">Gold Price During Month</Badge></caption>
      </Container>
      <br />
    </>
  )
}

export default MyChart;