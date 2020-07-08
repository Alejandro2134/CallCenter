import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import { Principal, SideBar, Footer, Button, Container } from './styles';
import { FaPhoneSlash } from "react-icons/fa";

export const Call = () => {

    return (
        <React.Fragment>
            <Principal>
                
            </Principal>

            <SideBar>
                <h1>Sidebar</h1>
            </SideBar>

            <Footer>
                <Link to="/user">
                    <Button>
                        <FaPhoneSlash size="2em"/>
                    </Button>
                </Link>
            </Footer>
        </React.Fragment>
    )
}
