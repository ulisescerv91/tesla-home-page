import React from 'react'
import styled from 'styled-components';


export default function Section({title,description,bgImage,rightBtnText,leftBtnText}) {
    return (
        <Wrap bgImageName={bgImage}>
            <ItemText>
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    {
                        rightBtnText && <RightButton>{rightBtnText}</RightButton>
                    }                    
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div `
    /* width: 100vw; */
    height: 100vh;
    /* background:orange; */
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImageName}")`};
`

const ItemText = styled.div `
    padding-top: 10vh;
    text-align: center;
`;

const ButtonGroup = styled.div `
    display: flex;
    align-items: center;
    @media ( max-width: 768px ){
        flex-direction:column;
    }
`;

const LeftButton = styled.div `
    background-color: rgba(23, 36, 32, 0.8);
    height: 40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin:9px;

`;
const RightButton = styled(LeftButton)`
    background:white;
    color:black;
    opacity:0.85;

`;

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    overflow-x:hidden;
    animation:animationDown infinite 1.5s;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom: 30px;
`
