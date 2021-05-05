import useSWR from 'swr'
import {useState} from 'react'
import fetchFBkeywords from '../services/graphapi'


//render lado da direita - resultados
function Results() {

    const keyword = "Keyword de teste"

    const { response, isLoading, isError } = fetchFBkeywords(keyword)

    if (isLoading) return "Buscando dados..."
    if (isError) return "Houve um erro na solicitação"

    return JSON.stringify(response)
}

/*

USEI AS INSTRUCOES DO DESCHJAPS PARA CRIAR UM useState QUE ATUALIZA A VAR
searchTerm com a funcoao setsearchTerm. Eu precis ochamar essa funcao cada
vez qeu eu quiser atualizar a variavel.

agora precisa ver como obter os dados de dentro do campo do formulario
para poder usar em algum lugar. 

Também pretendo colocar o buscador do facebook pra rodar server-side a fim
de proteger o codigo e devlver esse negocio apra a interface. sei lá como.

*/


//render lado da esquerda - entrada de dados
 export default function Keywords(props) {

    //condicao inicial campo de busca
     const initialState = "ex.: Gatos"
     const [searchTerm, setsearchTerm] = useState(initialState);
     const [results, setResults] = useState("dados iniciais.");

     function Search() {
        setsearchTerm("novo") //buscar o valor do campo
        setResults(Results("termo de pesquisa"))
        //pegar o valor do campo e chamar o backend para buscar json
        //lancar isso nos resultados
        return null
    }

    return (
        <div className="row">
            <div className='col-md-3 p-3 border'>
                <div className='h5'>Busca</div>
                {/* <form> */}
                    <div className='mb-3'>
                        <label htmlFor='fkeyword' className='form-label'>Interesse</label>
                        <input type='text' className='form-control' id='fkeyword' placeholder={searchTerm}
                        aria-label='Interesse' required></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='fidiom' className='form-label'>Idioma</label>
                        <select className='form-select' id='fidiom' aria-label='Idioma'>
                        <option value='pt_BR'>Português (Brasil)</option>
                        <option value='pt_PT'>Português (Portugal)</option>
                        <option value='en_US'>Inglês (US)</option>
                        <option value='en_GB'>Inglês (UK)</option>
                        </select>
                    </div>

                    <div className='d-grid gap-2'>
                        <button onClick={Search} id='btnBuscar' className='btn btn-success'>Buscar</button>
                    </div>
                {/* </form> */}

                <div className='mb-3 pt-3'><hr /></div>

                <div className='mb-3'> 
                    <label htmlFor='fsize' className='form-label'>Tamanho da audiência</label>
                    <input type='range' min='0' max='100' value='50' className='form-range' id='fsize' aria-label='Controle de tamanho'></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='fminsize' className='form-label'>Mínimo</label>
                    <input type='text' placeholder='0' className='form-control' id='fminsize' aria-label='Tamanho mínimo'></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='fmaxsize' className='form-label'>Máximo</label>
                    <input type='text' placeholder='100' className='form-control' id='fmaxsize' aria-label='Tamanho máximo'></input>
                </div>

                <div className='mb-3 pt-3'>
                    <hr />
                    <div className='h5'>Desambiguação</div>
                </div>
            </div>
            {/* Coluna direita */}
            
            <div className='col-md-9 p-3 border'>
                <div className='h5'>Resultados</div>
                <div className='mb-3'>{results}</div>
            </div>
        </div>
    )
}