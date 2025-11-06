import React from "react";
import "./Part1.css";
import { ArrowUpRight, Search } from "lucide-react";

const Part1 = () => {
  return (
    <div className="hero">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">Logos</div>
        <div className="nav-center">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About Us</a>
          <a href="#">Recomended</a>
          <a href="#">JobCareer</a>
        </div>
        <div className="nav-right">
          <input type="text" placeholder="Search" />
          <Search className="search-icon" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <button className="top-badge">In today’s competitive world!</button>
          <h1>
            The Journey To <br /> A Fulfilling <br /> Career
          </h1>
          <p>
            A job career refers to the long-term professional journey of an
            individual, encompassing various roles, responsibilities, and
            experiences they undertake in their working life.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Find Your Job</button>
            <button className="btn-outline">Learn More</button>
          </div>

          <div className="profile-section">
            <div className="profile-images">
              <img src="https://i.pravatar.cc/50?img=1" alt="profile" />
              <img src="https://i.pravatar.cc/50?img=2" alt="profile" />
              <img src="https://i.pravatar.cc/50?img=3" alt="profile" />
              <img src="https://i.pravatar.cc/50?img=4" alt="profile" />
              <img src="https://i.pravatar.cc/50?img=5" alt="profile" />
            </div>
            <div className="profile-text">
              ⭐ 154K <br />
              <span>
                A job career refers to the long-term professional journey.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          {/* 🔲 Placeholder image */}
          <img src="https://st2.depositphotos.com/4153545/7960/i/450/depositphotos_79606560-stock-photo-young-business-woman-with-thumbs.jpg" alt="career" className="hero-img" />

          <div className="floating-card top-left">
            🌐 A job career <br /> <b>154K</b>
          </div>

          <div className="floating-card bottom-right">
            🔄 A job career refers to <br /> the long-term professional
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <ArrowUpRight size={20} />
              <div>
                <h3>154K</h3>
                <p>Assistant Job</p>
              </div>
            </div>

            <div className="stat-card">
              <ArrowUpRight size={20} />
              <div>
                <h3>20K</h3>
                <p>Free Course</p>
              </div>
            </div>

            <div className="stat-card">
              <ArrowUpRight size={20} />
              <div>
                <h3>154K</h3>
                <p>Alumni Job</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part1;
