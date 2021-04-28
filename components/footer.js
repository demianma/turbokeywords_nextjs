import Link from 'next/link'

export default function Footer() {

    return (
        <div class="container-fluid p-3" style={{ background: '#A53F2B' }}>
            <div class="row">
                <div class="col-sm text-white text-center">
                    Termos de uso
                </div>

                <div class="col-sm text-white text-center">
                    Demian Andrade
                </div>

                <div class="col-sm text-center">
                    <Link href="#">
                        <a class="text-white">Política de Privacidade</a>
                    </Link>
                </div>
            </div>
        </div>
    )
    
};

