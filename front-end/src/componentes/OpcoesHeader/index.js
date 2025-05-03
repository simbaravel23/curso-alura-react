
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Opcao = styled.li `
     display: flex;
`
const Opcoes = styled.ul `
    font-size: 16px;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 25px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map ( (texto) => (
                <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader

