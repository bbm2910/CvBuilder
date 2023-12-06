import { Link } from 'react-router-dom';

const MyDetails = () => {
	return (
		<div>
			<Link to={'https://github.com/bbm2910'} target='_blank'>
				<img src='/public/github.png' alt='' className='github-logo' />
			</Link>
		</div>
	);
};
export default MyDetails;
