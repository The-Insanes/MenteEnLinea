import React, { useState, useEffect } from 'react';
import { IonButton, IonImg, IonIcon, IonLabel } from '@ionic/react';
import Input from '../../../components/input/Input';
import Divider from '../../../components/Divider';
import { mail, logoX } from 'ionicons/icons';
import './LoginForm.css';

interface User {
  email?: string;
  name?: string;
  password?: string;
}

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({ email: undefined, name: undefined, password: undefined });

  const findPassword = (password: string): boolean => {
    if (user.name === undefined && user.email === undefined) return true;

    for (let i = 0; i < users.length; i++) {
      if (password === users[i].password && (user.name === users[i].name || user.email === users[i].email)) {
        setUser({ ...user, password });
        return true;
      }
    }

    setUser({ ...user, password: undefined });
    return false;
  };

  const findEmailName = (emailName: string): boolean => {
    for (let i = 0; i < users.length; i++) {
      if (emailName === users[i].name || emailName === users[i].email) {
        setUser({
          ...user,
          email: emailName === users[i].email ? emailName : undefined,
          name: emailName === users[i].name ? emailName : undefined,
        });
        return true;
      }
    }

    setUser({ ...user, email: undefined, name: undefined });
    return false;
  };

  const validatePassword = (password: string): string | undefined => {
    const minLength = /.{6,}/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasLetter = /[a-zA-Z]/;
    const hasNumber = /\d/;
    const flag = findPassword(password);

    if (
      (minLength.test(password) &&
        hasSpecialChar.test(password) &&
        hasLetter.test(password) &&
        hasNumber.test(password)) ||
      flag ||
      password === ''
    ) {
      return undefined;
    }

    if (!flag) return 'La contraseña es incorrecta';

    return 'La contraseña debe tener como mínimo 6 caracteres, un caracter especial, una letra y un número';
  };

  const validateEmailName = (email: string): string | undefined => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (re.test(String(email).toLowerCase()) || findEmailName(email) || email === '') {
      return undefined;
    }

    return 'Correo o usuario ingresado es inválido';
  };

  const clickButton = (): void => {
    console.log(user.email);
    console.log(user.password);

    if ((user.name !== undefined || user.email !== undefined) && user.password !== undefined) {
      // Implement login functionality here
    }
  };

  useEffect(() => {
    fetch('data/users.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className='login-container'>
      <div className='login'>
        <IonImg className='login-logo' src='./images/logo.svg' alt='logo'></IonImg>
        <Input className='input_login' label='Correo o Usuario' type='email' placeHolder='email@gmail.com' icon={mail} verifyInput={validateEmailName}></Input>
        <IonLabel></IonLabel>
        <Input className='input_login' label='Contraseña' type='password' placeHolder='*********' verifyInput={validatePassword}></Input>

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

        <a className='login_text' href="/forgot-password">¿Has olvidado tu Contraseña?</a>
        <IonButton className='login_button' onClick={clickButton}>Iniciar Sesión</IonButton>
        <div className='register_base'>
          <IonLabel>¿No tienes cuenta?</IonLabel>
          <a href="/register">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
