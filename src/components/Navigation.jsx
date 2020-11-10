import React from 'react';

function Navigation() {
  return (
    <nav className="nav flex flex-ai-c flex-jc-sb">
      <h4 className="nav-link">
        <a
          href="https://trello.com/b/uAOvTtiD/bluewom-case"
          target="_blank"
          rel="noopener noreferrer"
        >
          trello
        </a>
      </h4>
      <h2 className="nav-title">curren(t)cier</h2>
      <h4 className="nav-link">
        <a
          href="https://github.com/mat-karpowicz/currencier"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </h4>
    </nav>
  );
}

export default Navigation;
