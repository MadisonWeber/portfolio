import React from "react";
import "../css/about.css";
import aboutphoto from "../photos/newme-op.jpg";
import FloatingIcons from "../components/FloatingIcons";
import SwitchMode from "../components/SwitchMode";

const AboutTwo = () => {
  return (
    <div>
      <div className="about__two__container">
        <h1>Madison Weber</h1>
        <div
          style={{
            border: "1px solid orange",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 16,
          }}
        >
          <img
            src={aboutphoto}
            alt="madison-weber"
            style={{
              height: 240,
              width: 240,
              objectFit: "contain",
              borderRadius: 12,
              border: "1px solid gainsboro",
              background: "#eeeeee",
            }}
          />
          <div
            style={{
              border: "1px solid red",
              flex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 6,
              padding: "16px 0px",
            }}
          >
            <div>
              <span className="about__two__question">Education:</span>{" "}
              <p style={{ fontWeight: 600, fontFamily: "apple-system" }}>
                University Of Guelph
              </p>
            </div>
            <div>
              <span className="about__two__question">Degree:</span>
              <p
                style={{
                  fontWeight: 600,
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
                }}
              >
                {" "}
                Bachelor of Commerce
              </p>
            </div>
            <div>
              <span className="about__two__question">Email:</span>{" "}
              <p style={{ fontWeight: 600, fontFamily: "apple-system" }}>
                madison.weber.dev@gmail.com
              </p>
            </div>
            <div>
              <span className="about__two__question">City of Residence:</span>{" "}
              <p style={{ fontWeight: 600, fontFamily: "--apple-system" }}>
                Toronto, Canada
              </p>
            </div>
            <div>
              <span className="about__two__question">Birthdate:</span>{" "}
              <p style={{ fontWeight: 600, fontFamily: "apple-system" }}>
                Dec/4/1991
              </p>
            </div>
          </div>
        </div>
        <div className="about__two__bottom">
          <h4 className="about-me-two">About Me</h4>
          <p className="details-paragraph-bottom">
            {" "}
            am a Business major who has recently found a strong passion for web
            development. When i began coding, i tried to learn everything i
            could about machine learning, but have recently found a home in
            front-end web development. I love the feeling of being able to
            create something i can use and interact with. My greatest skill is
            creating pixel-perfect responsive web-applications. I am committed
            to life-long learning in this field, and desire to learn more about
            UI design. When i'm not writing code i spend most of my time
            obsessing about my favourite hockey team
            <img
              className="leafs"
              src={require("../photos/leafs-icon.png")}
              alt=""
            />{" "}
            , or just hanging out with my girlfriend and my dog.{" "}
          </p>
        </div>
        <h4 className="fav-tech">My Favourite Tech</h4>
        <FloatingIcons />
      </div>
    </div>
  );
};

export default AboutTwo;
