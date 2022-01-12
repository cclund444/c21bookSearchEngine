import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        _id
        username
        bookloader.js
        savedBooks {
            bookId
            authors
            descriptions
            title
            image
            link
        }
    }
}
`;