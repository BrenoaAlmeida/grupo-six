import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Header from './components/Header/Index'
import Erro from './pages/Erro';
import Produto from './pages/Produto/Index'
import CadastrarCompraProduto from './pages/Produto/CadastrarCompraProduto';



function RoutesApp(){
    return(        
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/produto" element={<Produto/>}/>
                <Route path="/produto/cadastrar/:product_id" element={<CadastrarCompraProduto/>} />
                <Route path="*" element={<Erro/>}/>                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;