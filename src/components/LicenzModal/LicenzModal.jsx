const LicenzModal = ({ img, close }) => {
  return (
    <div className="licenz-modal">
      <div className="licenz-modal__content">
        <button type="submit" onClick={() => close()}>×</button>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default LicenzModal;
  