import { gql } from "@apollo/client";
export const CONTINENTS = gql`
    query {
        continents {
            code
            name
        }
    }
`