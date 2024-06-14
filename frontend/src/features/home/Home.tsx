import React, { useState , useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter, IonButton, IonModal } from '@ionic/react';
import './Home.css';
import NavBar from './navbar/NavBar';
import FooterPage from '../../components/footerPage/FooterPage';
import LoginForm from '../ authentication/loginForm/LoginForm'


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <IonPage>
      <IonHeader>
        <NavBar></NavBar>
      </IonHeader>
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
          <div className="close-button" onClick={closeModal}>x</div>
            <LoginForm></LoginForm>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Home;
