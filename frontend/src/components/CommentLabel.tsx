import './css/CommentLabel.css';
import { IonLabel } from '@ionic/react';

interface ContainerProps {
    className?: string | undefined,
    elipseColor?: string | undefined,
    labelColor?: string | undefined
    labelName?: string | undefined
    labelInfo?: string | undefined
};

const CommentLabel: React.FC<ContainerProps> = ({className, elipseColor, labelColor, labelName, labelInfo}) => {
    const elipseStyle = {
        backgroundColor: elipseColor,
    }

    const labelStyle = {
        backgroundColor: labelColor,
    }
    
    return (
        <div className={className}>
            <div className='comment-container'>
                <div className="elipse-4" style={elipseStyle}></div>

                <div className="description-container" style={labelStyle}>
                    <h2>{labelName}</h2>
                    <IonLabel>{labelInfo}</IonLabel>
                </div>
            </div>
        </div>
    );
};

export default CommentLabel;