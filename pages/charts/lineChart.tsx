import { Line } from 'react-chartjs-2'
export default function LineChart({coronaInfoState}:any) {
  
  const data:any = {
    labels: coronaInfoState?.stateDtArr,
    datasets: [
      { 
        label: 'Dataset 1',
        data: coronaInfoState?.decideCntArr, borderColor: '#E79997', pointStyle: false },
    ]
  }
  return (
    <>
      {data && <Line data={data} width={840} height={273} options={{responsive: false, plugins: {legend: {display:false}}}}/>}
    </>
  )
}
