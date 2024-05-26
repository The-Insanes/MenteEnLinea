import './css/Signup.css';
import Input from './Input';
import Divider from './Divider';
import { IonButton, IonImg, IonIcon, IonLabel, IonSelect } from '@ionic/react';
import { mail, personCircle, callOutline, fingerPrintOutline, personOutline, homeOutline, businessOutline} from 'ionicons/icons'
import SignupSelect from './SignupSelect';

interface ContainerProps {
    className?: string | undefined,
    src_logo?: string |undefined
 };

const Signup: React.FC<ContainerProps> = ({className, src_logo}) => {
    return (
        <div className={className}>
            <div className='login_base'>
                <IonImg src={src_logo} alt='logo'></IonImg>
                <Input className='input_login' label='Nombre Completo' type='text' placeHolder='Nombre Apellido' icon={personCircle}></Input>
                <Input className='input_login' label='RUT' type='text' placeHolder='XXXXXXXX-X' icon={fingerPrintOutline}></Input>
                <Input className='input_login' label='Usuario' type='text' placeHolder='Example' icon={personOutline}></Input>
                <Input className='input_login' label='Correo Electronico' type='email' placeHolder='email@gmail.com' icon= {mail}></Input>
                <Input className='input_login' label='Contraseña' type='password' placeHolder='*********'></Input>
                <Input className='input_login' label='Confirmar Contraseña' type='password' placeHolder='*********'></Input>
                <Input className='input_login' label='Teléfono' type='text' placeHolder='+56 9 XXXX XXXX' icon={callOutline}></Input>
                <SignupSelect className='signup_select' label='Región' placeHolder='Seleccione Región'></SignupSelect>
                <Input className='input_login' label='Ciudad' type='text' placeHolder='Ciudad' icon={businessOutline}></Input>
                <Input className='input_login' label='Dirección' type='text' placeHolder='Dirección' icon={homeOutline}></Input>

                <Divider className='divider'></Divider>

                
                <IonButton className='login_buttom'>Registrarse</IonButton>
            </div>
            <div className='register_base'>
                <IonLabel>¿Ya tienes cuenta?</IonLabel>
                <a>Inicia sesión aquí</a>
            </div>
        </div>
    );
};

export default Signup;