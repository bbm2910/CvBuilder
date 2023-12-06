import CVList from './CVList';
import MyDetails from './MyDetails';
import useFetch from './useFetch';
import ErrorPicture from '/public/error.png';

const Home = () => {
	const { data: cvs, isLoading, error } = useFetch('/data/db.json');

	return (
		<div className='home'>
			{error && (
				<div className='error'>
					<img src={ErrorPicture} alt='' className='error-picture' />
					<p>{error}</p>
				</div>
			)}
			{isLoading && (
				<div className='progress'>
					<div className='progress-value'></div>
				</div>
			)}
			<div className='home-container'>
				<MyDetails />
				{cvs && <CVList cvs={cvs} />}
			</div>
		</div>
	);
};

export default Home;
