
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { toast } from 'react-toastify'
import '../../styles.css'
import YoutubeVideo from '../../components/YoutubeVideo'

function Produto()
{
  const location = useLocation();
  const navigate = useNavigate();
  const [data , setData] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')  

  useEffect(() => {
    if (location.state && location.state.mostrarObrigado) {
      navigate(location.pathname, { replace: true });
      toast.success('Obrigado!', {toastId: 'CadastroConcluido'}
      );
    }
  }, [location.state, navigate]);
    
  const fetchData = async () => {
          try {
              const response = await axios.get(
                  'https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15',
                  {
                      headers: {
                          'user-token': '2A50C22E-7954-4C73-9CF9-F6D298C047A7',
                      },
                  }
              );
              setData(response.data.object[0]);    
          } catch (err) {
              setError(err.message || 'Erro ao obter dados.');
          } finally {
              setLoading(false);
          }
      };    
  fetchData();        


  if (loading || data.products == undefined) {
      return <div>Carregando...</div>;
  }

  if (error) {
      return <div>Erro: {error}</div>;
  }

  return (
      <div class="container">              
      <div class="textContainer">
        <h1 class="videoHeadline">
          {data.video_headline}
        </h1>
        <h2 class="videoSubHeadline">
          {data.video_sub_headline}
        </h2>
      </div>
          <YoutubeVideo videoUrl={data.video_url} />      
          <div class="espaco"></div>                
          <table>
            <tr>
              <td>Nome</td>
              <td>Preço</td>
              <td>Desconto</td>
              <td>Melhor escolha</td>
              <td>Frete</td>
              <td>Imagem</td>
              <td>Comprar</td>
            </tr>
            {data.products?.map((item) => {
              return(          
            <tr key={item.product_id}>
              <td>{item.name}</td>
              <td>R${item.price.toFixed(2)}</td>
              <td>R${item.discount.toFixed(2)}</td>
              <td>{item.best_choice ? "Sim" : "Não"}</td>
              <td>{item.freight}</td>
              <td><img src={item.image_url} alt={item.name} width="100" /></td>            
              <td>                                
                <Link to={`/produto/cadastrar/${item.product_id}`}>
                  <button>Comprar</button>
                </Link>
              </td>
            </tr>                    
            )
          })}   
          </table>        
      </div>
  );
}

export default Produto;