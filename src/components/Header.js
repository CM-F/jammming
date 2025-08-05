import './Header.css';

function Header() {
  return (
    <>
      <header class="main-title">
          <h1 class="company-name">CLEMENT<span class="seven">MARTIN</span><span class="nine">FASQUEL</span></h1>
          <button class="hamburger" aria-label="Menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
          </button>
          <nav class="nav">
              <ul>
                  <li><a href="./index.html">About me</a></li>
                  <li><a href="./index.html#skills">Skills</a></li>
                  <li><a href="./index.html#projects">Projects</a></li>
                  <li><a href="./index.html#contact">Contact</a></li>
              </ul>
          </nav>
      </header>
    </>
  );
}

export default Header;