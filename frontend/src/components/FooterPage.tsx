import './css/FooterPage.css';
import { IonToolbar, IonSegment, IonButton, IonImg, IonLabel, IonList, IonIcon } from '@ionic/react';
import { mail, call } from 'ionicons/icons';

interface ContainerProps {
    className?: string | undefined
    background?: string | undefined,
};

const FooterPage: React.FC<ContainerProps> = ({className, background}) => {
    return (
        <IonToolbar color={background}>
            <div className='info_footer_menu'>
                <IonLabel className='title_footer_menu'>Contacto</IonLabel>
                <IonLabel className='info_footer'>
                    <IonIcon slot='start' icon={call}></IonIcon>
                    +5699999999
                </IonLabel>
                <IonLabel className='info_footer'>
                    <IonIcon slot='start' icon={mail}></IonIcon>
                    mail@example.cl
                </IonLabel>
            </div>
            <IonImg src='images/dark_logo.svg' slot='end'></IonImg>
        </IonToolbar>
    );
};

export default FooterPage;