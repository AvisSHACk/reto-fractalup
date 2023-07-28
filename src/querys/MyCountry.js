import { gql } from "@apollo/client";
export const MYCOUNTRY = gql`
    query countryByCode($codeBySearch: ID!){
        country(code: $codeBySearch) {
            code
            name
            capital
            currency
            currencies
            continent {
                name
            }
            languages {
                name
            }
        }
    }
`