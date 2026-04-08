import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * LOUVORES
 */

export const louvorService = {
  // Criar novo louvor
  criar: (dados, arquivo) => {
    const formData = new FormData();
    formData.append('nome', dados.nome);
    formData.append('cantor', dados.cantor);
    formData.append('letra', dados.letra);
    if (arquivo) {
      formData.append('audio', arquivo);
    }

    return api.post('/louvores', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  },

  // Obter todos
  obterTodos: () => api.get('/louvores'),

  // Obter por ID
  obterPorId: (id) => api.get(`/louvores/${id}`),

  // Atualizar
  atualizar: (id, dados) => api.put(`/louvores/${id}`, dados),

  // Deletar
  deletar: (id) => api.delete(`/louvores/${id}`)
};

/**
 * APRESENTAÇÕES
 */

export const apresentacaoService = {
  // Gerar apresentação
  gerar: (louvorId) => api.post(`/apresentacoes/${louvorId}/gerar`),

  // Obter apresentação
  obter: (louvorId) => api.get(`/apresentacoes/${louvorId}`),

  // Listar todas
  listarTodas: () => api.get('/apresentacoes')
};

export default api;
