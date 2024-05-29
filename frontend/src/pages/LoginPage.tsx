import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/react';
import { useState, useEffect } from 'react';
import './css/LoginPage.css';
import Login from '../components/Login';
import FooterPage from '../components/FooterPage';

interface User {
  email: string | undefined,
  name: string | undefined,
  password: string | undefined
}

const LoginPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [user, setUser] = useState<User>({email: undefined, name: undefined, password: undefined})

  const findPassword = (password: string) => {
    if(user.name === undefined && user.email === undefined) return true;

    for(let i = 0; i < users.length; i++) {
      if(password === users[i].password && (user.name === users[i].name || user.email === users[i].email)) {
        setUser({email: user.email, name: user.name, password: password});
        return true;
      }
    }

    setUser({email: user.email, name: user.name, password: undefined});
    return false;
  }

  const findEmailName = (emailName: string) => {
    for(let i = 0; i < users.length; i++) {
      if(emailName === users[i].name || emailName === users[i].email) {
        if(emailName === users[i].name) setUser({email: undefined, name: emailName, password: user.password});
        if(emailName === users[i].email) setUser({email: emailName, name: undefined, password: user.password});

        return true;
      }
    }

    setUser({email: undefined, name: undefined, password: user.password});
    return false;
  }

  const validatePassword = (password: string) => {
    const minLength = /.{6,}/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasLetter = /[a-zA-Z]/;
    const hasNumber = /\d/;
    const flag = findPassword(password);

    if ((minLength.test(password) &&
        hasSpecialChar.test(password) &&
        hasLetter.test(password) &&
        hasNumber.test(password)) && 
        flag || 
        password === '') {
        
        return undefined;
    }
    
    if(!flag) return 'La contraseña es incorrecta'
    
    return 'La contraseña debe tener como mínimo 6 caracteres, un caracter especial, una letra y un número';
  }
  
  const validateEmailName = (email: string) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if(re.test(String(email).toLowerCase()) || findEmailName(email) || email === '') {
          return undefined;
      }
  
      return 'Correo o usuario ingresado es invalido o no existe';
  }

  const clickButton = () => {
    if ((user.name !== undefined || user.email !== undefined) && user.password !== undefined) {

    }
  }

  useEffect(() => {
    fetch('data/users.json')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='centered-content'>
          <Login verifyEmail={validateEmailName} verifyPassword={validatePassword} onClick={clickButton}></Login>
        </div>
        <FooterPage></FooterPage>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
