import styled from '@emotion/styled'
import Link from 'next/Link'

export default function Nav(){
  return (
    <>
      <StyleWrap>
        <ul>
          <li>
            <Link href='/chartsIndex' >
              <img src="./dbdLabLog.png" alt="" width='24'/> DBDLAB Corp.
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 253px;
    height: 1024px;
    list-style:none;
    li:first-child {
      margin-top: 48px;
      margin-bottom: 56px;
    }
    li:not(:first-child) {
      margin-bottom: 32px;
    }
    li {
      margin-left: 48px;
      img {
        margin-right: 8px;
      }
    }
  }
`
