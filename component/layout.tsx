import styled from '@emotion/styled'
import Nav from './nav'

export default function Layout({children}:any){
  return(
    <>
      <StyleWrap>
        <Nav/>
        <div>
          {children}
        </div>
      </StyleWrap>
    </>
  )
}

const StyleWrap = styled.div`
  display: flex;
  background-color: #F8F8F8;
`