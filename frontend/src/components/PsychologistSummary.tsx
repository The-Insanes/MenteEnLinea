import React from 'react';
import './css/PsychologistSummary.css';
import { IonAvatar, IonButton, IonImg } from '@ionic/react';

interface Psycologist {
    id: number;
    ProfilePhoto: string;
    punctuation: string;
    name: string;
    specialty: number;
    prevision: string;
    location: number;
  }

interface Props {
    className?: string;
    psycologist?: Psycologist;
    onClick?: (id: number | undefined) => void;
}

const PsychologistSummary: React.FC<Props> = ({className, psycologist, onClick}) => { 
    return (
        <IonButton id = 'pill' fill='clear' onClick={() => {onClick!(psycologist?.id)}}>
            <div id = 'leftSide'>
                <IonAvatar className='DoctorImageContainer'>
                    <IonImg src={`images/${psycologist?.ProfilePhoto}`}></IonImg>
                </IonAvatar>
            </div>
            <div id = 'rightSide'>
                <IonImg className='punctuation' src={`images/${psycologist?.punctuation}`} alt="Punctuation"></IonImg>
                <div id = 'info'>
                    <p>Nombre: {psycologist?.name}</p>
                </div>
                <div id = 'info'>
                    <p>Especialidad: {psycologist?.specialty}</p>
                </div>
                <div id = 'info'>
                    <p>Previsión: {psycologist?.prevision}</p>
                </div>

            </div>

        </IonButton>
    );

};

export default PsychologistSummary