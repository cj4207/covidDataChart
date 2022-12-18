import { Pie } from 'react-chartjs-2'
import styled from '@emotion/styled'
import { useRef, useState, useEffect } from 'react'
export default function PieChart({ageCaseInfoState, ageBackGroundColor}:any) {

  const dateSelect:any = useRef()
  const [selDateState, setSelDateState] = useState<string>()
  const [dateState, setDateState] = useState<any>()
  const [pieDatasetsArrState, setPieDatasetsArrState] = useState<any>()

  useEffect(()=>{
    const pieDatasetsArr:any[] = []
    ageCaseInfoState?.gubun.map((el:string)=>{
      if(el === '남성' || el === '여성'){
        const dataset = {
          label: `${el}`,
          data: ageCaseInfoState[el],
          backgroundColor: ageBackGroundColor[el]
        }
        pieDatasetsArr.unshift(dataset)
      }
    })
    setPieDatasetsArrState(pieDatasetsArr)
    setSelDateState(ageCaseInfoState?.stateDt[0])
  }, [ageCaseInfoState])
  useEffect(()=>{
    if(pieDatasetsArrState){
      const findIndex = ageCaseInfoState?.stateDt.findIndex((el:string)=>el==selDateState)
      const labels = ageCaseInfoState?.gubun.filter((el:string)=>el == '남성' || el=='여성')
      setDateState({
        labels: labels,
        datasets: [
          {
            label: ageCaseInfoState?.stateDt[0],
            data: [pieDatasetsArrState[1]?.data[findIndex], pieDatasetsArrState[0]?.data[findIndex]],
            backgroundColor: ['#629ACD', '#E79997']
          }
        ]
      })
    }
  }, [selDateState, pieDatasetsArrState])
  
  const onSelect = (e:any) => {
    setSelDateState(e.target.value)
  }
  return (
    <>
    <StyleWrap>
      <select onChange={onSelect} ref={dateSelect} defaultValue='1'>
        {ageCaseInfoState?.stateDt.map((el:string, idx:number)=>
          <option key={idx}>{el}</option>
        )}
      </select>
      {dateState && <Pie data={dateState} options={{responsive: false, plugins: {legend: {position:'bottom'}}}} width={300} height={300}/>}
    </StyleWrap>
    </>
  )
}

const StyleWrap = styled.div`
  padding: 55px;
  position: relative;
  select {
    position: absolute;
    right: 150px;
    top: 0px;
  }
`