import './css/NavBarLogin.css';
import { IonIcon, IonButton, IonImg, IonLabel, IonToolbar, IonMenuButton, IonButtons, IonTitle } from '@ionic/react';

interface ContainerProps {
    className?: string | undefined
};

const NavBarLogin: React.FC<ContainerProps> = ({className}) => {
    return (
        <IonToolbar className={className}>
            <IonButton className='logo_button' fill='clear' slot='start'>
                <IonImg src='logo.svg'></IonImg>
            </IonButton>
            <IonButtons slot="end">
                <IonMenuButton className='option_button' autoHide={false} color='primary'></IonMenuButton>
            </IonButtons>
        </IonToolbar>
    );
};

export default NavBarLogin;