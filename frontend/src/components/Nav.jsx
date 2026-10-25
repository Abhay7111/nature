import '../Style/Nav/Nav.css'
import {NavLink} from 'react-router'

function nav() {
  return (
    <div className='nav_main'>
        <div className="brand">Abhay7111</div>
        <div className="quik_links">
            <NavLink to={'/'} className="link">Stories</NavLink>
            <NavLink to={'https://abhay7111.netlify.app/'} className="link">Portfolio</NavLink>
            <NavLink to={''} className="link">Contact</NavLink>
        </div>
    </div>
  )
}

export default nav
