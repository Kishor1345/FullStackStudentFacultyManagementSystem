import "./CustomAlert.css";
const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default CustomAlert;
