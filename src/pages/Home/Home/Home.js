import React from 'react';

import DisplayReviews from '../../DisplayReview/DisplayReviews/DisplayReviews';
import Footer from '../../Footer/Footer';
import Header from '../../Shared/Header/Header';
import HomeBanner from '../HomeBannner/HomeBanner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeBanner></HomeBanner>
            <Items></Items>
            <DisplayReviews></DisplayReviews>
            <br />
            <hr />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;