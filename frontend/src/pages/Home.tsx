import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './css/Home.css';
import NavBarLogin from '../components/NavBarLogin';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <NavBarLogin></NavBarLogin>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
