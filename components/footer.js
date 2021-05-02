import Link from 'next/link'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { name } from './layout'

export default function Footer() {

    return (
        <div class="container-fluid p-3" style={{ background: '#A53F2B' }}>
            <div class="row">
                <div class="col-sm text-white text-center">
                    <Link href="#">
                        <a style={{color: '#fff'}}>
                            Termos de uso <FontAwesomeIcon width='12' icon={faExternalLinkAlt} />
                        </a>
                    </Link>
                </div>

                <div class="col-sm text-white text-center">
                    {name}
                </div>

                <div class="col-sm text-center">
                    <Link href="#">
                        <a style={{color: '#fff'}}>
                            Política de Privacidade <FontAwesomeIcon width='12' icon={faExternalLinkAlt} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
    
};