import './css/Divider.css';

interface ContainerProps { 
    className?: string | undefined
}

const Divider: React.FC<ContainerProps> = ({className}) => {
    return (
        <div className= {className}>
            <div className='rectangle'></div>
            <div className='circle'></div>
            <div className='rectangle'></div>
        </div>
    );
};

export default Divider;