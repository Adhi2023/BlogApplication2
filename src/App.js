import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import Signup from './Signup';
import Login from './Login';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className='content'>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/Create">
                <Create/>
              </Route>
              <Route path="/Signup">
                <Signup/>
              </Route>
              <Route path="/Login">
                <Login/>
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
            </div>
          </div>
    </Router>
  );
}

export default App;
