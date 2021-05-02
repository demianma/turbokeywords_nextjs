//funcaozinha merda pra testes
import {useState} from 'react'

export default function Capslock(params) {

    const initialState = "ex. Peixe"
    const [Texto, setTexto] = useState(initialState);
    
    function setInterfaceTexto () {
        setTexto("novo texto")
    }

    return (<div>
        <div>{Texto}</div>
        <button onClick={setInterfaceTexto}>Botaum</button>
        </div>)
};
