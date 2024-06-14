import './Input.css'
import { IonInput, IonIcon, IonButton, IonLabel, InputChangeEventDetail } from '@ionic/react';
import { eye, eyeOff , lockClosed } from 'ionicons/icons';
import { TextFieldTypes, IonInputCustomEvent } from '@ionic/core';
import { useState } from 'react';

interface ContainerProps {
    className?: string | undefined,
    label?: string | undefined,
    placeHolder?: string | undefined,
    type?: TextFieldTypes | undefined,
    icon?: string | undefined,
    ariaHidden?: boolean | undefined,
    verifyInput?: (data: string) => string | undefined
}

const Input: React.FC<ContainerProps> = ({className, label, type, placeHolder, icon, ariaHidden, verifyInput}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [flag, setFlag] = useState<boolean>(false);

    const handleOnIonChange = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
        const errorMsg: string | undefined = verifyInput?.(e.detail.value!);

        if(errorMsg === undefined) {
            setFlag(false);
        }
        if(!(errorMsg === undefined)) {
            setMessage(errorMsg);
            setFlag(true);
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (type === 'password') {
        return (
            <div className= {className}>
                <IonLabel className='label'>{label}</IonLabel>
                <IonInput className='input' type={showPassword? 'text' : 'password'} placeholder={placeHolder} onIonChange={handleOnIonChange}>
                    <IonIcon className='left_icon' slot='start' icon={lockClosed} aria-hidden={ariaHidden}></IonIcon>
                    <IonButton fill='clear' slot='end' aria-label='Show/hide' onClick={toggleShowPassword}>
                        <IonIcon slot='icon-only' color='dark' icon={showPassword? eyeOff : eye} aria-hidden={ariaHidden}></IonIcon>
                    </IonButton>
                </IonInput>
                { flag && 
                    <IonLabel className='error-msg' color='danger'>{message}</IonLabel>
                }
            </div>
        );
    }

    return (
        <div className= {className}>
            <IonLabel className='label'>{label}</IonLabel>
            <IonInput className='input' type={type} placeholder={placeHolder} onIonChange={handleOnIonChange}>
                <IonIcon className='left_icon' slot='start' icon={icon} aria-hidden={ariaHidden}></IonIcon>
            </IonInput>
            { flag && 
                <IonLabel className='error-msg' color='danger'>{message}</IonLabel>
            }
        </div>
    );
}

export default Input;