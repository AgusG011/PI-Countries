import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
// import ActivityCreate from './Components/ActivityCreate/ActivityCreate';
// import Detail from './Components/Detail/Detail';


function App() {
  return (
    <BrowserRouter>   
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path= '/home' component={Home}/>
          {/* <Route path='/activities'component={ActivityCreate} /> */}
          {/* <Route exact path="/home/:id" component={Detail}/> */}
        </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;
