import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		email: '',
		phone: '',
		address: '',
		jobTitle: '',
	});

	const [education, setEducation] = useState([
		{ degree: '', school: '', graduationYear: '' },
		{ degree: '', school: '', graduationYear: '' },
	]);

	const [workExperience, setWorkExperience] = useState([
		{
			position: '',
			company: '',
			startDate: '',
			endDate: '',
			responsibilities: ['', '', ''],
		},
		{
			position: '',
			company: '',
			startDate: '',
			endDate: '',
			responsibilities: ['', '', ''],
		},
	]);

	const [skills, setSkills] = useState([]);
	const [languages, setLanguages] = useState([]);
	const [certifications, setCertifications] = useState([
		{ name: '', issuedBy: '', year: '' },
		{ name: '', issuedBy: '', year: '' },
	]);

	const [interests, setInterests] = useState([]);

	const updateEducationField = (index, field, value) => {
		const updatedEducation = [...education];
		updatedEducation[index][field] = value;
		setEducation(updatedEducation);
	};

	const updateWorkExperienceField = (index, field, value) => {
		const updatedWorkExperience = [...workExperience];
		updatedWorkExperience[index][field] = value;
		setWorkExperience(updatedWorkExperience);
	};

	const updateCertificationField = (index, field, value) => {
		const updatedCertifications = [...certifications];
		updatedCertifications[index][field] = value;
		setCertifications(updatedCertifications);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const cv = {
			personalInformation: personalInfo,
			education: education.filter(
				(edu) => edu.degree !== '' && edu.school !== ''
			),
			workExperience: workExperience.filter(
				(exp) => exp.position !== '' && exp.company !== ''
			),
			skills,
			languages,
			certifications: certifications.filter(
				(cert) => cert.name !== '' && cert.issuedBy !== ''
			),
			interests,
		};
		setIsLoading(true);

		fetch('http://localhost:8000/cvs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cv),
		}).then(() => {
			console.log('new cv added');
			setIsLoading(false);
			navigate('/');
		});
	};

	return (
		<div className='create'>
			<form onSubmit={handleSubmit}>
				{/* Personal Information */}
				<div className='personal-info'>
					<h2>Personal Info</h2>
					<input
						placeholder='First Name'
						type='text'
						required
						value={personalInfo.firstName}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								firstName: e.target.value,
							})
						}
					/>
					<input
						placeholder='Last Name'
						type='text'
						required
						value={personalInfo.lastName}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								lastName: e.target.value,
							})
						}
					/>
					<input
						placeholder='Job Title'
						type='text'
						required
						value={personalInfo.jobTitle}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								jobTitle: e.target.value,
							})
						}
					/>
					<input
						placeholder='Email address'
						type='email'
						required
						value={personalInfo.email}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								email: e.target.value,
							})
						}
					/>
					<input
						placeholder='Phone number'
						type='number'
						required
						value={personalInfo.phone}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								phone: e.target.value,
							})
						}
					/>
					<input
						placeholder='Home address'
						type='text'
						required
						value={personalInfo.address}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								address: e.target.value,
							})
						}
					/>
				</div>
				{/* Add similar inputs for other personal information fields */}
				{/* ... */}

				{/* Education */}
				<div className='education'>
					<h2>Education</h2>
					{education.map((edu, index) => (
						<div key={index}>
							<input
								placeholder='Degree'
								type='text'
								required
								value={edu.degree}
								onChange={(e) =>
									updateEducationField(
										index,
										'degree',
										e.target.value
									)
								}
							/>
							<input
								placeholder='School'
								type='text'
								required
								value={edu.school}
								onChange={(e) =>
									updateEducationField(
										index,
										'school',
										e.target.value
									)
								}
							/>
							{/* Add similar inputs for other education fields */}
							{/* ... */}
						</div>
					))}
					<button
						onClick={() =>
							setEducation([
								...education,
								{ degree: '', school: '', graduationYear: '' },
							])
						}
					>
						Add more Education
					</button>
				</div>

				<div className='work-experience'>
					{/* Work Experience */}
					{workExperience.map((exp, index) => (
						<div key={index}>
							<h2>Work experience</h2>
							<input
								placeholder='Position'
								type='text'
								required
								value={exp.position}
								onChange={(e) =>
									updateWorkExperienceField(
										index,
										'position',
										e.target.value
									)
								}
							/>
							<input
								placeholder='Company'
								type='text'
								required
								value={exp.company}
								onChange={(e) =>
									updateWorkExperienceField(
										index,
										'company',
										e.target.value
									)
								}
							/>
							{/* Add similar inputs for other work experience fields */}
							{/* ... */}
						</div>
					))}
					<button
						onClick={() =>
							setWorkExperience([
								...workExperience,
								{
									position: '',
									company: '',
									startDate: '',
									endDate: '',
									responsibilities: ['', '', ''],
								},
							])
						}
					>
						Add more Work Experience
					</button>
				</div>

				<div className='skills'>
					{/* Skills */}
					<h2>Skills</h2>
					<input
						placeholder='Skills (comma separated)'
						type='text'
						value={skills.join(',')}
						onChange={(e) => setSkills(e.target.value.split(','))}
					/>
				</div>

				<div className='languages'>
					<h2>Languages</h2>
					{/* Languages */}
					<input
						placeholder='Languages (comma-separated)'
						type='text'
						value={languages.join(',')}
						onChange={(e) =>
							setLanguages(e.target.value.split(','))
						}
					/>
				</div>

				<div className='interests'>
					{/* Interests */}
					<h2>Interests</h2>
					<input
						placeholder='Interests (comma-separated)'
						type='text'
						value={interests.join(',')}
						onChange={(e) =>
							setInterests(e.target.value.split(','))
						}
					/>
				</div>

				{!isLoading && <button>Submit CV</button>}
				{isLoading && <button disabled>Adding CV...</button>}
			</form>
		</div>
	);
};

export default Create;
