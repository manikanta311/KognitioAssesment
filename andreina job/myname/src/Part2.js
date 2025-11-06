import React from "react";
import "./Part2.css";
import { ArrowUpRight } from "lucide-react"; // install using: npm i lucide-react

const Part2 = () => {
  const stats = [
    { title: "Job New Counter", percent: 90, color: "#7B61FF" },
    { title: "Job Networking", percent: 60, color: "#FF9D42" },
    { title: "Job Data Entry", percent: 95, color: "#7B61FF" },
    { title: "Job Marketing and Sales", percent: 25, color: "#FF9D42" },
  ];

  return (
    <section className="part2-container">
      <div className="part2-left">
        <h2 className="part2-title">Many People Spend Their Lives</h2>
        <p className="part2-description">
          A job career refers to the long-term professional journey of an
          individual, encompassing various roles, responsibilities, and
          experiences they undertake in their working life.
        </p>

        <div className="stats-card">
          {stats.map((item, index) => (
            <div className="stat-item" key={index}>
              <h4 className="stat-title">{item.title}</h4>
              <p className="stat-text">
                A job career refers to the long-term professional
              </p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${item.percent}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="part2-right">
        <div className="image-box img1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpi7rgk5k3UFowc5fTv76CXzVKRGJkWVf2Zw&s"
            alt="person 1"
          />
          <div className="icon">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="image-box img2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNqjs_8MtCKnZEBkKOYalt6c1y8EIgX6tEei3qi1DfzexVXEUKNXtS52hahRWdkq_X3c&usqp=CAU"
            alt="person 2"
          />
          <div className="icon">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="image-box img3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2_3GQm6xrAUrdpb_nTltSR3eHUs-vmnycjJfK8vLU85Bls1kaZIvK7u66ChPT72jue0&usqp=CAU"
            alt="person 3"
          />
          <div className="icon">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part2;
