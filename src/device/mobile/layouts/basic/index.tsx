/** @format */

import ThemeComponent from 'device/mobile/components/theme';
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponents from './components/header';
import './_index.scss';
import FooterComponent from './components/footer';

const BasicLayoutComponent = () => {
    return (
        <ThemeComponent>
            <section className="bg-transparent relative z-10">
                <header className="layout-Basic-header dark:bg-dark_burl">
                    <HeaderComponents />
                </header>
                <main className="layout-Basic-main dark:bg-black">
                    <Outlet />
                </main>
                <footer className="layout-Basic-footer">
                    <FooterComponent />
                </footer>
            </section>
        </ThemeComponent>
    );
};

export default BasicLayoutComponent;
