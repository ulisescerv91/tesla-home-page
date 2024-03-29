import React, {useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'



export default function Header() {

    const [burgeStatus,setBurgerStatus]=useState(false)

    //get data from redux
    const cars = useSelector(selectCars)
    console.log(cars)

    return (
        <Container>
            <a>
                <img  src='./images/logo.svg' alt='Tesla Logo'/>
            </a>
            <Menu>
                {
                    cars && cars.map( (car,index) =>
                       <a href='#' key={index}>{car}</a>
                    )
                }              
            </Menu>
            <RightMenu>
                    <a href='#'>SHOP</a>
                    <a href='#'>Tesla Account </a>
                    <CustomMenu onClick={ () => setBurgerStatus(true) }/>
            </RightMenu>
            <BurgerNav show={burgeStatus}>
                <CloseWrapper>
                    <CustomClose onClick={ () => setBurgerStatus(false) }/>
                </CloseWrapper>
                <li> <a href='#'>Existing Inventory</a>  </li>
                <li> <a href='#'>Used Inventory</a>  </li>
                <li> <a href='#'>Trade-in</a>  </li>
                <li> <a href='#'>CyberTruck</a>  </li>
                <li> <a href='#'>Roadaster</a>  </li>

            </BurgerNav>
        </Container>
    )
}

// Style
const Container = styled.div`
    min-height: 60px;
    position:fixed;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding:0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index:1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        font-weight:600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap:nowrap;
    }
    @media(max-width: 786px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight:600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu  = styled(MenuIcon)`
    cursor:pointer
`

const BurgerNav  = styled.div`
    position:fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background:white;
    width: 300px;
    z-index:100;
    list-style:none;
    padding: 20px;
    display: flex;
    flex-direction:column;
    text-align: start;
    transform: ${props => props.show? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease-in  ;
    li{
        padding: 15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight: 600;
        }
    }
`

const CloseWrapper =styled.div`
    display: flex;
    justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

