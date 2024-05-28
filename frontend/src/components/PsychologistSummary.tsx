import React from 'react';
import './css/PsychologistSummary.css';


interface Props {
    className?: string;
    psycologist?: Psycologist;
  }
interface Psycologist {
    id: number
    ProfilePhoto: string;
    punctuation: string;
    name: string;
    specialty: number;
    prevision: string;
    location: number;
  }



const PsychologistSummary: React.FC<Props> = ({className, psycologist}) => { 
    return (
        <div id = 'pill'>
            <div id = 'leftSide'>
                <div className='DoctorImageContainer'>
                    
                </div>
            </div>
            <div id = 'rightSide'>
                <div id = 'punctuation'><img src="{psycologist.ProfilePhoto}" alt="Punctuation" /></div>
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