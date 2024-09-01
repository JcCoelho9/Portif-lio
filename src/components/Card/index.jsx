import styles from './Card.module.css';
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaNode, FaPhp } from 'react-icons/fa';
import { FaBootstrap } from "react-icons/fa6";
import { BsArrowRight } from 'react-icons/bs';
import { SiMysql, SiCisco } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import { SiVite } from "react-icons/si";

function Card({ name, description, html_url, languages }) {
  // Função para mapear as linguagens para os ícones correspondentes
  const renderLanguageIcons = () => {
    return languages.map((language) => {
      switch (language.toLowerCase()) {
        case 'html':
          return <FaHtml5 key={language} />;
        case 'css':
          return <FaCss3Alt key={language} />;
        case 'javascript':
          return <FaJs key={language} />;
        case 'react':
          return <FaReact key={language} />;
        case 'php':
          return <FaPhp key={language} />;
        case 'nodejs':
          return <FaNode key={language} />;
        case 'mysql':
          return <SiMysql key={language} />;
        case 'cisco':
          return <SiCisco key={language} />;
        case 'bootstrap':
          return <FaBootstrap key={language} />;
        case 'vite':
          return <SiVite key={language} />; 
        case 'search-envelope':
          return <AiOutlineSearch key={language} />;
        default:
          return null;
      }
    });
  };

  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          {renderLanguageIcons()}
        </div>
        <a href={html_url} className={styles.botao} target="_blank" rel="noopener noreferrer">
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
