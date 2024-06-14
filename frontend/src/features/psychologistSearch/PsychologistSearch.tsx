import React, { useState, useEffect } from 'react';
import { IonContent, IonSelect, IonSelectOption, IonFooter, IonPage, IonHeader } from '@ionic/react';
import './PsycologistSearch.css';
import NavBar from '../home/navbar/NavBar';
import PsychologistList from '../../components/psychologistList/PsychologistList';
import FooterPage from '../../components/footerPage/FooterPage';
import { Redirect } from 'react-router-dom';

interface Psycologist {
  id: number;
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

const PsychologistSearch: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<number | undefined>(undefined);
  const [selectedSpecialty, setSelectedSpecialty] = useState<number | undefined>(undefined);
  const [filteredPsycologists, setFilteredPsycologists] = useState<Psycologist[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [displayedPsycologists, setDisplayedPsycologists] = useState<Psycologist[]>([]);
  const [onClickPill, setOnClickPill] = useState<number>(-1);

  const clickOnPill = (id: number | undefined) => {
    if (id !== undefined) {
      setOnClickPill(id);
    }
  };

  useEffect(() => {
    fetch('data/locations.json')
      .then(response => response.json())
      .then(data => setLocations(data.locations));

    fetch('data/specialities.json')
      .then(response => response.json())
      .then(data => setSpecialties(data));
  }, []);

  useEffect(() => {
    if (selectedLocation !== undefined && selectedSpecialty !== undefined) {
      fetch('data/psycologists.json')
        .then(response => response.json())
        .then((data: Psycologist[]) => {
          const locationFiltered = data.filter(p => p.location === selectedLocation);
          const specialtyFiltered = locationFiltered.filter(p => p.specialty === selectedSpecialty);
          setFilteredPsycologists(specialtyFiltered);
        })
        .catch(error => {
          console.error("Error fetching psycologists:", error);
        });
    }
  }, [selectedLocation, selectedSpecialty]);

  return (
    <IonPage>
      {onClickPill !== -1 && <Redirect to={{ pathname: '/PsychologistPage', state: { data: onClickPill } }} />}
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent fullscreen>
      <div className='psychologist-search-background'>
        <h1>Selecciona tu Ubicación y la Especialidad que buscas</h1>
          <img src='./psicologo 1.png'></img>
      </div>
        <div className="psychologist-search-container">
          <IonSelect
            className="custom-select location-select"
            value={selectedLocation}
            placeholder="Seleccionar Ubicación"
            onIonChange={e => setSelectedLocation(e.detail.value)}>
            {locations.map(location => (
              <IonSelectOption key={location.id} value={location.id}>
                {location.location}
              </IonSelectOption>
            ))}
          </IonSelect>

          <IonSelect
            className="custom-select speciality-select"
            value={selectedSpecialty}
            placeholder="Seleccionar Especialidad"
            onIonChange={e => setSelectedSpecialty(e.detail.value)}>
            {specialties.map(specialty => (
              <IonSelectOption key={specialty.id} value={specialty.id}>
                {specialty.specialtyName}
              </IonSelectOption>
            ))}
          </IonSelect>
        </div>
      
        <div className="searchResultZone">
          {filteredPsycologists.length > 0 ? (
            <PsychologistList psycologists={filteredPsycologists} onClick={clickOnPill} />
          ) : (
            <h3>No se encontraron psicólogos con los criterios seleccionados.</h3>
          )}
        </div>

      </IonContent>

      <IonFooter translucent>
        <FooterPage/>
      </IonFooter>
    </IonPage>
  );
};

export default PsychologistSearch;
