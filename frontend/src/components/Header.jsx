import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <span className="music-icon">🎵</span>
          <h1>Sistema de Louvores</h1>
        </div>
        <p className="header-subtitle">Gerador automático de apresentações em PowerPoint</p>
      </div>
    </header>
  );
}
