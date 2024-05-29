import React, { useState , useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter, IonButton, IonModal } from '@ionic/react';
import './css/Home.css';
import FooterPage from '../components/FooterPage';
import Login from '../components/Login';
import { Redirect } from 'react-router';

interface User {
  email: string | undefined,
  name: string | undefined,
  password: string | undefined
}

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState<boolean>(false);
  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
      setFlag(true);
    }
  }

  useEffect(() => {
    fetch('data/users.json')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, []);
  

  return (
    <IonPage>
      {flag && 
        <Redirect to='/PsicologystSearchPage'></Redirect>
      }
      <IonContent>
        <div className='transparency'>
          <div className="content-area">
            <div className="habla-con-un-psiclogo-online-parent">
              <h3 className="habla-con-un">
                Habla con un psicólogo online por videollamada de manera fácil,
                privada y a un buen precio. 😀
              </h3>
              <h2 className="permtenos-acompaarte">Permítenos acompañarte</h2>
              <div className="reserve-now-button">
                <button className="boton" onClick={openModal}>
                  <div className="reserva-ahora">Reserva Ahora</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <section className="bajada">
          <div className="foto-wrapper">
            <div className="fondo-caracteristica-parent">
              <div className="fondo-caracteristica"></div>
              <div className="wrapper-figura">
                <img
                  className="figura-icon"
                  loading="lazy"
                  alt=""
                  src="figura@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="texto">
            <div className="caracteristicas">
              <div className="phone-number">
                <img
                  className="logo-caracteristica-1-icon"
                  loading="lazy"
                  alt=""
                  src="logocaracteristica1.svg"
                />
                <img
                  className="logo-caracteristica-2-icon"
                  loading="lazy"
                  alt=""
                  src="logocaracteristica2.svg"
                />
                <img
                  className="logo-caracteristica-3-icon"
                  loading="lazy"
                  alt=""
                  src="logocaracteristica3.svg"
                />
                <img
                  className="construction-svgrepo-com-1-icon"
                  loading="lazy"
                  alt=""
                  src="logocaracteristica4.svg"
                />
              </div>
              <div className="logo-dark">
                <div className="caracteristica-1">
                  Siempre accesible, sin importar dónde te encuentres.
                </div>
                <div className="caracteristica-2">
                  Guiados por profesionales, comprometidos con tu crecimiento.
                </div>
                <div className="caracteristica-3">
                  Tu confidencialidad es nuestra prioridad absoluta.
                </div>
                <div className="caracteristica-4">
                  Soluciones personalizadas para tu bienestar.
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterPage></FooterPage>
      </IonContent>
      
      <IonModal isOpen={showModal} onDidDismiss={closeModal}>
        <IonContent>
          <div className="close-button" onClick={closeModal}>×</div>
            <Login verifyEmail={validateEmailName} verifyPassword={validatePassword} onClick={clickButton}></Login>
        </IonContent>
      </IonModal>

    </IonPage>
  );
};

export default Home;
