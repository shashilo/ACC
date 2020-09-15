import React from 'react'

import { AtlassianLogo } from '@atlaskit/logo';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="-flexbox between-xs middle-xs">
            <AtlassianLogo size="medium" textColor="#0052CC" iconColor="#0052CC" />
            <Link to="/">Login</Link>
        </header>
    )
}
