import { useState } from 'react';
import './LouvoresList.css';
import { louvorService, apresentacaoService } from '../services/api';

export default function LouvoresList({ louvores, onLouvoresList, onRefresh }) {
  const [carregandoId, setCarregandoId] = useState(null);
  const [gerandoId, setGerandoId] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleDeletar = async (id) => {
    if (confirm('Tem certeza que deseja deletar este louvor?')) {
      try {
        setCarregandoId(id);
        await louvorService.deletar(id);
        setMensagem('Louvor deletado com sucesso! 🗑️');
        onRefresh();
        setTimeout(() => setMensagem(''), 3000);
      } catch (err) {
        setMensagem('Erro ao deletar louvor');
      } finally {
        setCarregandoId(null);
      }
    }
  };

  const handleGerarApresentacao = async (id, nome) => {
    try {
      setGerandoId(id);
      const response = await apresentacaoService.gerar(id);

      // Download automático
      const link = document.createElement('a');
      link.href = `http://localhost:3001${response.data.downloadUrl}`;
      link.download = `${nome.replace(/\s+/g, '_')}.pptx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setMensagem(`Apresentação "${nome}" gerada e baixada! 🎉`);
      setTimeout(() => setMensagem(''), 4000);
    } catch (err) {
      setMensagem('Erro ao gerar apresentação');
    } finally {
      setGerandoId(null);
    }
  };

  if (!louvores || louvores.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🎵</div>
        <h3>Nenhum louvor cadastrado</h3>
        <p>Comece adicionando um novo louvor no formulário acima!</p>
      </div>
    );
  }

  return (
    <div className="louvores-section">
      <h2>📋 Louvores Cadastrados</h2>

      {mensagem && <div className="alert alert-success">{mensagem}</div>}

      <div className="louvores-container">
        {louvores.map((louvor) => (
          <div key={louvor.id} className="louvor-card fade-in">
            <div className="card-header">
              <h3>{louvor.nome}</h3>
              {louvor.audio_filename && (
                <span className="badge badge-audio">🎧 Áudio</span>
              )}
            </div>

            <div className="card-body">
              <p className="cantor">
                <strong>Cantor:</strong> {louvor.cantor}
              </p>

              <div className="letra-preview">
                <strong>Prévia da letra:</strong>
                <p>{louvor.letra.substring(0, 100)}...</p>
              </div>

              <p className="criado-em">
                Criado em: {new Date(louvor.criado_em).toLocaleDateString('pt-BR')}
              </p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-secondary btn-small"
                onClick={() => handleGerarApresentacao(louvor.id, louvor.nome)}
                disabled={gerandoId === louvor.id}
              >
                {gerandoId === louvor.id ? '⏳ Gerando...' : '📊 Gerar Apresentação'}
              </button>

              <button
                className="btn btn-danger btn-small"
                onClick={() => handleDeletar(louvor.id)}
                disabled={carregandoId === louvor.id}
              >
                {carregandoId === louvor.id ? '⏳...' : '🗑️ Deletar'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
