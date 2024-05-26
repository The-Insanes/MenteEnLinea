import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/react';
import './css/LoginPage.css';
import NavBarLogin from '../components/NavBarLogin';
import Login from '../components/Login';
import FooterPage from '../components/FooterPage';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <NavBarLogin></NavBarLogin>
      </IonHeader>

      <IonContent fullscreen>
        <div className='centered-content'>
          <Login src_logo='logo.svg'></Login>
        </div>
      </IonContent>

      <IonFooter translucent={true}>
        <FooterPage src_logo='dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
      </IonFooter>
    </IonPage>
  );
};

export default LoginPage;
