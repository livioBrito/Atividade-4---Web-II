import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-container">
        <img src="/imagens/fb.png" alt="Facebook" />
        <img src="/imagens/ig.png" alt="Instagram" />
        <img src="/imagens/tw.png" alt="Twitter" />
      </div>
      
      <div className="fundo-container">
        <img className="fundo" src="/imagens/fundo.png" alt="Footer"/>
      </div>

      <div className="desenvolvido-por">
        Desenvolvido por autor
      </div>
    </footer>
  );
}

export default Footer;
