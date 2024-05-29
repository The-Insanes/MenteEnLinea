import './css/PsychologistPresentation.css'
import { IonPage, IonContent, IonHeader, IonFooter, IonLabel, IonButton } from "@ionic/react";
import { useState, useEffect } from 'react';
import FooterPage from "../components/FooterPage";
import ProfileLabel from "../components/ProfileLabel";
import CommentLabel from '../components/CommentLabel';
import CommentSection from '../components/CommentSection';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';

const generateItems = () => {
    const comments = []

    for(let i = 0; i < 50; i++) {
        comments.push({
            labelName: `Usuario ${i + 1}`,
            labelInfo: 'Breve opinión del Psicologo'
        });
    }

    return comments
}

interface Psychologist {
    id: number,
    ProfilePhoto: string,
    punctuation: string,
    name: string,
    area: string,
    prevision: string,
    location: number,
    specialty: number,
    description: string,
    modality: string,
    price: number
}

interface LocationState {
    data: number;
  }

const PychologistPage: React.FC = () => {
    const [psychologist, setPsychologist] = useState<Psychologist>();
    const location = useLocation<LocationState>();
    const idPsychologist = location.state.data;
    const comments = generateItems();
    
    useEffect(() => {
        fetch('data/psychologists.json')
        .then(response => response.json())
        .then((data: Psychologist[]) => {
            for(let i = 0; i < data.length; i++) {
                if(data[i].id == idPsychologist) {
                    setPsychologist(data[i]);
                }
            }
        });
    }, []);
    
    return (
        <IonPage>
            <IonContent className='psychologist-presentation'>
                <div className="profile_presentation">
                    <ProfileLabel price={psychologist?.price} 
                    method={psychologist?.modality} 
                    psychologist_name={psychologist?.name} 
                    punctuation={psychologist?.punctuation} 
                    psychologist_photo={psychologist?.ProfilePhoto} 
                    prevision={psychologist?.prevision} expert={psychologist?.area}>
                    </ProfileLabel>
                </div>

                <CommentLabel className='description-profile' labelName='Descripción' labelInfo='Breve descripción del psicologo'></CommentLabel>
                
                <IonLabel className='opinion-label'>Opiniones:</IonLabel>
                <CommentSection className='comment-section' comments={comments}></CommentSection>
                <IonButton className='report-button' fill="clear">Reportar</IonButton>
            </IonContent>

            <IonFooter slot='end'>
                <FooterPage src_logo="images/dark_logo.svg" phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
            </IonFooter>
        </IonPage>
    );
};

export default PychologistPage;