import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useToasts } from 'react-toast-notifications'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    ShortUrlFormContainer,
    ShortUrlFormTitle,
    StyledSpan,
    ErrorMessage,
    ButtonContainer,
    ShortUrlContainer,
    MainContainer
} from './short-url-form.styles';

const BASE_URL_REQUEST = "https://www.fankle.xyz/r";
const BASE_URL_SHORT = "fankle.xyz/r";

const ShortUrlForm = () => {
    const [inputValues, setInputValues] = useState({
        baseUrl: '',
        suggestedSlug: '',
        shortUrl: ''
    });

    const [errors, setError] = useState({
        hasError: false,
        errorMessage: ""
    });

    const { addToast } = useToasts()
    

    const {baseUrl, suggestedSlug, shortUrl} = inputValues;
    const {hasError, errorMessage} = errors;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const rawResponse = await fetch(`${BASE_URL_REQUEST}/url`, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({url: baseUrl, slug: suggestedSlug})
            });
            const result = await rawResponse.json();

            if(result.success){
                setInputValues({...inputValues, shortUrl: `${BASE_URL_SHORT}/${result.slug}`});
                setError({hasError: false, errorMessage: ""});
            } else {
                throw Error(result.message);
            }            

        } catch (error) {
            setInputValues({baseUrl: '', suggestedSlug: '', shortUrl: ''});
            setError({hasError: true, errorMessage: error.message});
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setInputValues({...inputValues, [name]: value })
    }

    const handleCopy = () => {
        addToast("Link Copied!", 
        {appearance :'success', autoDismiss: true})
    }

    let displayOutput;

    if (hasError) {
        displayOutput = <ErrorMessage>{errorMessage}</ErrorMessage>;
    }
    
    else if (shortUrl.length){
        displayOutput = (
            <CopyToClipboard 
                text={shortUrl}
                onCopy={handleCopy}>
                    <FormInput
                        onChange={null}
                        value={`${shortUrl}`}
                        readOnly/>
            </CopyToClipboard>);
    }

    return(
        <MainContainer>
            <ShortUrlFormContainer>
                <ShortUrlFormTitle>Welcome to Fankle!</ShortUrlFormTitle>
                <span>Enter the url you wish to shorten.</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="URL"
                        name="baseUrl"
                        type="url"
                        onChange={handleChange}
                        value={baseUrl}
                        required/>

                    <FormInput
                        label="SLUG (optional)"
                        name="suggestedSlug"
                        type="text"
                        onChange={handleChange}
                        value={suggestedSlug}
                    />
                    <ButtonContainer>
                        <CustomButton type="submit">Generate</CustomButton>
                    </ButtonContainer>
                </form>            
            </ShortUrlFormContainer>

            {displayOutput}
        </MainContainer>
    )
}

export default ShortUrlForm;
