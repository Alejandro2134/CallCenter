import React, { useContext } from 'react';

import { Logo } from '../Logo';
import { Nav, Line, Button } from './styles';
import { Context } from '../../Context';

export const Header = () => {

    const { removeAuth, isAuth } = useContext(Context);

    const handleClick = (e) => {
        const id = window.sessionStorage.getItem('id');
        removeAuth(id);
    }

    return (
        <React.Fragment>
            <Nav>
                <Logo />
                {isAuth && <Button onClick={handleClick}>Cerrar sesion</Button>}
            </Nav>
            <Line />
        </React.Fragment>
    )
}