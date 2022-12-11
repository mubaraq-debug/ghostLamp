import logo from './ghostlogo.png';
import { Logo } from './styles/header';

const Header = () => {
    return ( 
        <>
            <Logo> <img src={logo} alt="ghostLogo" /></Logo>
        </>
     );
}
 
export default Header;