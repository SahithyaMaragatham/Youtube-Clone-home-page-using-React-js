import React from 'react';
import './App.css';
import { FiAlignJustify } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { ImEmbed } from "react-icons/im";
import { FaMusic } from "react-icons/fa";
import { PiSmileyWinkBold } from "react-icons/pi";
import { IoMdLaptop } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import image from './youtube.png'; 

function App() {
  const cardData = [
    { title: "Mr Beans Atros part 1", description: "Enjoy Mr. Bean’s signature humor in this episode full of quirky mishaps and hilarious antics. Watch as he navigates everyday situations in his own uniquely funny way!" },
    { title: "Mr Beans Atros part 2", description: "Enjoy Mr. Bean’s signature humor in this episode full of quirky mishaps and hilarious antics. Watch as he navigates everyday situations in his own uniquely funny way!" },
    { title: "Mr Beans Atros part 3", description: "Enjoy Mr. Bean’s signature humor in this episode full of quirky mishaps and hilarious antics. Watch as he navigates everyday situations in his own uniquely funny way!." },
    { title: "Mr Beans Atros part 4", description: "Enjoy Mr. Bean’s signature humor in this episode full of quirky mishaps and hilarious antics. Watch as he navigates everyday situations in his own uniquely funny way!" },
    { title: "Mr Beans Atros part 5", description: "Enjoy Mr. Bean’s signature humor in this episode full of quirky mishaps and hilarious antics. Watch as he navigates everyday situations in his own uniquely funny way!" },
    { title: "Mr Beans Atros part 6", description: "Enjoy Mr. Bean’s signature humor in this episode full of quirky mishaps and hilarious antics. Watch as he navigates everyday situations in his own uniquely funny way!" },

  ];

  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={image} alt="Youtube Logo" style={{ height: '80px' }} />
          </a>
          <form className="d-flex justify-content-center flex-grow-1" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="d-flex">
        <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem', height: '700px' }}>
          <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" title="Icon-only">
            <FiAlignJustify size={24} />
            <span className="visually-hidden">Icon-only</span>
          </a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a href="#" className="nav-link active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" title="Home">
                <IoMdHome size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Trending">
                <ImEmbed size={24} />
              </a>
            </li>
            <li className="nav-item" style={{color:"black"}}>
              <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Subscriptions">
                <FaMusic size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Library">
                <PiSmileyWinkBold size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" title="History">
                <IoMdLaptop size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Sports">
                <MdSportsCricket size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" title="More">
                <FaHistory size={24} />
              </a>
            </li>
          </ul>
        </div>

        <main className="container mt-3">
          <div className="row">
            {cardData.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card">
                  <iframe
                    width="100%"
                    height="215"
                    src="https://www.youtube.com/embed/R0OD5F-WO9A?si=qGqbHKGuSvP6-WHF"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated {index + 1} mins ago</small></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
