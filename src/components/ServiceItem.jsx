import styles from "./ServiceItem.module.css";

const ServiceItem = ({ icon, title }) => {
    return (
        <article className={styles.item}>
          <img src={icon} alt={title}/>
          <p>{title}</p>
        </article>
      );
};

export default ServiceItem;
