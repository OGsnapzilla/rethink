import styles from "./Faq.module.css";
import FaqItem from './FaqItem';

const faqData = [
    {
      question: 'Hvorfor få en hjemmeside fra Rethink?',
      answer: 'Hos Rethink får du ikke bare en standardløsning – du får en strategisk, visuelt stærk og brugervenlig hjemmeside, der er skræddersyet til dine mål og din målgruppe. Vi fokuserer på æstetik, performance og funktionalitet – og leverer løsninger der både ser godt ud og skaber resultater.',
    },
    {
        question: 'Hvad er typiske priser for hjemmesider?',
        answer: 'Priser på hjemmesider varierer alt efter behov og funktioner. Hos Rethink starter simple one-pagers fra ca. 5.000 kr., mens større, skræddersyede løsninger med flere undersider, integrationer og avancerede funktioner typisk ligger mellem 10.000 – 25.000 kr. Du får altid et fast tilbud – ingen overraskelser.',
      },
      {
        question: 'Hvad skal man overveje inden køb af hjemmeside?',
        answer: 'Før du får lavet en hjemmeside, er det en god idé at tænke over: formålet med siden, målgruppen, hvilket indhold du har, skal der være specielle funktioner, som booking, kontakt, webshop? Hos Rethink hjælper vi dig med at afklare alt dette – så du får en løsning, der passer perfekt til dig og dine kunder.',
      },
      {
        question: 'Hvad betyder det at ressourceoptimere?',
        answer: 'Vi optimerer filer, bruger grøn hosting, implementerer letvægtsdesign og sørger for, at din hjemmeside loader hurtigt for at minimere strømforbruget.',
      },
];

const Faq = () => (
    <section className={styles.faq}>
      <h2>FAQ</h2>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );

export default Faq;
