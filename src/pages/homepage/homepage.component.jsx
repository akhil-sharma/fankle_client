import React from 'react'

import { HomePageContainer } from './homepage.styles';

import ShortUrlForm from '../../components/short-url-form/short-url-form.component';

const Home = () => (
    <HomePageContainer>
        <ShortUrlForm/>
    </HomePageContainer>
);

export default Home;