import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Heading = styled.div`
background-image: linear-gradient(to bottom right, #1235a6, #1b4ff5);
padding: 2%;
color:white;
text-align:center;
font-size: 200%;
box-shadow: 1px 1px 10px 3px lightblue;
`
const Box = styled.div`
    box-shadow: 1px 1px 10px 3px lightgray;
    width: 85%;
    margin: 5%;
    padding: 2%;
`

function LandingPage() {
    return (
        <div>
            <Heading> DigiFinT </Heading>
            <center><Box>
                <Link to="/details">
                    <Button width="400" type="secondary"> Fetch details</Button>
                </Link> <br /> <br />
                <Link to="/verification">
                    <Button width="400" type="secondary"> Verify OTP </Button>
                </Link>
            </Box></center>
        </div>
    )
}

export default LandingPage;