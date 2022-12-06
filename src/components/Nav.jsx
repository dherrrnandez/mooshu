import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header>
            <nav>
                <Link id="logo" to="/">mooshu.</Link>
                <Link to="/">home</Link>
                <Link to="/search">search</Link>
            </nav>
        </header>
    )
}

export default Nav