import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/react';
import './css/LoginPage.css';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='centered-content'>
          <Login src_logo='logo.svg'></Login>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
