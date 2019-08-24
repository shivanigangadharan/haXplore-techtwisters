import React from 'react';
import { gql } from 'apollo-boost';

const fetchBankData = gql`
{
    ProviderBank {
      Account_Number
      IFSC_Code
      Account_Holder_Name
    }
  }
`
export { fetchBankData };