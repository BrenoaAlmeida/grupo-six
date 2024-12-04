import RoutesApp from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'

function App() {  
  return(
    //Abrir e fechar um fragment para não ter nenhuma interferencia visual
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp/>
    </>
  )
}

export default App;
