import { Routes, Route } from "react-router-dom"
import Media1 from './Media1';
import Login from './Login';
import Body from './Body';
import About from './About';
import Event1 from './Event1';
const App = () => {
return (
    <Routes>
		 <Route path="/" element={ <Body/> } />
		 <Route path="Event" element={ <Event1/> } />
		 <Route path="Media" element={ <Media1/> } />
		 <Route path="About" element={ <About/> } />
		 <Route path="Login" element={ <Login/> } />
		</Routes>

)
}

export default App;