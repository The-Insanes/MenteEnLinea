import './css/NavBarLogin.css';
import { IonButton, IonImg, IonToolbar, IonMenuButton, IonButtons } from '@ionic/react';

interface ContainerProps {
    className?: string | undefined,
    srcLogo?: string | undefined
};

const NavBarLogin: React.FC<ContainerProps> = ({className, srcLogo}) => {
    return (
        <IonToolbar className={className}>
            <IonButton className='logo_button' fill='clear' slot='start'>
                <IonImg src={srcLogo}></IonImg>
            </IonButton>
            <IonButtons slot="end">
                <IonMenuButton className='option_button' autoHide={false} color='primary'></IonMenuButton>
            </IonButtons>
        </IonToolbar>
    );
};

export default NavBarLogin;