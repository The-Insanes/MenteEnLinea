import React from 'react';
import { IonList, IonItem, IonContent } from '@ionic/react';
import PsychologistSummary from './PsychologistSummary';
import './css/PsychologistList.css'

interface Props {
  psycologists: Psycologist[];
}
interface Psycologist {
    id: number
    ProfilePhoto: string;
    punctuation: string;
    name: string;
    specialty: number;
    prevision: string;
    location: number;
  }


const PsychologistList: React.FC<Props> = ({ psycologists }) => {
  
    return (
      <IonContent className='contenedorListaPills'>
        <IonList className='listaPills'>
          {psycologists.map(psycologist => (
            <IonItem key={psycologist.id}>
              <PsychologistSummary psycologist={psycologist} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
        
    );
};

export default PsychologistList;
