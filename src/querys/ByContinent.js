import { gql } from "@apollo/client";
export const BYCONTINENT = gql`
    query getCountryByContinent($codeBySearch: [String!]){
        countries(filter: {continent: {in: $codeBySearch}}) {
            capital
            currency
            name
            code
            continent {
              name
            }
        }
    }
`