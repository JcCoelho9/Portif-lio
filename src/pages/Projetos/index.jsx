import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/JcCoelho9/repos?page=1&per_page=50');
            const data = await response.json();

            // Definindo tecnologias específicas para cada repositório
            const reposWithLanguages = data.map(repo => {
                let languages = [];
                switch (repo.name.toLowerCase()) {
                    case 'api':
                        languages = ['nodejs', 'javascript'];
                        break;
                    case 'cicle':
                        languages = ['mysql'];
                        break;
                    case 'crud':
                        languages = ['php', 'mysql', 'bootstrap']; // Adicione 'bootstrap' aqui
                        break;
                    case 'jogo-da-memoria':
                        languages = ['react', 'javascript', 'css', 'html'];
                        break;
                    case 'portif-lio':  // Corrigido para o nome correto
                        languages = ['react', 'javascript', 'css', 'html', 'vite'];
                        break;
                    case 'redes':
                        languages = ['cisco'];
                        break;
                    case 'trabalhos-html-css':
                        languages = ['bootstrap', 'css', 'html'];
                        break;
                    default:
                        languages = [];
                        break;
                }
                return {
                    ...repo,
                    languages
                };
            });

            setRepositories(reposWithLanguages);
        };

        buscarRepositorios();
    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                    languages={repo.languages}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    );
}

export default Projetos;
