import Link from 'next/link'

export default function Header () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top" style={{ background: '#A53F2B' }}>
            <div class="container fluid">
                <a class="navbar-brand text-white" href='#'><strong>Turbo Keyword</strong></a>
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link href='/'>
                                <a class="nav-link active">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href='help'>
                            <a class="nav-link">Ajuda</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href='about'>
                            <a class="nav-link">Sobre</a>
                            </Link>
                        </li>
                    </ul>
                </div>	
                <span class="navbar-text d-none d-xl-block d-xxl-block">
                    Localize interesses ocultos no Facebook Ads
                </span>
            </div>
        </nav>
    )
}