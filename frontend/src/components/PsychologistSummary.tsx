import React from 'react';
import './css/PsychologistSummary.css';
import { IonAvatar } from '@ionic/react';


interface ContainerProps { 
    className?: string | undefined
}; 

const PsychologistSummary: React.FC<ContainerProps> = ({className}) => { 
    return (
        <div id = 'pill'>
            <div id = 'leftSide'>
                <div id = 'DoctorImageContainer'>
                    <img id = 'perfil' alt="isaac" src="isaacProfile.jpg" />
                </div>
            </div>
            <div id = 'rightSide'>
                <div id = 'punctuation'><img src="punctuation_dr_house.svg" alt="Punctuation" /></div>
                <div id = 'name'>
                    <p>Nombre: Dr. Isaac</p>
                </div>
                <div id = 'AreaResume'>
                    <p>Area de atención: Familia</p>
                </div>
                <div id = 'Previsión'>
                    <p>Previsión: Fonasa</p>
                </div>

            </div>

        </div>
    );

};

export default PsychologistSummary