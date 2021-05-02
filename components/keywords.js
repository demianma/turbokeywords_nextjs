import useSWR from 'swr'
import Error from 'next/error'
import {useState} from 'react'

//function fetcher await
const fetcher = (...args) => fetch(...args).then(res => res.json())

//fetch FB with useSWR
function fetchFBkeywords (keyword) {
    
    //const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const token = 'EAAHe0AcsY6MBAGlLPcM9bBVczujSfZAhSzi0Pi1ySbEAZAjVR1LpeYf7B9573MBVpnNYZC8u9RBQZApXv6MF2BWpdtlBnvyRDMRHgqauDYPh7xQ7YJQJpB8WqTV1TyMjXwQEcIrLZCaoCVY0QZBU7knwNf1EHkiGFI3UZCmALvPPW2V7x5fJcCW598MD6s3FSmNUZAPHrJHYHJoMTGejm0XF'
    const url = `https://graph.facebook.com/search?type=adinterest&q=[${keyword}]&limit=10000&locale=pt_BR&access_token=${token}`

    const { data, error } = useSWR(url , fetcher)

    return {
        response: data,
        isLoading: !error && !data,
        isError: error
      }
}

//render lado da direita - resultados
function Results(keyword) {

    const { response, isLoading, isError } = fetchFBkeywords(keyword)

    if (isLoading) return "Carregando..."
    if (isError) return <Error />

    return (
            <div className='col-md-9 p-3 border'>
                <div className='h5'>Resultados</div>
                <div className='mb-3'>{JSON.stringify(response)}</div>
            </div>
    )
}

// function Search (event) {
//     event.preventDefault();
//     console.log("clique")
//     const keyword = "Gatos";
//     Results(keyword); //GERA UM ERRO DE HOOS CAN ONLY BE CALLED INSED A BODY OF A FUNCTION
// }


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
 export default function Keywords() {

    const initialState = "ex.: Gatos"
    const [searchTerm, setsearchTerm] = useState(initialState);

    function Search()
    {
        setsearchTerm("novo")
        console.log ("cliquei no botao" , searchTerm)
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
            <Results />
        </div>
    )
}