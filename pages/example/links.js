import Link from 'next/link'

export default function index() {
    return (
        <div className="container">

            {/* Exemplo de um LINK client-side usando Link 
            Link faz preload da pagina dentro do proprio client-size */}
            <h1 className="title">Página com exemplo de link</h1>
            <Link href="example/first-post">

                {/* atributos devem ir em a */}
                <a className="exemplo_classe">Ir para primeiro projeto</a>
            </Link>

       </div>
    )
};
