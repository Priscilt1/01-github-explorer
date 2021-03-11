export function RepositoryItem(props) {
    return (
        <li>
            {/* caso o repositorio esteja vazio, coloque o nome 'Defaul' */}
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.link}>
                Acessar o repositório
            </a>
        </li>
    )
}