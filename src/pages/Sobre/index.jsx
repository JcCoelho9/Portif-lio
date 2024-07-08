import styles from './Sobre.module.css'
import avatar from './images/avatar.jpg'
import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/js.svg'
import node from './images/nodejs.svg'
import react from './images/react.svg'
import angular from './images/angular.svg'
import ionic from './images/ionic.svg'
import java from './images/java.svg'
import php from './images/php.svg'
import sql from './images/sql.svg'
import git from './images/git.svg'
import github from './images/gh.svg'
import python from './images/python.svg'
import r from './images/r.svg'
import powerbi from './images/powerbi.svg'
import vs from './images/vs.svg'
import eclipse from './images/eclipse.svg'
import packet from './images/pc.svg'




function Sobre() {
    return (
        <section className={styles.sobre}>            

            <div className={styles.bio}>
                <img src={avatar} className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                        <p>Sou o <span>Coelho</span><br />
                        <strong>Estagiário</strong></p>
                            <p>Sou estudante de TI, atualmente no 5º período do curso de Sistemas de Informação.</p>
                            <p>Sou adepto à ideia de que a tecnologia pode nos ajudar a construir um futuro melhor para todos. Utilizando tecnologias limpas podemos sim transformar o mundo. </p>
                            <p>Sou interessado em programação Full-Stack, visando criar aplicações responsivas e de fácil acesso, com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do HTML"/>            
                    <img src={css} alt="Ícone do CSS"/>            
                    <img src={js} alt="Ícone do JavaScript"/>            
                    <img src={node} alt="Ícone do NodeJS"/>            
                    <img src={react} alt="Ícone do React"/> 
                    <img src={angular} alt="Ícone do Angular"/>            
                    <img src={ionic} alt="Ícone do Ionic"/>            
                    <img src={java} alt="Ícone do Java"/>            
                    <img src={php} alt="Ícone do PHP"/>                                   
                    <img src={sql} alt="Ícone do SQL"/>                                   
                    <img src={git} alt="Ícone do GIT"/>                                   
                    <img src={github} alt="Ícone do GITHub"/>                                   
                    <img src={python} alt="Ícone do Python"/>                                   
                    <img src={r} alt="Ícone do R"/>    
                    <img src={powerbi} alt="Ícone do PowerBI"/>                                   
                    <img src={vs} alt="Ícone do VS Code"/>                                   
                    <img src={eclipse} alt="Ícone do Eclipse"/>                                   
                    <img src={packet} alt="Ícone do Packet Tracer}"/>                                                                 
            
            
                </div>
            </div>
            <div className={styles.idiomas}>
                        <h3>Idiomas</h3>
                        <p><span>Inglês:</span> Intermediário B2; <span>Espanhol:</span>Iniciante A2</p>                       
            </div>

        </section>
    );
}

export default Sobre;
