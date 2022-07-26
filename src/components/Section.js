import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, backgroundImage, description, leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImage}>
       <Fade bottom duration={2000}>
        <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
        </ItemText>
       </Fade>
       <Buttons>
            <Fade bottom duration={3000}>
                <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>

                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                        
                </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
       </Buttons>
       
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
    height : 100vh;
    background-size : cover;
    background-repeat : no-repeat;
    background-position : center;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    background-image : ${props => `url(${props.bgImage})`}
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align : center;
`

const ButtonGroup = styled.div`
    display : flex;
    margin-bottom : 50px;
    @media (max-width : 600px){
        flex-direction : column;
    }
`

const LeftButton = styled.div`
    background-color : rgba(23, 26, 32, 0.8);
    font-weight : bold;
    height : 40px;
    width : 256px;
    color : #fff;
    display : flex;
    border-radius : 100px;
    justify-content : center;
    align-item : center;
    padding-top:12px;
    ${'' /* opacity : 0.85; */}
    font-size : 12px;
    cursor : pointer;
    margin : 8px;

`

const RightButton = styled(LeftButton)`
    background-color : white;
    opacity : 0.75;
    color : black;
    
`

const DownArrow = styled.img`
    height : 40px;
    padding-left : 250px;
    @media (max-width : 600px){
        padding-left : 105px;
    }
    animation : animateDown infinite 1.5s;
    
    
`
const Buttons = styled.div`
    align-items : center;
`

