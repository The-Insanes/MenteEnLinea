import './FooterPage.css';
import { IonToolbar, IonImg, IonLabel, IonIcon, IonFooter } from '@ionic/react';
import { mail, call } from 'ionicons/icons';

interface FooterProps {
};

const FooterPage: React.FC<FooterProps> = () => {
    return (
        <IonFooter translucent={true}>
            <IonToolbar color={'primary'}>
                <div className='info_footer_menu'>
                    <IonLabel className='title_footer_menu'>Contacto</IonLabel>
                    <IonLabel className='info_footer'>
                        <IonIcon slot='start' icon={call}></IonIcon>
                        {'mail@example.cl'}
                    </IonLabel>
                    <IonLabel className='info_footer'>
                        <IonIcon slot='start' icon={mail}></IonIcon>
                        {'+569999999'}
                    </IonLabel>
                </div>
                <IonImg className='footer_dark_logo' src="./images/dark_logo.svg" slot='end'></IonImg>
            </IonToolbar>
        </IonFooter>
    );
};

export default FooterPage;