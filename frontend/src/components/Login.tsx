import React from 'react';
import { IonButton, IonImg, IonIcon, IonLabel } from '@ionic/react';
import Input from './Input';
import Divider from './Divider';
import { mail, logoX } from 'ionicons/icons';
import './css/Login.css';

interface LoginProps {
    className?: string;
    verifyEmail?: (email: string) => string | undefined,
    verifyPassword?: (password: string) => string | undefined,
    onClick?: () => void
}

const Login: React.FC<LoginProps> = ({ className, verifyEmail,verifyPassword,onClick }) => {
    return (
        <div className={className}>
            <div className='login_base'>
                <IonImg src='./images/logo.svg' alt='logo'></IonImg>
                <Input className='input_login' label='Correo o Usuario' type='email' placeHolder='email@gmail.com' icon= {mail} verifyInput={verifyEmail}></Input>
                <IonLabel></IonLabel>
                <Input className='input_login' label='Contraseña' type='password' placeHolder='*********' verifyInput={verifyPassword}></Input>
                
                <Divider className='divider'></Divider>

                <div className='social-media'>
                <IonButton className='button_selection' color='light'>
                    <IonIcon className='button_icon' src='./images/google_logo.svg'></IonIcon>
                    <IonLabel className='button_label'></IonLabel>
                </IonButton>

                <IonButton className='button_selection' color='light'>
                    <IonIcon className='button_icon' icon={logoX} color='dark'></IonIcon>
                    <IonLabel className='button_label'></IonLabel>
                </IonButton>
                </div>


                <a className='login_text'>¿Has olvidado tu Contraseña?</a>
                <IonButton className='login_button' onClick={onClick}>Iniciar Sesión</IonButton>
                <div className='register_base'>
                <IonLabel>¿No tienes cuenta?</IonLabel>
                <a>Regístrate</a>
            </div>
        </div>
    </div>
        
    );
};

export default Login;
