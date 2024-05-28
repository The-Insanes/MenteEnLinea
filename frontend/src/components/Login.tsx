import './css/Login.css';
import Input from './Input';
import Divider from './Divider';
import { IonButton, IonImg, IonIcon, IonLabel } from '@ionic/react';
import { mail, logoX } from 'ionicons/icons'

interface ContainerProps { 
    className?: string | undefined,
    src_logo?: string | undefined,
    verifyEmail?: (email: string) => string | undefined,
    verifyPassword?: (password: string) => string | undefined,
    onClick?: () => void
}

const Login: React.FC<ContainerProps> = ({className, src_logo, verifyPassword, verifyEmail, onClick}) => {

    return (
        <div className={className}>
            <div className='login_base'>
                <IonImg src={src_logo} alt='logo'></IonImg>
                <Input className='input_login' label='Correo o Usuario' type='email' placeHolder='email@gmail.com' icon= {mail} verifyInput={verifyEmail}></Input>
                <IonLabel></IonLabel>
                <Input className='input_login' label='Contraseña' type='password' placeHolder='*********' verifyInput={verifyPassword}></Input>
                
                <Divider className='divider'></Divider>

                <IonButton className='buttom_selection' color='light'>
                    <IonIcon className='buttom_icon' src='images/google_logo.svg'></IonIcon>
                    <IonLabel className='buttom_label'>Google</IonLabel>
                </IonButton>

                <IonButton className='buttom_selection' color='light'>
                    <IonIcon className='buttom_icon' icon={logoX} color='dark'></IonIcon>
                    <IonLabel className='buttom_label'>X</IonLabel>
                </IonButton>

                <a className='login_text'>¿Has olvidado tu Contraseña? </a>
                <IonButton className='login_buttom' onClick={onClick}>Iniciar Sesión</IonButton>
            </div>
            
            <div className='register_base'>
                <IonLabel>¿No tienes cuenta?</IonLabel>
                <a>Regístrate</a>
            </div>
        </div>
    );
};

export default Login;