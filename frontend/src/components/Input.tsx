import './css/Input.css'
import { IonInput, IonIcon, IonButton, IonLabel } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';
import { TextFieldTypes } from '@ionic/core';

interface ContainerProps {
    className?: string | undefined,
    label?: string | undefined,
    placeHolder?: string | undefined,
    type?: TextFieldTypes | undefined,
    name?: string |undefined,
    value?: string |undefined,
    icon?: string | undefined,
    ariaHidden?: boolean | undefined,
    onIonChange: (e: any) => void;
}

const Input: React.FC<ContainerProps> = ({className, label, name, type, placeHolder, icon, ariaHidden, value, onIonChange}) => {
    if (type === 'password') {
        return (
            <div className= {className}>
                <IonLabel className='label'>{label}</IonLabel>
                <IonInput className='input' name={name} type='password' placeholder={placeHolder} value={value} onIonChange={onIonChange}>
                    <IonIcon className='left_icon' slot='start' icon={lockClosed} aria-hidden={ariaHidden}></IonIcon>
                    <IonButton fill='clear' slot='end' aria-label='Show/hide'>
                        <IonIcon slot='icon-only' color='dark' icon={eye} aria-hidden={ariaHidden}></IonIcon>
                    </IonButton>
                </IonInput>
            </div>
        );
    }

    return (
        <div className= {className}>
            <IonLabel className='label'>{label}</IonLabel>
            <IonInput className='input' type={type} name={name} placeholder={placeHolder} value={value} onIonChange={onIonChange}>
                <IonIcon className='left_icon' slot='start' icon={icon} aria-hidden={ariaHidden}></IonIcon>
            </IonInput>
        </div>
    );
}

export default Input;