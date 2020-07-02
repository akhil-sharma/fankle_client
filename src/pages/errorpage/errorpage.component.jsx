import React from 'react';

import {
    ErrorContainer,
    Heading404,
    ErrorMessage,
    RedirectionLink
} from './errorpage.styles';

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <Heading404>
                404
            </Heading404>
            <ErrorMessage>
                The url seems to be invalid...
            </ErrorMessage>
            <RedirectionLink to='/'>
                Create a new short url at <i><b>Fankle</b></i> home!
            </RedirectionLink>
        </ErrorContainer>
    )
}

export default ErrorPage;