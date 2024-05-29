import React from 'react';
import './css/PsychologistSummary.css';
import { IonAvatar, IonImg } from '@ionic/react';

interface Psycologist {
    id: number
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
}

const PsychologistSummary: React.FC<Props> = ({className, psycologist}) => { 
    return (
        <div id = 'pill'>
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

        </div>
    );

};

export default PsychologistSummary