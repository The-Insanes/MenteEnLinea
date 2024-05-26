import React from 'react';
import './css/SignupSelect.css'
import { IonInput, IonIcon, IonButton, IonLabel, IonSelect, IonSelectOption} from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';
import { TextFieldTypes } from '@ionic/core';
import Signup from './Signup';


interface ContainerProps {
    className?: string | undefined,
    label?: string | undefined,
    placeHolder?: string | undefined,
    icon?: string | undefined,
}
const regiones = [

]

const SignupSelect: React.FC<ContainerProps> = ({className, label, placeHolder, icon}) => {
    return (
        <div className= {className}>
            <IonLabel className='label'>{label}</IonLabel>
            <IonSelect className='input' placeholder={placeHolder}>
                    <IonSelectOption value='15'>Región de Arica y Parinacota</IonSelectOption>
                    <IonSelectOption value='1'>Región de Tarapacá</IonSelectOption>
                    <IonSelectOption value='2'>Región de Antofagasta</IonSelectOption>
                    <IonSelectOption value='3'>Región de Atacama</IonSelectOption>
                    <IonSelectOption value='4'>Región de Coquimbo</IonSelectOption>
                    <IonSelectOption value='5'>Región de Valparaíso</IonSelectOption>
                    <IonSelectOption value='13'>Región Metropolitana de Santiago</IonSelectOption>
                    <IonSelectOption value='6'>Región del Libertador General Bernardo O Higgins</IonSelectOption>
                    <IonSelectOption value='7'>Región del Maule</IonSelectOption>
                    <IonSelectOption value='16'>Región de Ñuble</IonSelectOption>
                    <IonSelectOption value='8'>Región del Biobío</IonSelectOption>
                    <IonSelectOption value='9'>Región de La Araucanía</IonSelectOption>
                    <IonSelectOption value='14'>Región de Los Ríos</IonSelectOption>
                    <IonSelectOption value='10'>Región de Los Lagos</IonSelectOption>
                    <IonSelectOption value='11'>Región de Aysén del General Carlos Ibáñez del Campo</IonSelectOption>
                    <IonSelectOption value='12'>Región de Magallanes y de la Antártica Chilena</IonSelectOption>
            </IonSelect>
        </div>
    );
}

export default SignupSelect;