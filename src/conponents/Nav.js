import PropTypes from 'prop-types';
import './Nav.css'

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                   
                </div>
            </nav>
        </div>
    )
}


export default NavBar

NavBar.prototype={
    title : PropTypes.string
}