import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CadastrarCompraProduto() {
  const { product_id } = useParams();  // Pega o ID do produto da URL
  const navigate = useNavigate();  // Usado para navegar programaticamente para outra página
  
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [numeroDaRua, setNumeroDaRua] = useState('');
  const [rua, setRua] = useState('');
  const [distrito, setDistrito] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosUsuario = {
      name : nome,
      email : email,
      phone_number : numero,
      street_number : numeroDaRua,
      street : rua,
      district : distrito,
      city : cidade,
      state : estado,
      product_id: product_id,
    };

    try {
      setLoading(true);
      await axios.post(
        `https://api-candidate.ogruposix.com/buy/${product_id}`,
        dadosUsuario,
        {
          headers: { 'user-token': '2A50C22E-7954-4C73-9CF9-F6D298C047A7', }
        },
      );
      navigate('/produto', { state: { mostrarObrigado: true }});  // Redireciona para a página de produtos após o envio
    } catch (err) {
      setError('Erro ao cadastrar o produto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Formulário de Cadastro</h2>
    <table>
      <tbody>
        <tr>
          <td><label>Nome:</label></td>
          <td>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Email:</label></td>
          <td>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Telefone:</label></td>
          <td>
            <input
              type="tel"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Número da Rua:</label></td>
          <td>
            <input
              type="text"
              value={numeroDaRua}
              onChange={(e) => setNumeroDaRua(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Rua:</label></td>
          <td>
            <input
              type="text"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Bairro:</label></td>
          <td>
            <input
              type="text"
              value={distrito}
              onChange={(e) => setDistrito(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Cidade:</label></td>
          <td>
            <input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </td>
        </tr>
        <tr>
          <td><label>Estado:</label></td>
          <td>
            <input
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button type="submit">Confirmar</button>
  </form>
);
}

export default CadastrarCompraProduto;
