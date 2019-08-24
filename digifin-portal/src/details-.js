import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Icon, Button } from 'antd';


const Box = styled.div`
    box-shadow: 1px 1px 10px 3px lightgray;
    width: 85%;
    margin: 5%;
    padding: 2%;
`
function Details(props) {
    const [name, setName] = useState('');
    const [acctname, setAcctName] = useState('');
    const [bank, setBank] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [branch, setBranch] = useState('');
    const [uniqueID, setUniqueId] = useState();

    function handleSubmit() {
        console.log("Name = ", name);
        console.log("Acct Holder Name = ", acctname);
        console.log("Bank ", bank);
        console.log("IFSC code = ", ifsc);
        console.log("Branch = ", branch);
        setUniqueId(Math.floor(10000000 + Math.random() * 90000000));
    }

    return (
        <div>
            <center>
                <Box>
                    <Form>
                        <Input onChange={e => { setName(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Name" />
                        <Input onChange={e => { setAcctName(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account holder name" />
                        <Input onChange={e => { setBank(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Bank" />
                        <Input onChange={e => { setIfsc(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="IFSC Code" />
                        <Input onChange={e => { setBranch(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Branch name" />
                        <Button onClick={handleSubmit} style={{ margin: '2%' }} htmlType="submit" type="primary"> Submit </Button>
                    </Form>
                </Box>
                <div hidden={uniqueID == null ? true : false}>
                    Your unique ID is : {uniqueID}
                    <br /> Keep this ID safely for future reference. You will require it for verification later.
                </div>
            </center>
        </div>
    )
}

export default Details;