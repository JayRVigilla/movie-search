import './Links.css';

function Links({ linkArr }) {
  const renderLinks = (links) =>
    links.map((link, idx) =>
      <li key={idx}>
        <a href={`${link.href}`}>
          {link.label}
        </a>
      </li>)

  return (
    <div className="Links">
      <ul>
        {renderLinks(linkArr)}
      </ul>
    </div>
  );
}

export default Links;
