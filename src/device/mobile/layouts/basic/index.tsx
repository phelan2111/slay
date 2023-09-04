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
            <section>
                <header className="layout-Basic-header">
                    <HeaderComponents />
                </header>
                <main className="layout-Basic-main">
                    <Outlet />
                </main>
                <footer className="layout-Basic-footer bg-gradient-to-r from-purple-600 to-blue-600">
                    <FooterComponent />
                </footer>
            </section>
        </ThemeComponent>
    );
};

export default BasicLayoutComponent;
