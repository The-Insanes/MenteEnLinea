import React from 'react';
import { IonButton, IonImg, IonIcon, IonLabel } from '@ionic/react';
import Input from './Input';
import Divider from './Divider';
import { mail, logoX } from 'ionicons/icons';
import './css/Login.css';

interface LoginProps {
    className?: string;
    src_logo?: string;
}

const Login: React.FC<LoginProps> = ({ className, src_logo }) => {
    return (
        <div className={className}>
            <div className='login_base'>
                <IonImg src={src_logo} alt='logo'></IonImg>
                <Input className='input_login' label='Correo o Usuario' type='email' placeHolder='email@gmail.com' icon={mail}></Input>
                <Input className='input_login' label='Contraseña' type='password' placeHolder='*********'></Input>
                
                <Divider className='divider'></Divider>

                <div className='social-media'>
                <IonButton className='button_selection' color='light'>
                    <IonIcon className='button_icon' src='google_logo.svg'></IonIcon>
                    <IonLabel className='button_label'></IonLabel>
                </IonButton>

                <IonButton className='button_selection' color='light'>
                    <IonIcon className='button_icon' icon={logoX} color='dark'></IonIcon>
                    <IonLabel className='button_label'></IonLabel>
                </IonButton>
                </div>

                <a className='login_text'>¿Has olvidado tu Contraseña?</a>
                <IonButton className='login_button'>Iniciar Sesión</IonButton>
                <div className='register_base'>
                <IonLabel>¿No tienes cuenta?</IonLabel>
                <a>Regístrate</a>
            </div>
            </div>
            
        </div>
    );
};

export default Login;
