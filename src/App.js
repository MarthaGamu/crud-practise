import store from './Stores/FirstStore';
import { observer } from 'mobx-react-lite';
import * as Styled from './styles/Mainpage.styles';

const App = observer(function App() {
	return (
		<div>
			<Styled.Navbar>
				<h1>MobX Counter</h1>
			</Styled.Navbar>
			<p>Count: {store.count}</p>
			<Styled.StyledButton onClick={() => store.increment()}>
				+
			</Styled.StyledButton>
		</div>
	);
});

export default App;
