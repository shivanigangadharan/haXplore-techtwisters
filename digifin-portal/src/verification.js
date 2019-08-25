import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Icon, Button, notification } from 'antd';
import { Checkbox } from 'antd';
// import { fetchBankData } from './services';
import { graphql, compose } from 'react-apollo';
import { gql } from 'apollo-boost';



const Box = styled.div`
    box-shadow: 1px 1px 10px 3px lightgray;
    width: 85%;
    margin: 5%;
    padding: 2%;
`

const openSuccess = type => {
    notification[type]({
        message: 'Successfully verified.',
        description:
            'You have successfully obtained authentication from the bank. Thank you for using our service.',
    });
};

const openError = type => {
    notification[type]({
        message: 'Invalid credentials!',
        description:
            'Please enter correct OTP, ID and check confirm.',
    });
};


function Verification(props) {

    const [otp, setOtp] = useState();
    const [uniqueID, setUniqueID] = useState();
    const [check, setCheck] = useState();

    function handleSubmit() {
        console.log("OTP = ", otp);
        console.log("UniqueID = ", uniqueID);
        console.log("Confirm = ", check);
        if (otp == 456 && uniqueID == 789 && check == true) {
            openSuccess('success');
        }
        else {
            openError('error');
        }
    }

    return (

        <div>
            <center>
                <Box>
                    <Form>
                        <Input onChange={e => { setOtp(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Enter OTP" />
                        <Input onChange={e => { setUniqueID(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Enter unique requested ID" />
                        <Checkbox onChange={e => { setCheck(e.target.checked) }}> Yes, I confirm. </Checkbox><br />
                        <Button onClick={handleSubmit} style={{ margin: '2%' }} htmlType="submit" type="primary"> Submit </Button>
                    </Form>
                </Box>
                <h3> Account details: <br /> </h3>

            </center>
        </div>
    )
}

export default Verification;
