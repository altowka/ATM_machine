import './style.css';


interface ActionButtonProps {
    message: string;
    handleClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ handleClick, message}) => (
    <button className="action-button" onClick={handleClick}>{message}</button>
)

export default ActionButton;