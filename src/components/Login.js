import React from 'react'
import styled from 'styled-components'
function Login() {
    return (
        <Container>
            <Content>
                <CtaLogoOne src="/images/cta-logo-one.svg" />
                <SignUp>Get All There</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CtaLogoTwo src="/images/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

export default Login
const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    &::before{
        content:'';
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        background-image: url('/images/login-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        background-attachment: fixed;
        opacity: 0.7;
    }
`
const Content = styled.div`
    max-width: 650px;
    width:70%;
    padding:80px 40px;
    margin-top: 100px;
`
const CtaLogoOne = styled.img``

const SignUp = styled.a.attrs({href:"#"})`
    width:100%;
    background-color:#0063e5;
    display: block;
    font-weight:bold;
    padding: 17px 0px;
    color:#f9f9f9;
    text-align: center;
    border-radius:4px;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height:1.5;
`
const CtaLogoTwo = styled.img`
    padding: 0px 10px;
`