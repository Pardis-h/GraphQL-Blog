import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from '../../graphql/queries';
import { useParams } from 'react-router-dom';

function AuthorPage() {

    const {slug} = useParams();
    // console.log(slug);

    const {loading, data, errors} = useQuery(GET_AUTHOR_INFO, {variables:{slug}});
    console.log(data);

    if(loading) return <h1>Loading...</h1>

    if(errors) return <h1>Error...</h1>

    return (
        <div>
            AuthorsPage
        </div>
    );
}

export default AuthorPage;