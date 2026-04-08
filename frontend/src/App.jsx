import { useState, useEffect } from 'react';
import Header from './components/Header';
import FormadoAcesso from './components/FormadoAcesso';
import LouvoresList from './components/LouvoresList';
import { louvorService } from './services/api';
import './styles/global.css';
import './App.css';

export default function App() {
  const [louvores, setLouvores] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    carregarLouvores();
    // Verificar conexão com API
    verificarAPI();
  }, []);

  const verificarAPI = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/health');
      if (!response.ok) {
        setErro('⚠️ Aviso: Servidor backend não está respondendo corretamente');
      }
    } catch (err) {
      setErro('❌ Erro: Não foi possível conectar ao servidor. Certifique-se que o backend está rodando em http://localhost:3001');
    }
  };

  const carregarLouvores = async () => {
    try {
      setCarregando(true);
      const response = await louvorService.obterTodos();
      setLouvores(response.data);
      setErro('');
    } catch (err) {
      console.error('Erro ao carregar louvores:', err);
      setErro('Erro ao carregar louvores. Verifique a conexão com o servidor.');
    } finally {
      setCarregando(false);
    }
  };

  const handleLouvorCriado = (novoLouvor) => {
    setLouvores(prev => [novoLouvor, ...prev]);
  };

  return (
    <div className="app">
      <Header />

      <main className="app-main">
        {erro && <div className="alert alert-error" style={{ maxWidth: '1200px', margin: '0 auto 1rem', padding: '0 1rem' }}>
          {erro}
        </div>}

        <FormadoAcesso onLouvorCriado={handleLouvorCriado} />

        {carregando ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Carregando louvores...</p>
          </div>
        ) : (
          <LouvoresList
            louvores={louvores}
            onLouvoresList={setLouvores}
            onRefresh={carregarLouvores}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>🎵 Sistema de Louvores para Igrejas © 2024 - Desenvolvido com ❤️ para o reino</p>
      </footer>
    </div>
  );
}
