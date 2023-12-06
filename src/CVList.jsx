import { Link } from 'react-router-dom';
import Card from '/public/card.jpeg';

const CVList = ({ cvs }) => {
	const title = 'Resume database';
	return (
		<div className='cv-list'>
			{' '}
			<h2 className='home-title'>{title}</h2>
			{cvs.map((cv) => (
				<div
					className='cv-preview'
					key={cv.id}
					style={{
						backgroundImage: `url(${Card})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				>
					{' '}
					<Link to={`/cvs/${cv.id}`}>
						{' '}
						<h2>
							{cv.personalInformation.firstName}{' '}
							{cv.personalInformation.lastName}
						</h2>
						<h3>{cv.personalInformation.jobTitle}</h3>
						<p>{cv.personalInformation.email}</p>
						<p>{cv.personalInformation.address}</p>
						<p>{cv.personalInformation.phone}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default CVList;
