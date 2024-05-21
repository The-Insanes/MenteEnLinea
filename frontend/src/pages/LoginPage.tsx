import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter } from '@ionic/react';
import './css/LoginPage.css';
import NavBarLogin from '../components/NavBarLogin';
import Login from '../components/Login';
import FooterPage from '../components/FooterPage';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBarLogin></NavBarLogin>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className='centered-content'>
          <Login src_logo='images/logo.svg'></Login>
        </div>
      </IonContent>

      <IonFooter translucent={true}>
        <FooterPage src_logo='images/dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
      </IonFooter>
    </IonPage>
  );
};

export default LoginPage;
