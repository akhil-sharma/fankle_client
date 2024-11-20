import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ErrorContainer =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: Roboto;
font-weight: 300;
`;

export const Heading404 = styled.h1`
    font-size: 60px;
    line-height: 46px;
    margin-bottom: 40px;
`;

export const ErrorMessage = styled.p`
    font-size: 30px;
    line-height: 46px;
    margin-bottom: 40px;
`;

export const RedirectionLink = styled(Link)`
    font-size: 20px;
    line-height: 46px;
    padding: 10px 15px;
    cursor: pointer;
`;