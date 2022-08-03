import logo from '../img/logo.png'

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} className="logo--navbar"  />
            <p className="navbar--text">My travel journal</p>
        </div>
    )
}