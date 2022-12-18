import styled from '@emotion/styled'
import Link from 'next/Link'

export default function SideBarMuen(){
  return (
    <>
      <StyleWrap>
        <ul>
          <li>
            <Link href='/chartsIndex' >
              <img src="./dbdLabLog.png" alt=""/> DBDLAB Corp.
            </Link>
          </li>
          <li>
            <Link href='/chartsIndex' >
              <img src="./dashBoard.svg" alt=""/> DashBoard
            </Link>
          </li>
          <li>
            <Link href='/defaultIndex' >
              <img src="./reasearch.svg" alt=""/> Reasearch
            </Link>
          </li>
          <li>
            <Link href='/defaultIndex' >
              <img src="./members.svg" alt=""/> Members
            </Link>
          </li>
          <li>
            <Link href='/defaultIndex' >
              <img src="./insight.svg" alt=""/> Insight
            </Link>
          </li>
          <li>
            <Link href='/defaultIndex' >
              <img src="./calendar.svg" alt=""/> Calendar
            </Link>
          </li>
        </ul>
      </StyleWrap>
    </>
  )
}

const StyleWrap = styled.div`
  ul {
    width: 253px;
    list-style:none;
  }
`