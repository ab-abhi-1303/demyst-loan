import {
  BrowserRouter as Router,
  Route,Routes,Navigate
} from 'react-router-dom';
import Home from './components/Home/Home';
import LoanDetails from './components/LoanDetails/LoanDetails';
import BalanceSheet from './components/BalanceSheet/BalanceSheet';
import Outcome from './components/Outcome/Outcome';
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
