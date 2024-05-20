import './css/FooterPage.css';
import { IonToolbar, IonItem, IonButton, IonImg, IonLabel, IonList, IonIcon } from '@ionic/react';
import { mail, call } from 'ionicons/icons';

interface ContainerProps {
    className?: string | undefined
    background?: string | undefined,
};

const FooterPage: React.FC<ContainerProps> = ({className, background}) => {
    return (
        <IonToolbar className={className} color={background}>
            <IonList className='info_footer_menu' lines="none" slot='start'>
                <IonLabel className='footer_label'>Contacto</IonLabel>
                <IonItem className='info_footer'>
                    <IonLabel className='footer_label' color='light'>+56999999</IonLabel>
                </IonItem>
                <IonItem className='info_footer'>
                    <IonIcon slot='start'></IonIcon>
                    <IonLabel className='footer_label'>mail@example.cl</IonLabel>
                </IonItem>
            </IonList>
            <IonImg src='images/dark_logo.svg' slot='end'></IonImg>
        </IonToolbar>
    );
};

export default FooterPage;