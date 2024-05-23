import logo from './logo.svg';
import './App.css';
import ECDForm from './Pages/ECDForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
// If you are using date-fns v3.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ECDForm />
    </LocalizationProvider>
      
    </div>
  );
}

export default App;
