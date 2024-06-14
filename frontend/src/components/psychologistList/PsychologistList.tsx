import React from 'react';
import { IonList, IonItem, IonContent } from '@ionic/react';
import PsychologistSummary from '../psychologistSummary/PsychologistSummary';
import './PsychologistList.css'

interface Props {
  psycologists: Psycologist[];
  onClick?: (id: number | undefined) => void;
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


const PsychologistList: React.FC<Props> = ({ psycologists, onClick}) => {
  
    return (
      <IonContent className='contenedorListaPills'>
        <IonList className='listaPills'>
          {psycologists.map(psycologist => (
            <IonItem key={psycologist.id}>
              <PsychologistSummary psycologist={psycologist} onClick={onClick}/>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
        
    );
};

export default PsychologistList;