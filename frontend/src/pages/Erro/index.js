import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
           <h2>Ops parece que essa pagina nao existe!!</h2>
           <Link to="/produto">Produto</Link>
        </div>
    )
}

export default Erro;