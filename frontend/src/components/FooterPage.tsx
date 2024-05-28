import './css/FooterPage.css';
import { IonToolbar, IonImg, IonLabel, IonIcon, IonFooter } from '@ionic/react';
import { mail, call } from 'ionicons/icons';

interface ContainerProps {
    className?: string | undefined
    background?: string | undefined,
    email?: string | "mail@example.cl",
    phone_number?: string | "+5699999999",
    src_logo?: string | undefined
};

const FooterPage: React.FC<ContainerProps> = ({className, background, email, phone_number, src_logo}) => {
    return (
        <IonFooter translucent={true}>
            <IonToolbar className={ src_logo='dark_logo.svg'} color={'primary'}>
                <div className='info_footer_menu'>
                    <IonLabel className='title_footer_menu'>Contacto</IonLabel>
                    <IonLabel className='info_footer'>
                        <IonIcon slot='start' icon={call}></IonIcon>
                        {email='mail@example.cl'}
                    </IonLabel>
                    <IonLabel className='info_footer'>
                        <IonIcon slot='start' icon={mail}></IonIcon>
                        {phone_number='+569999999'}
                    </IonLabel>
                </div>
                <IonImg className='footer_dark_logo' src={src_logo} slot='end'></IonImg>
            </IonToolbar>
        </IonFooter>
    );
};

export default FooterPage;