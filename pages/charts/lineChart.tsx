import styled from '@emotion/styled'
import { Bar } from 'react-chartjs-2'
export default function LineChart({coronaInfoState}:any) {
  
  const data:any = {
    labels: coronaInfoState?.stateDtArr,
    datasets: [
      { 
        type: 'line',
        data: coronaInfoState?.decideCntArr,
        borderColor: '#E79997',
        pointStyle: false,
      },
    ]
  }
  const options:any = {
    responsive: false,
    plugins: {
      legend: 
      {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        stacked:true,
        ticks: {
          font: {
            size: 12,
            weight: 400,
            family: "'Red Hat Display', sans-serif"
          },
          color: '#C4C4C4',
        },
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            weight: 400,
            family: "'Red Hat Display', sans-serif"
          },
          color: '#C4C4C4',
        },
      }
    }
  }
  console.log(options,'optionsoptionsoptionsoptions')
  return (
    <>
      <StyleWrap>
        {data && <Bar data={data} width={840} height={273} options={options}/>}
      </StyleWrap>
    </>
  )
}

const StyleWrap = styled.div`
  padding-left: 49px;
`
