import './Logo.css';

function Logo({ data }) {
  const { logoImg, logoText } = data;
  return (
    <div className="Logo">
      <a href="/">
        <img id="logoImg" src={`${logoImg.src}`} alt={`${logoImg.alt}`} />
        {logoText}
      </a>
    </div>
  );
}

export default Logo;
