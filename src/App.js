import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import Content from './components/Content/Content';

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<div className='App-inner'>
        <Sidebar />
				<Content />
        </div>
			</div>
		</div>
	);
}

export default App;
