import './PychologistPage.css'
import { IonPage, IonContent, IonHeader, IonFooter, IonLabel, IonButton } from "@ionic/react";
import FooterPage from "../../components/footerPage/FooterPage";
import NavBar from "../home/navbar/NavBar";
import ProfileLabel from "../../components/ProfileLabel";
import CommentLabel from '../../components/CommentLabel';
import CommentSection from '../../components/CommentSection';

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

const PychologistPage: React.FC = () => {
    const comments = generateItems();
    
    return (
        <IonPage>
            <IonHeader>
                <NavBar></NavBar>
            </IonHeader>

            <IonContent>
                <div className="profile_presentation">
                    <ProfileLabel price="XXXXX" method="Online" psychologist_name="Barbara"></ProfileLabel>
                </div>

                <CommentLabel className='description-profile' labelName='Descripción' labelInfo='Breve descripción del psicologo'></CommentLabel>
                
                <IonLabel className='opinion-label'>Opiniones: </IonLabel>
                <CommentSection className='comment-section' comments={comments}></CommentSection>
                <IonButton className='report-button' fill="clear">Reportar</IonButton>
            </IonContent>

            <IonFooter slot='end'>
                <FooterPage></FooterPage>
            </IonFooter>
        </IonPage>
    );
};

export default PychologistPage;