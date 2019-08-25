import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Icon, Button } from 'antd';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { flowRight as compose } from 'lodash';
import { Link } from 'react-router-dom';

const fetchBankData = gql`
query{
   ProviderBank(where: {Account_Holder_Name: {_eq: "Shivani"}, Account_Number: {_eq: "81765493"}, IFSC_Code: {_eq: "123456"}}) {
      Email
      mobile_number
      Bank_statement_URL
    }
  }
`
const addID = gql`
  mutation($ReqID: bigint, $actno: bigint){
    insert_ProviderBank(objects: {Requested_ID: $ReqID, Account_Number: $actno}) {
      affected_rows
      returning {
        Requested_ID
        Account_Number
      }
    }
  }
`

const Box = styled.div`
    box-shadow: 1px 1px 10px 3px lightgray;
    width: 85%;
    margin: 5%;
    padding: 2%;
`
function Details(props) {
    const [name, setName] = useState('');
    const [acctname, setAcctName] = useState('');
    const [acctno, setAcctNo] = useState();
    const [bank, setBank] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [branch, setBranch] = useState('');
    const [uniqueID, setUniqueId] = useState();
    var num;

    function handleSubmit() {
        num = Math.floor(10000000 + Math.random() * 90000000);
        console.log("Name = ", name);
        console.log("Acct Holder Name = ", acctname);
        console.log("Account Number ", acctno);
        console.log("Bank ", bank);
        console.log("IFSC code = ", ifsc);
        console.log("Branch = ", branch);
        console.log("Unique ID = ", uniqueID);
        props.addID({
            variables: {
                ReqID: num,
                actno: acctno
            }
        })
    }

    console.log("Bank ka data = ", props.fetchBankData.ProviderBank);
    return (
        <div>
            <center>
                <Box>
                    <Form>
                        <Input onChange={e => { setName(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Name" />
                        <Input onChange={e => { setAcctName(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account holder name" />
                        <Input onChange={e => { setAcctNo(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Account Number" />
                        <Input onChange={e => { setBank(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Bank" />
                        <Input onChange={e => { setIfsc(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="IFSC Code" />
                        <Input onChange={e => { setBranch(e.target.value) }} style={{ margin: '1%', width: '70%', display: 'block' }} placeholder="Branch name" />
                        <Link to="/reqs">
                            <Button onClick={handleSubmit} style={{ margin: '2%' }} htmlType="submit" type="primary"> Submit </Button>
                        </Link>
                    </Form>
                </Box>
                <div hidden={num == undefined ? true : false}>
                    Your unique ID is : {num}
                    <br /> Keep this ID safely for future reference. You will require it for verification later.
                </div>
            </center>
        </div>
    )
}

export default compose(
    graphql(addID, { name: "addID" }),
    graphql(fetchBankData, { name: "fetchBankData" })
)(Details);
