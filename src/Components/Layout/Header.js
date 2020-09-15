import React from 'react'
import Logo from '../../shared/images/atlassian_logo.svg';
import './Header.scss';

export const Header = () => {
    return (
        <header className="-flexbox between-xs middle-xs">
            <img src={ Logo } alt="Atlassian Logo" />
            <a href="#">Login</a>
        </header>
    )
}
