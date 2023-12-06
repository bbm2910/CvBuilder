import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import CVDetails from './CVDetails';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar></Navbar>
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/create' element={<Create />} />
						<Route path='/cvs/:id' element={<CVDetails />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
