<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"></link>
/* Imports */
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonList, 
  IonSelect, 
  IonSelectOption,
  IonApp, 
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonFooter
} from '@ionic/react';
import React, {useState, useEffect} from 'react';


/* Components */ 
import './css/PsicologystSearchPage.css';
import NavBarLogin from '../components/NavBarLogin';
import PsychologistSummary from '../components/PsychologistSummary';
import FooterPage from '../components/FooterPage';

/* Interface */

interface Psycologist {
  id: number
  ProfilePhoto: string,
  punctuation: string
  name: string;
  area: string;
  prevision: string;
}

interface Location {
  id: number;
  location: string;
}

interface Specialty {
  specialtyName: string;
}

const PAGE_SIZE = 5; // n° de Psicologos por carga

/* Page Design , Psycologist.name, Psycologist.area, Psycologist.prevision */
const PsicologystSearchPage: React.FC<Psycologist> = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Fetch locations
    fetch('http://localhost:3001/locations')
      .then(response => response.json())
      .then(data => setLocations(data));

    // Fetch specialties
    fetch('http://localhost:3001/specialties')
      .then(response => response.json())
      .then(data => setSpecialties(data));
  }, []);




  return (
    <IonApp>
      
      <NavBarLogin></NavBarLogin>
      <IonContent fullscreen>
        <div className="completePage">
          <div className = 'searchFilterZone'>
            <div className="filter-container">
              <IonSelect
                className="custom-select Location-select"
                value={selectedLocation}
                placeholder="Seleccionar Ubicación"
                onIonChange={e => setSelectedLocation(e.detail.value)}
              >
                {locations.map(location => (
                  <IonSelectOption key={location.id} value={location.location}>
                    {location.location}
                  </IonSelectOption>
                ))}
              </IonSelect>

              <IonSelect
                className="custom-select Speciality-select"
                value={selectedSpecialty}
                placeholder="Seleccionar Especialidad"
                onIonChange={e => setSelectedSpecialty(e.detail.value)}
              >
                {specialties.map(specialty => (
                <IonSelectOption key={specialty.specialtyName} value={specialty.specialtyName}>
                  {specialty.specialtyName}
                </IonSelectOption>
              ))}
              </IonSelect>
            </div>
          </div>

          <div className='searchResultsZone'>
            <PsychologistSummary></PsychologistSummary>
            <PsychologistSummary></PsychologistSummary>
            <PsychologistSummary></PsychologistSummary>
          </div>

        </div>
      </IonContent>
      <IonFooter translucent={true}>
        <FooterPage src_logo='dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
      </IonFooter>
    </IonApp>
  );
};

export default PsicologystSearchPage;
