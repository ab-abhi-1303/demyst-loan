import './App.css';
import {
  BrowserRouter as Router,
  Route,Routes,Navigate
} from 'react-router-dom';
import Home from './components/Home';
import LoanDetails from './components/LoanDetails';
import BalanceSheet from './components/BalanceSheet';
import Outcome from './components/Outcome';
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/loan-details' element={<LoanDetails />} />
        <Route path='/balance-sheet' element={<BalanceSheet />} />
        <Route path='/outcome' element={<Outcome />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  </>
  );
};

export default App;
