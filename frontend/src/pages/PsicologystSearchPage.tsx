<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"></link>
/* Imports */
import { 
  IonContent,
  IonSelect,
  IonSelectOption,
  IonFooter,
  IonPage
} from '@ionic/react';
import React, {useState, useEffect} from 'react';


/* Components */ 
import './css/PsicologystSearchPage.css';
import NavBarLogin from '../components/NavBarLogin';
import PsychologistSummary from '../components/PsychologistSummary';
import FooterPage from '../components/FooterPage';
import { text } from 'ionicons/icons';
import PsychologistList from '../components/PsychologistList';
import { Redirect, Route } from 'react-router';
import PychologistPage from './PsychologistPresentation';
import { Link } from 'react-router-dom';

/* Interfaces */

interface Psycologist {
  id: number
  ProfilePhoto: string;
  punctuation: string;
  name: string;
  specialty: number;
  prevision: string;
  location: number;
}

interface Location {
  id: number;
  location: string;
}

interface Specialty {
  specialtyName: string;
  id: number;
}

const PsicologystSearchPage: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedSpecialty, setSelectedSpecialty] = useState<number | undefined>(undefined);
  const [filteredPsycologists, setFilteredPsycologists] = useState<Psycologist[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [displayedPsycologists, setDisplayedPsycologists] = useState<Psycologist[]>([]);
  const [onClickPill, setOnClickPill] = useState<number>(-1);

  const clickOnPill = (id: number | undefined) => {
    if(id !== undefined) {
      setOnClickPill(id);
    }
  }

  useEffect(() => {
    // Fetch locations
    fetch('data/locations.json')
      .then(response => response.json())
      .then(data => setLocations(data.locations)
    );
      

    // Fetch specialties
    fetch('data/specialities.json')
      .then(response => response.json())
      .then(data => setSpecialties(data)
    );
  
    }, []);
    
  useEffect(() => {
    if (selectedLocation !== undefined && selectedSpecialty !== undefined) {
      fetch('data/psycologists.json')
        .then(response => response.json())
        .then((data: Psycologist[]) => {
          //Filtrado por ubicación
          const locationFiltered = data.filter((p: Psycologist) =>
            p.location === selectedLocation
          );

          // Filtrado por especialidad
          const specialtyFiltered = locationFiltered.filter((p: Psycologist) =>
            p.specialty === selectedSpecialty
          );
          setFilteredPsycologists(specialtyFiltered);
          
        })
        .catch(error => {
          console.error("Error fetching psycologists:", error);
        });
    }
  }, [selectedLocation, selectedSpecialty]);
  
  return (
    <IonPage>
      {onClickPill != -1 &&
        <Redirect to={{pathname: '/PsychologistPage', state: {data: onClickPill}}}></Redirect>
      }

      <IonContent className='psychologist-search' fullscreen>
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
                  <IonSelectOption key={location.id} value={location.id}>
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
                <IonSelectOption key={specialty.id} value={specialty.id}>
                  {specialty.specialtyName}
                </IonSelectOption>
              ))}
              </IonSelect>
            </div>
          </div>
          
          <div className="searchResultZone">
            {filteredPsycologists.length > 0 ? (
              <PsychologistList psycologists={filteredPsycologists} onClick={clickOnPill}/>
            ) : (
              <h3>No se encontraron psicólogos con los criterios seleccionados.</h3>
            )}
          </div>
        </div>
      </IonContent>

      <IonFooter translucent={true}>
        <FooterPage src_logo='images/dark_logo.svg' phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
      </IonFooter>
    </IonPage>
  );
};

export default PsicologystSearchPage;
