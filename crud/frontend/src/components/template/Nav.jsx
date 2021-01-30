import './Nav.css'
import Link from './Link'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link href="/" i="home">Início</Link>
            <Link href="/users" i="users">Usuários</Link>
        </nav>
    </aside>