import 'bootstrap/dist/css/bootstrap.css'

function Home() {
    return ( 
        <div class='row m-3 shadow'>
        {/* left column -> data input */}
        <div class='col-md-3 p-3 border'>

            {/* begin primary data input block */}
            <div class='h5'>Busca</div>
                <form action='#'  method='get'>
                    <div class='mb-3'>
                        <label for='fkeyword' class='form-label'>Interesse</label>
                        <input type='text' class='form-control' id='fkeyword' placeholder='ex.: peixes' aria-label='Interesse' required></input>
                    </div>
                    <div class='mb-3'>
                        <label for='fidiom' class='form-label'>Idioma</label>
                        <select class='form-select' id='fidiom' aria-label='Idioma'>
                        <option value='pt_BR'>Português (Brasil)</option>
                        <option value='pt_PT'>Português (Portugal)</option>
                        <option value='en_US'>Inglês (US)</option>
                        <option value='en_GB'>Inglês (UK)</option>
                        </select>
                    </div>
                    <div class='d-grid gap-2'>
                        <button type='submit' id='btnBuscar' class='btn btn-success'>Buscar</button>
                    </div>
                </form>
                {/* end primary data input block */}

                <div class='mb-3 pt-3'>
                    <hr />
                </div>

                <div class='mb-3'> 
                    <label for='fsize' class='form-label'>Tamanho da audiência</label>
                    <input type='range' min='0' max='100' value='50' class='form-range' id='fsize' aria-label='Controle de tamanho'></input>
                </div>

                <div class='mb-3'>
                    <label for='fminsize' class='form-label'>Mínimo</label>
                    <input type='text' placeholder='0' class='form-control' id='fminsize' aria-label='Tamanho mínimo'></input>
                </div>

                <div class='mb-3'>
                    <label for='fmaxsize' class='form-label'>Máximo</label>
                    <input type='text' placeholder='100' class='form-control' id='fmaxsize' aria-label='Tamanho máximo'></input>
                </div>

                <div class='mb-3 pt-3'>
                    <hr />
                    <div class='h5'>Desambiguação</div>
                </div>
            </div>

            <div class='col-md-9 p-3 border'>
                <div class='h5'>Resultados</div>
            </div>
        </div>
        )
}

export default Home;