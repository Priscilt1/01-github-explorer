// Aprendo o conceito de estado
import { useState } from 'react' //importando o estado (que sao variaveis mentoradas pelo o react para renderizar quando mudar de valor)

export function Counter() {
    const [counter, setCounter] = useState(0) //a const retorna um array, trazendo dois retornos. 1 que é o counter que é o valor inicial[0], e o segundo o setCount que possibilita o valor ser alterado[1]

    function increment() {
        setCounter(counter + 1) //criando um novo array, com um novo valor (conceito de imutabilidade)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Incremente
            </button>
        </div>
    )
}
