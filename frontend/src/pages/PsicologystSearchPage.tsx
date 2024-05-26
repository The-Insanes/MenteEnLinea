import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './css/PsicologystSearchPage.css';
import PsychologistSummary from '../components/PsychologistSummary';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className = 'searchFilterZone'>
            
        </div>
        <PsychologistSummary>

        </PsychologistSummary>
      </IonContent>
    </IonPage>
  );
};

export default Home;
