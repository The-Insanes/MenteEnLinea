import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';
import { IonButton, IonImg, IonToolbar, IonMenuButton, IonButtons, IonHeader } from '@ionic/react';

interface NavbarProps {
    className?: string | undefined;
}

const NavBar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <IonHeader>
            <IonToolbar className={className}>
                <Link to='/Home'>
                    <IonButton className='logo_button' fill='clear' slot='start'>
                        <IonImg src='./images/logo.svg' />
                    </IonButton>
                </Link>
                <IonButtons slot="end">
                    <IonMenuButton className='option_button' autoHide={false} color='primary' />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default NavBar;
