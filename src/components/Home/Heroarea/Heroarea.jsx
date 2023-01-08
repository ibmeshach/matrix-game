import React, { useState, useEffect, useRef } from "react";
import "./Heroarea.css";
import { useNavigate } from "react-router-dom";
import TypeWriter from "typewriter-effect";

const Heroarea = (props) => {
  const navigate = useNavigate();
  // const images = [p3];

  // const images1 = [pa1];
  const delay = 3000;

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const bgImageStyle = {
    backgroundImage: `url(${props.bgImages[index]})`,
  };
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  //   "@media screen and (max-width: 1000px)": {
  //     backgroundImage: `url(${images1[0]})`,
  //     display: "none",
  //   },
  // };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.bgImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div style={bgImageStyle} className="heroarea__container">
      <div className="color-overlay"></div>
      <div className="heroarea__info">
        <div className="heroarea__header">
          <p className="heroarea__h1">
            Matrix games is a platform that provides a secure player to player
            trading experience for buyers and sellerd online for gaming
            products.
          </p>
          <p className="heroarea__p">
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Sell Gaming Accounts!",
                  "Buy Gaming Accounts!",
                  "Bid for Top Accounts!",
                  "Swaps deals!",
                  "And More!!!",
                ],
              }}
            />
          </p>
        </div>

        <div
          // style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/dash");
            setIsOpen(!isOpen);
            props.expandState(isOpen);
          }}
          className="enterbutton__div__heroarea"
        >
          <button className="enter__button__heroarea">
            <span className="button__text">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heroarea;
