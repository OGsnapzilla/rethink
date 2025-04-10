import styles from "./ServicePage.module.css";
import ServiceItem from "../components/ServiceItem";
import marketingIcon from "../assets/marketing.svg";
import websiteIcon from "../assets/website.svg";
import resourceIcon from "../assets/resource.svg";
import comboIcon from "../assets/combo.svg";
import visualIcon from "../assets/visual.svg";
import Faq from "../components/Faq";

const Services = () => {
  const services = [
    { icon: marketingIcon, title: "MARKEDSFØRING" },
    { icon: websiteIcon, title: "NY HJEMMESIDE" },
    { icon: resourceIcon, title: "RESSOURCEOPTIMERET HJEMMESIDE" },
    { icon: comboIcon, title: "MARKEDSFØRING + NY HJEMMESIDE" },
    { icon: visualIcon, title: "VISUEL IDENTITET" },
  ];

  return (
    <section className={styles.services}>
      <br></br>
      <h1>SERVICES</h1>
      <article className={styles.grid}>
        {services.map((s, i) => (
          <ServiceItem key={i} icon={s.icon} title={s.title} />
        ))}
      </article>

        <Faq></Faq>

    </section>
  );
};

export default Services;