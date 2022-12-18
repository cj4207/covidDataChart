import { Bar } from 'react-chartjs-2'
export default function BarChart({ageCaseInfoState, ageBackGroundColor}:any) {

  const barDatasetsArr:any[] = []

  ageCaseInfoState?.gubun.map((el:string)=>{
    if(el !== '남성' && el !== '여성'){
      const dataset = {
        label: `${el}`,
        data: ageCaseInfoState[el],
        backgroundColor: ageBackGroundColor[el]
      }
      barDatasetsArr.unshift(dataset)
    }
  })

  const data = {
    labels: ageCaseInfoState?.stateDt,
    datasets: barDatasetsArr
  }
  const options:any = {
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    responsive: false,
    indexAxis: 'y' as const,
    scales: {
      x: {
        stacked:true
      },
      y: {
        stacked:true
      }
    }
  }
  return (
    <>
      {data && <Bar data={data} options={options} width={385} height={249}/>}
    </>
  )
}
