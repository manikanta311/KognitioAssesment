import React from "react";
import "./Part5.css";

const Part5 = () => {
  return (
    <section className="part5-container">
      <div className="part5-content">
        {/* LEFT SECTION */}
        <div className="part5-text">
          <h2>Your Career Is</h2>
          <p>
            A job career refers to the long-term professional journey of an individual,
            encompassing various roles, responsibilities, and experiences they undertake
            in their pursuit of success and growth.
          </p>

          <div className="part5-grid">
            <div className="part5-card">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="Professional News Job"
              />
              <div className="part5-overlay">Professional News/Job</div>
            </div>

            <div className="part5-card">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Professional Network"
              />
              <div className="part5-overlay">Professional Network</div>
            </div>

            <div className="part5-card">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Professional Network"
              />
              <div className="part5-overlay">Professional Network</div>
            </div>

            <div className="part5-card">
              <button className="part5-btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="part5-right">
          <h2>Recommended For You</h2>
          <p>
            A job career refers to the long-term professional journey of an
            individual, encompassing various roles and skills.
          </p>

          <div className="part5-recommendations">
            <div className="part5-reco-item">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Professional journey"
              />
              <div>
                <h4>Professional Journey</h4>
                <p>
                  A job career refers to the long-term professional journey of an
                  individual.
                </p>
              </div>
            </div>

            <div className="part5-reco-item">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Professional Jobs"
              />
              <div>
                <h4>Professional Jobs</h4>
                <p>
                  A job career refers to the long-term professional journey of an
                  individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part5;
