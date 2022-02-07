import "./App.css";
import ProfilComponent from "./Profile/ProfilComponent";

function App() {
	return (
		<div className="App">
			<ProfilComponent
				fullName="Salim ZIDI"
				profession="js developper"
				bio="Bio Development AG is working towards compensating"
			/>
		</div>
	);
}

export default App;
