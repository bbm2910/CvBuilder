import { Link } from 'react-router-dom';
import Logo from '/public/logo.png';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img src={Logo} alt='' className='logo' />
			<p>CV Builder - React app</p>
			<div className='links'>
				<Link to='/'>Homepage</Link>
				<Link to='/create'>Create a new CV</Link>
			</div>
		</nav>
	);
};

export default Navbar;
