import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import logoen from './imgassets/logoen.png';
import gifen from './imgassets/computerman.gif';

function App() {
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="App">
      {/* <p>Test</p>
      <Button variant="primary">Primary Button</Button> */}

    <nav class="navbar navbar-expand-lg" style={{ backgroundColor: 'white' }}>
      <div class="container-fluid" style={{ backgroundColor: 'white' }}>
        <a class="navbar-brand" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" style={{ color: '#3C70F6' }}><img src={logoen} alt='e' width={29}></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.mdnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-5">
              <a class="nav-link active" aria-current="page" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" style={{ color: '#3C70F6' }}>Home</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" style={{ color: '#3C70F6' }}>About</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" style={{ color: '#3C70F6' }}>Services</a>
            </li>
            <li class="nav-item ms-4">
              <a class="nav-link" href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md" style={{ color: '#3C70F6' }}>Contacts</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <Button class="btn btn-outline-success" type="submit">Search</Button>
          </form>
        </div>
      </div>
    </nav>

      <div className='textandimg'>
        <div className="flex-container">
          <div className="left-content">
        <h2 style={{ color: '#3C70F6', marginBottom: 29, marginTop: 80 }}>Innovating Technologies</h2>
        <p style={{ width: 500 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <h4 style={{ width: 600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
        <h3 className="e" style={{ fontSize: 15, color: 'grey', marginLeft: 10, marginTop: 40 }}>OUR SERVICES</h3>

        <div className='eno'>
      <div className="serv-cards">
        <div id='s-card'>
          <div className='s-card'>
            <h4 style={{ padding: 20, fontSize: 15 }}>FAST DELIVERY</h4>
            <img width="50" src="https://img.icons8.com/ios/100/EBEBEB/truck--v1.png" alt="truck--v1"/>
          </div>
        </div>

        <div id='s-card'>
          <div className='s-card'>
            <h4 style={{ padding: 20, fontSize: 15 }}>TOP SERVICES</h4>
            <img width="50" src="https://img.icons8.com/ios/50/EBEBEB/sparkling.png" alt="sparkling"/>
          </div>
        </div>

        <div id='s-card'>
          <div className='s-card'>
            <h4 style={{ padding: 20, fontSize: 15 }}>BEST QUALITY</h4>
            <img width="50" src="https://img.icons8.com/ios/50/EBEBEB/cardboard-box.png" alt="cardboard-box"/>
          </div>
        </div>
      </div>
        </div>
        </div>

        <br></br>

        <div className='imageb'>
            <img src={gifen} alt='ejwi' width={630}></img>
          </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary d-flex justify-content-start left-content" style={{ marginTop: 50 }}>Learn more</button>

      <div className='stripe'>
        <div className='stripecontent'>

          <h4 style={{ padding: 20, fontSize: 15, color: 'white' }}>OUR LOCATIONS</h4>
          <div className='stripemap'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359536.97792582423!2d-76.1298960911324!3d45.25016591890609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20Ontario%2C%20Canada!5e0!3m2!1sit!2sit!4v1697564035304!5m2!1sit!2sit" title="map" width="593" height="315" style={{ marginTop: 50 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='recti' style={{ height: 330, width: 2, background: 'white', borderRadius: 20, margin: 40 }}></div>

          <div className='stripetext'>
            <p style={{ width: 380, textAlign: 'left', marginTop: 60, color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>

            <br></br>
            <br></br>
            <br></br>

          <div className='stripebutton'>
            <h5>Learn more</h5>
          </div>
          </div>

        </div>
      </div>

      
      </div>
  );
}

export default App;
