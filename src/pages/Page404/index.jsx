
import styles from './Page404.module.css'

function Page404(){
    return(
        <section className={styles.page404}>
            
                <h2 className={styles.titulo2}>Há algo de errado que não está certo...</h2>
                    <div className={styles.textos}>
                        <span className={styles.texto_grande}>404</span><br />
                        <strong className={styles.texto_vermelho}>Página não localizada!</strong>
                    </div>
                
        </section>
    )
}

export default Page404