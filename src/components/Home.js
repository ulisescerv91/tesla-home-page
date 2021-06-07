import React from 'react'
import styled from 'styled-components';
import Section from './Section'
export default function Home() {
    return (
        <Container >
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                bgImage='model-s.jpg'
                leftBtnText='Customer Order'
                rightBtnText='Existing Inventory'

            />
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                bgImage='model-y.jpg'
                leftBtnText='Customer Order'                

            />

        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`
