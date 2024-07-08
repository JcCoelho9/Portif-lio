import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { FiGithub } from "react-icons/fi";



function Contatos() {
    return (
        <>
            
                    <section className={styles.contatos}>
                        <h2>Contatos</h2>
                        <h3>Entre em contato</h3>
                        <p>Para trarmos de negócios</p>

                        <div className={styles.icones}>
                            <a href='maito:juliocesar.andrade2@yahoo.com' target='_blank' rel='noopener noreferrer'>
                                <GoMail className={styles.icone}/>
                            </a> 
                            <a href='https://github.com/JcCoelho9' target='_blank' rel='noopener noreferrer'>
                                <FiGithub className={styles.icone}/>
                            </a>   
                        </div>

                    </section>

                
        </>
    );
}

export default Contatos;
