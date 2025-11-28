import "./index.css";

export const Loader = ({ text = "Chargement..." }) => {
  return (
    <>
      <div className="loader-container">
        <div className="loader-spinner"></div>
        {text && <p className="loader-text">{text}</p>}
      </div>
    </>
  );
};
