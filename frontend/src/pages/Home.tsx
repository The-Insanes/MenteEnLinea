import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './css/Home.css';
import NavBarLogin from '../components/NavBarLogin';
import Login from '../components/Login';
import FooterPage from '../components/FooterPage';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavBarLogin></NavBarLogin>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
      <IonFooter>
        <FooterPage background='primary'></FooterPage>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
