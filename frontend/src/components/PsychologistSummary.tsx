import React from 'react';
import './css/PsychologistSummary.css';

interface ContainerProps { 
    className?: string | undefined
}; 

const PsychologistSummary: React.FC<ContainerProps> = ({className}) => { 
    return (
        <div id = 'pill'>

            <div id = 'leftSide'></div>
            <div id = 'rightSide'></div>

        </div>
    );

};

export default PsychologistSummary