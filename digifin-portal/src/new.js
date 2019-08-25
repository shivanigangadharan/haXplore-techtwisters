import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { flowRight as compose } from 'lodash';


const getReqsID = gql`
query{
    ProviderBank(where: {Account_Number: {_eq: 66}}) {
      Requested_ID
    }
  }
  `
function New(props) {
    console.log("REQS ID = ", props.getReqsID.ProviderBank);
    return (
        <div>
            <h1> Your Reqs ID is: </h1>

        </div>
    )
}

export default compose(
    graphql(getReqsID, { name: "getReqsID" }),
)(New);