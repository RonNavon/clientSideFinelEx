import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CCMain from './ClassComponents/CCMain';
import CCMakePurchase from './ClassComponents/CCMakePurchase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={CCMain} exact/>
             <Route path="/MakePurchase" component={CCMakePurchase}/>
           </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}
export default App;
