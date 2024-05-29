import { IonAvatar, IonImg, IonLabel } from '@ionic/react';
import './css/ProfileLabel.css';

interface ContainerProps {
    className?: string | undefined,
    price?: number | string | "XXXXX",
    method?: string | undefined,
    info?: string | "No hay descripción",
    psychologist_name?: string | undefined,
    psychologist_photo?: string | undefined,
    punctuation?: string | undefined,
    prevision?: string | undefined,
    expert?: string | undefined
};

const ProfileLabel: React.FC<ContainerProps> = ({className, price, method, info, psychologist_name, psychologist_photo, punctuation, prevision, expert}) => {
    return (
        <div className={className}>
            <div className='label_container'>
                <div className="elipse_1"></div>
                <div className="elipse_2"></div>
                <div className="elipse_3"></div>
                <div className="elipse_4"></div>

                <IonAvatar className="psychologist_photo">
                    <IonImg src={`images/${psychologist_photo}`}></IonImg>
                </IonAvatar>
                
                <IonImg className='punctation' src={`images/${punctuation}`}></IonImg>

                <IonLabel className='price'>Precio ${price}</IonLabel>
                <IonLabel className='method'>Modalidad: {method}</IonLabel>
                <IonLabel className='psychologist_name'>{psychologist_name}</IonLabel>
                <IonLabel className='profile_info'>Info:</IonLabel>
                <IonLabel className='profile-expert'> - Especialista en {expert}</IonLabel>
                <IonLabel className='profile-prevision'> - Acepto {prevision}</IonLabel>
            </div>
        </div>
    );
};

export default ProfileLabel