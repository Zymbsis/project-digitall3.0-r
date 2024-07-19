import styles from "./WaterIntakePopup.module.css";

const Header = ({ title, onClose }) => (
  <div className={styles.header}>
    <div className={styles.title}>{title}</div>
    <button className={styles.closeButton} onClick={onClose}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee184b0be38c8933f5f30418cfd5e3c3510e7cdba804b4b4fbab180151bfc6bd?apiKey=6ca973d5a2ad4e4094edfc4eea487097&"
        className={styles.closeIcon}
        alt="Close"
      />
    </button>
  </div>
);

export default Header;
