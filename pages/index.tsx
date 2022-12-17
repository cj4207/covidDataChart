import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Line, Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, BarController, BarElement, ArcElement, scales } from 'chart.js'
import axios from 'axios'
import { useEffect, useState } from 'react'

ChartJS.register(
  ArcElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function Home() {
  const coronaInfo:any = {
    stateDtArr: [],
    decideCntArr: []
  }
  const ageCaseInfo:any = {
    stateDt: [],
    gubun: []
  }
  const genCaseInfo:any = {
    stateDt: [],
    gubun: []
  }
  const [coronaInfoState, setCoronaInfoState] = useState<any>()
  const [ageCaseInfoState, setAgeCaseInfoState] = useState<any>()
  const [genCaseInfoState, setGenCaseInfoState] = useState<any>()
  useEffect(()=>{
    axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84168dd6-1a38-4965-90a9-0f08f82280ed/getCovid19InfStateJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T130112Z&X-Amz-Expires=86400&X-Amz-Signature=76cd2f5449fab3ea0873903e07427c7a1a5943f9b86ed96788638a5f42164e66&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22getCovid19InfStateJson.json%22&x-id=GetObject')
    .then(res=>{
      res.data.items.item.map((el: any)=>{
        coronaInfo.stateDtArr.unshift(el.stateDt.slice(4))
        coronaInfo.decideCntArr.unshift(el.decideCnt)//.slice(0,2)+'/'+el.stateDt.slice(4).slice(2))
      })
      coronaInfo.stateDtArr.map((el: string, idx: any)=>{
        coronaInfo.stateDtArr[idx] = el.slice(0,2) + '/' + el.slice(2)
      })
      setCoronaInfoState({
        stateDtArr:coronaInfo.stateDtArr,
        decideCntArr:coronaInfo.decideCntArr
      })
    })
    axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f70142f-4f22-4bf9-84d4-62ba9edfcdda/getCovid19GenAgeCaseInfJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221217T130132Z&X-Amz-Expires=86400&X-Amz-Signature=6181b3c54fe3233c7be1c7ab485f3a7b98fd552ef920c8e2ee8e4d254a49df65&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22getCovid19GenAgeCaseInfJson.json%22&x-id=GetObject')
    .then(res=>{
      res.data.items.item.map((el: any)=>{
        const stateDtFormat = el.stateDt.slice(4).slice(0,2)+'/'+el.stateDt.slice(4).slice(2)
        if(!ageCaseInfo.gubun.includes(el.gubun)){
          ageCaseInfo.gubun.unshift(el.gubun)
        }
        if(!ageCaseInfo.stateDt.includes(stateDtFormat)){
          ageCaseInfo.stateDt.unshift(stateDtFormat)
        }
        if(!ageCaseInfo[el.gubun]){
          ageCaseInfo[el.gubun] = []
        }
        ageCaseInfo[el.gubun].unshift(el.confCase)
      })
      console.log(ageCaseInfo,'genAgeCaseInfo')
      setAgeCaseInfoState(ageCaseInfo)
    })
  }, [])
  const lineChratData = {
    labels: coronaInfoState?.stateDtArr,
    datasets: [
      { label: 'Dataset 1', data: coronaInfoState?.decideCntArr, backgroundColor: '#4dc9f6' },
    ]
  }
  const options = {
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
  
  const datasetsArr:any[] = []
  const ageBackGroundColor:any = {
    '80 이상': '#5A87D8',
    '70-79': '#7D87D8',
    '60-69': '#G6D73A',
    '50-59': '#1D8D78',
    '40-49': '#FD87A6',
    '30-39': '#A7D7D8',
    '20-29': '#CD87D8',
    '10-19': '#9287D8',
    '0-9': '#629ACD'
  }
  ageCaseInfoState?.gubun.map((el:string)=>{
    if(el !== '남성' && el !== '여성'){
      console.log(ageBackGroundColor[el],'fefefefefef')
      const dataset = {
        label: `${el}`,
        data: ageCaseInfoState[el],
        backgroundColor: ageBackGroundColor[el]
      }
      datasetsArr.unshift(dataset)
    }
  })
  const barChartData = {
    labels: ageCaseInfoState?.stateDt,
    datasets: datasetsArr
  }
  const pieChartData = {
    labels: ['남성','여성'],
    datasets: [
      { label: 'Dataset 1', data: ['1234','2555'], backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',] },
    ]
  }

  return (
    <>
      <Head>
        <title>디비디랩 과제</title>
      </Head>
      <main className={styles.main}>
        디비디랩 과제
        <Line data={lineChratData} />
        <Bar data={barChartData} options={options} />
        <Pie data={pieChartData} />
      </main>
    </>
  )
}
