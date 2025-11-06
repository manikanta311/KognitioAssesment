import React from "react";
import "./Part4.css";

const Part4 = () => {
  return (
    <section className="part4-container">
      {/* TOP SECTION */}
      <div className="part4-top">
        {/* LEFT TEXT */}
        <div className="part4-left">
          <h2>
            Your Career Is <br /> Not Just About <br /> Making
          </h2>
          <p>
            A job career refers to the long-term professional journey of an
            individual, encompassing various roles, responsibilities, and
            experiences they undertake in their working life.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="part4-center">
          <img
            src="https://media.istockphoto.com/id/497683995/photo/smiling-woman-showing-copy-space.jpg?s=612x612&w=0&k=20&c=Q5EcDWbdXtUQTn2KB-VWDFyg4O8-tK8PAxVsyGqNg5U="
            alt="Career woman"
          />
        </div>

        {/* RIGHT TEXT ICONS */}
        <div className="part4-right">
          <div className="part4-item">
            <div className="part4-icon">➤</div>
            <div>
              <h4 className="part4-highlight-blue">Many people spend their lives</h4>
              <p>
                A job career refers to the long-term professional journey of an
                individual, encompassing various roles, responsibilities, and
                experiences.
              </p>
            </div>
          </div>

          <div className="part4-item">
            <div className="part4-icon">➤</div>
            <div>
              <h4 className="part4-highlight-purple">
                Your career is not just about making
              </h4>
              <p>
                A job career refers to the long-term professional journey of an
                individual, encompassing various roles, responsibilities, and
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM IMAGE GALLERY */}
      <div className="part4-gallery">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
          alt="Professional 1"
        />
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Professional 2"
        />
        <img
          src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0"
          alt="Professional 3"
        />
      </div>
    </section>
  );
};

export default Part4;
