import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

const ErrorPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <h1>Error 404</h1>
            <h3>Oops...</h3>
            <h2>Something was wrong</h2>
            <FooterComponent/>
        </div>
    );
};

export default ErrorPage;