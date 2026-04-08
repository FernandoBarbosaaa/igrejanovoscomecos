import { useState } from 'react';
import './FormadoAcesso.css';
import { louvorService } from '../services/api';

export default function FormadoAcesso({ onLouvorCriado }) {
  const [formData, setFormData] = useState({
    nome: '',
    cantor: '',
    letra: ''
  });

  const [arquivo, setArquivo] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErro('');
  };

  const handleArquivoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setArquivo(file);
      setErro('');
    } else if (file) {
      setErro('Por favor, selecione um arquivo de áudio válido');
      setArquivo(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    try {
      if (!formData.nome.trim() || !formData.cantor.trim() || !formData.letra.trim()) {
        setErro('Por favor, preencha todos os campos obrigatórios');
        return;
      }

      const response = await louvorService.criar(formData, arquivo);

      setSucesso('Louvor criado com sucesso! 🎉');
      setFormData({ nome: '', cantor: '', letra: '' });
      setArquivo(null);

      // Limpar sucesso após 3 segundos
      setTimeout(() => setSucesso(''), 3000);

      // Notificar componente pai
      onLouvorCriado(response.data.louvor);

      // Limpar input de arquivo
      const fileInput = document.getElementById('audioInput');
      if (fileInput) fileInput.value = '';
    } catch (err) {
      setErro(err.response?.data?.error || 'Erro ao criar louvor');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <form className="form-louvor" onSubmit={handleSubmit}>
      <h2>➕ Adicionar Novo Louvor</h2>

      {erro && <div className="alert alert-error">{erro}</div>}
      {sucesso && <div className="alert alert-success">{sucesso}</div>}

      <div className="form-group">
        <label htmlFor="nome">Nome do Louvor *</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          placeholder="Ex: Graciosa Deus"
          maxLength="100"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cantor">Cantor/Banda *</label>
        <input
          id="cantor"
          type="text"
          name="cantor"
          value={formData.cantor}
          onChange={handleInputChange}
          placeholder="Ex: Bruna Olly"
          maxLength="100"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="letra">Letra Completa *</label>
        <textarea
          id="letra"
          name="letra"
          value={formData.letra}
          onChange={handleInputChange}
          placeholder="Cole aqui a letra completa do louvor..."
          rows="6"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="audioInput">Arquivo de Áudio (MP3, WAV, OGG)</label>
        <input
          id="audioInput"
          type="file"
          accept="audio/*"
          onChange={handleArquivoChange}
        />
        {arquivo && <p className="file-info">✓ {arquivo.name}</p>}
      </div>

      <button type="submit" className="btn btn-primary" disabled={carregando}>
        {carregando ? '⏳ Criando...' : '✨ Criar Louvor'}
      </button>
    </form>
  );
}
