import { IonImg, IonLabel } from '@ionic/react';
import './css/ProfileLabel.css';

interface ContainerProps {
    className?: string | undefined,
    price?: string | "XXXXX",
    method?: "Presencial" | "Online",
    info?: string | "No hay descripción",
    psychologist_name?: string | undefined
};

const ProfileLabel: React.FC<ContainerProps> = ({className, price, method, info, psychologist_name}) => {
    return (
        <div className={className}>
            <div className='label_container'>
                <div className="elipse_1"></div>
                <div className="elipse_2"></div>
                <div className="elipse_3"></div>
                <div className="elipse_4"></div>
                <div className="elipse_5"></div>

                <div className="psychologist_photo" style={{backgroundImage: `url(psychologist.svg)`}}></div>
                
                <IonImg className='puntation' src='puntation.svg'></IonImg>

                <IonLabel className='price'>Precio ${price}</IonLabel>
                <IonLabel className='method'>Modalidad: {method}</IonLabel>
                <IonLabel className='psychologist_name'>{psychologist_name}</IonLabel>
                <IonLabel className='profile_info'>Info: {info}</IonLabel>
            </div>
        </div>
    );
};

export default ProfileLabel