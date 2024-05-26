import './css/PsychologistPresentation.css'
import { IonPage, IonContent, IonHeader, IonFooter, IonImg, IonLabel } from "@ionic/react";
import FooterPage from "../components/FooterPage";
import NavBarLogin from "../components/NavBarLogin";
import ProfileLabel from "../components/ProfileLabel";
import CommentLabel from '../components/CommentLabel';
import CommentSection from '../components/CommentSection';

const generateItems = () => {
    const comments = []

    for(let i = 0; i < 50; i++) {
        comments.push({
            labelName: `User ${i + 1}`,
            labelInfo: 'Breve opinión del Psicologo'
        });
    }

    return comments
}

const PychologistPage: React.FC = () => {
    const comments = generateItems()
    
    return (
        <IonPage>
            <IonHeader>
                <NavBarLogin></NavBarLogin>
            </IonHeader>

            <IonContent>
                <div className="profile_presentation">
                    <ProfileLabel price="XXXXX" method="Online" psychologist_name="Barbara"></ProfileLabel>
                </div>

                <CommentLabel labelName='Descripción' labelInfo='Breve descripción del psicologo'></CommentLabel>
                <IonLabel>Opiniones: </IonLabel>
                <CommentSection comments={comments}></CommentSection>
            </IonContent>

            <IonFooter>
                <FooterPage src_logo="dark_logo.svg" phone_number='+569999999' email='mail@example.cl' background='primary'></FooterPage>
            </IonFooter>
        </IonPage>
    );
};

export default PychologistPage;