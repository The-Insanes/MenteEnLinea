import './css/Input.css'
import { IonInput, IonIcon, IonButton, IonLabel } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';
import { TextFieldTypes } from '@ionic/core';

interface ContainerProps {
    className?: string | undefined,
    label?: string | undefined,
    placeHolder?: string | undefined,
    type?: TextFieldTypes | undefined
    icon?: string | undefined,
    ariaHidden?: boolean | undefined
}

const Input: React.FC<ContainerProps> = ({className, label, type, placeHolder, icon, ariaHidden}) => {
    if (type === 'password') {
        return (
            <div className= {className}>
                <IonLabel className='label'>{label}</IonLabel>
                <IonInput className='input' type='password' placeholder={placeHolder}>
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
            <IonInput className='input' type={type} placeholder={placeHolder}>
                <IonIcon className='left_icon' slot='start' icon={icon} aria-hidden={ariaHidden}></IonIcon>
            </IonInput>
        </div>
    );
}

export default Input;