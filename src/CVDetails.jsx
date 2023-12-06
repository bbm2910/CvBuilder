import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import ErrorPicture from '/public/error.png';

const CVDetails = () => {
	const { id } = useParams();
	const {
		data: cv,
		error,
		isLoading,
	} = useFetch('http://localhost:8000/cvs/' + id);
	const navigate = useNavigate();

	const handleDelete = () => {
		fetch('http://localhost:8000/cvs/' + cv.id, {
			method: 'DELETE',
		}).then(() => {
			navigate('/');
		});
	};

	return (
		<div className='cv-details'>
			{' '}
			{isLoading && (
				<div className='progress'>
					<div className='progress-value'></div>
				</div>
			)}
			{error && (
				<div className='error'>
					<img src={ErrorPicture} alt='' className='error-picture' />
					<p>{error}</p>
				</div>
			)}
			{cv && (
				<article>
					<h1>
						{cv.personalInformation.firstName}{' '}
						{cv.personalInformation.lastName}
					</h1>
					<div className='personal-info'>
						<h3>{cv.personalInformation.jobTitle}</h3>
						<p>{cv.personalInformation.email}</p>
						<p>{cv.personalInformation.address}</p>
						<p>{cv.personalInformation.phone}</p>
					</div>
					{cv.education && (
						<div className='education-preview'>
							<h2>Education</h2>
							{cv.education.map((education, index) => (
								<div key={index} className='education-school'>
									<p className='degree-name'>
										{education.degree}
									</p>
									<p className='school-name'>
										{' '}
										- {education.school}
									</p>
								</div>
							))}
						</div>
					)}
					{cv.workExperience && (
						<div className='workExperience-preview'>
							<h2>Work experience</h2>
							{cv.workExperience.map((workExperience, index) => (
								<div
									key={index}
									className='workExperience-details'
								>
									<p className='workExperience-dates'>
										{' '}
										from {workExperience.startDate} to{' '}
										{workExperience.endDate
											? workExperience.endDate
											: 'Present'}
									</p>
									<p className='workExperience-position'>
										{workExperience.position} at{' '}
										{workExperience.company}
									</p>
									<p>{workExperience.responsibilities}</p>
								</div>
							))}
						</div>
					)}
					{cv.skills && (
						<div className='skills-preview'>
							<h2>Skills</h2>
							<ul>
								{cv.skills.map((skill, index) => (
									<li key={index}>{skill}</li>
								))}
							</ul>
						</div>
					)}
					{cv.languages && (
						<div className='languages-preview'>
							<h2>Languages</h2>
							<ul>
								{cv.languages.map((language, index) => (
									<li key={index}>{language}</li>
								))}
							</ul>
						</div>
					)}
					{cv.interests && (
						<div className='interests-preview'>
							<h2>Interests</h2>
							<ul>
								{cv.interests.map((interest, index) => (
									<li key={index}>{interest}</li>
								))}
							</ul>
						</div>
					)}
					<button onClick={handleDelete} className='delete-btn'>
						Delete
					</button>
				</article>
			)}
		</div>
	);
};

export default CVDetails;
