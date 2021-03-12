import '../styles/repositories.scss'
import { useState, useEffect } from "react"

import { RepositoryItem } from "./RepositoryItem"


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]) //estado para armazenar a listagem do repositorio. Sempre que é uma lista, começa com o vetor vazio

    // o useEffect tem dois paramentros: qual função executar e quando executar. Toda vez que a varivel repositores mudar, a função será executada
    useEffect(() => { //chamando a api
        fetch('https://api.github.com/orgs/rocketseat/repos') //buscando os dados da api
        .then(response => response.json()) //convertendo para json
        .then(data => setRepositories(data)) //para salvar no data

    }, []) //segundo parametro[dependências]

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => { //retornando o repositorio para a interface
                    return <RepositoryItem key={repository.name} repository={repository}/> //toda vez que usar o map, precisa ter o key
                })}
            </ul>
        </section>
    )
}