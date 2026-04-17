import store from './Stores/FirstStore';
import { observer } from 'mobx-react-lite';

const App = observer(function App() {
	return (
		<div>
			<p>Count: {store.count}</p>
			<button onClick={() => store.increment()}>+</button>
		</div>
	);
});

export default App;
