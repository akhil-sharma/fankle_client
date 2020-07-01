import styled, {css } from 'styled-components';

const buttonStyles = css`
    background: linear-gradient(to right bottom, rgb(87, 217, 163), rgb(54, 179, 126)) left top no-repeat;
    color: white;
    border: none;

    &:hover {
        background: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background: white;
    color: black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`;

const googleSignInStyes = css`
    background-color: #4285f4;
    color: white;

    &:hover{
    background-color: #357ae8;
    border: none;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyes;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`;