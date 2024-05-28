import React from 'react';
import { IonList, IonItem, IonContent } from '@ionic/react';
import PsychologistSummary from './PsychologistSummary';

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
        <IonList>
        {psycologists.map(psycologist => (
          <IonItem key={psycologist.id}>
            <PsychologistSummary psycologist={psycologist} />
          </IonItem>
        ))}
        </IonList>
    );
};

export default PsychologistList;
