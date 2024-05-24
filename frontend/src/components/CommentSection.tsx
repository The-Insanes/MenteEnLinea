import { IonInfiniteScroll } from '@ionic/react';
import './css/CommentSection.css'

interface ContainerProps {
    className?: string | undefined
};

const CommentSection: React.FC<ContainerProps> = ({className}) => {
    return (
        <div className={className}>
            <div className='container-comment-section'>
                <IonInfiniteScroll></IonInfiniteScroll>
            </div>
        </div>
    );
};

export default CommentSection;