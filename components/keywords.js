import {useState} from 'react'
import fetchFBkeywords from '../services/graphapi'
import dataExample from '../test_data/modelo_gatos.json'

export default function Keywords(props) {

    //condicao inicial
    const initSearchTerm = "ex.: Gatos"
    const initModelGatos = dataExample;

    const [searchTerm, setSearchTerm] = useState(initSearchTerm);
    const [FBTable, setFBTable] = useState(initModelGatos);

    function Search() {
        let query = {
            "keyword": searchTerm, 
            "lang": "pt-BR"
        }
        
        setFBTable(fetchFBkeywords(query)) //tá dando Invalid Hook Call...

        return null
    }

    return (
        <div className="row">
            <div className='col-md-3 p-5 border'>
                <div className='h5'>Busca</div>

                    <div className='mb-3'>
                        <label htmlFor='fkeyword' className='form-label'>Interesse</label>
                        <input type='text' className='form-control' id='fkeyword' placeholder={initSearchTerm}
                        aria-label='Interesse' onChange={event => setSearchTerm(event.target.value)} required></input>
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
            
            <div className='col-md-9 p-5 border'>
                <div className='h5'>Resultados</div>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Palavra</th>
                        <th scope="col">Audiência</th>
                        <th scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {/* keywords are inside '{data:...}' */}
                    {FBTable.data.map((keyword) => (
                        <tr onClick={()=>{document.getElementById(keyword.id).click()}}> 
                            <td>
                                <input className="form-check-input" type="checkbox" value={keyword.name} id={keyword.id}></input>
                            </td>
                            <td>{keyword.name}</td>
                            <td>{keyword.audience_size.toLocaleString()}</td>
                            <td>{keyword.path.join(" | ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}