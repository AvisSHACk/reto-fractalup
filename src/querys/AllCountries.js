import { gql } from "@apollo/client";
export const COUNTRIES = gql`
    query {
        countries {
            code
            name
            emoji
            emojiU
            continent {
                name
            }
        }
    }
`