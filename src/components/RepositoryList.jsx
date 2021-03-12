import '../styles/repositories.scss'
import { useState, useEffect } from "react"

import { RepositoryItem } from "./RepositoryItem"


const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

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
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}