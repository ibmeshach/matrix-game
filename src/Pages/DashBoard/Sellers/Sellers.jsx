import React from "react";
import sell1 from "../../../assets/Dashboard/Sellers/sell1.jpg";
import sell2 from "../../../assets/Dashboard/Sellers/sell2.jpg";
import sell3 from "../../../assets/Dashboard/Sellers/sell3.jpg";
import sell4 from "../../../assets/Dashboard/Sellers/sell4.jpg";
import "./Sellers.css";
import img1 from "../../../assets/Dashboard/img1.png";
import img2 from "../../../assets/Dashboard/img2.png";
import img3 from "../../../assets/Dashboard/img3.png";
import { AiFillStar } from "react-icons/ai";
import Media from "react-media";
import Sellers1 from "../sellers1/Sellers1";
import { BsInfoCircle } from "react-icons/bs";
import cod1 from "../../../assets/Home/Game/cod1.jpg";
import { FaUserTag } from "react-icons/fa";

const Sellers = () => {
  return (
    <div className="sellers__container">
      <div className="sellers__content">
        <Media queries={{ small: "(max-width: 576px)" }}>
          {(matches) =>
            matches.small ? (
              <div>
                <h1 className="small__h1">Top Sellers</h1>
                <Sellers1 />
              </div>
            ) : (
              <div className="sellers__top__content">
                <div className="sellers__top__sellers">
                  <div className="sellers__top__sellers__head">
                    <h1>Top Sellers</h1>
                  </div>

                  <div className="top__sellers">
                    <div className="top__seller">
                      <div className="top-seller-overlay"></div>
                      <img src={sell1} alt="" />
                      <div className="top__seller__top__content">
                        <div className="top__seller__left">
                          <img src={img1} alt="" />
                          <div className="left__info">
                            <p className="left__info__name">ibmeshach</p>
                            <p className="left__info__followers">
                              600 followers
                            </p>
                          </div>
                        </div>
                        <div className="top__seller__right">
                          <div className="top__seller__right__star">
                            <AiFillStar className="star__icon" />
                            <p> 4.8</p>
                          </div>
                          <div className="top__seller__right__button">
                            <p>follow</p>
                          </div>
                        </div>
                      </div>
                      <div className="top__seller__bottom__content">
                        <AiFillStar className="star1" />
                        <AiFillStar className="star2" />
                        <AiFillStar className="star3" />
                        <AiFillStar className="star4" />
                        <AiFillStar className="star5" />
                      </div>
                    </div>

                    <div className="top__seller">
                      <div className="top-seller-overlay"></div>
                      <img src={sell2} alt="" />
                      <div className="top__seller__top__content">
                        <div className="top__seller__left">
                          <img src={img2} alt="" />
                          <div className="left__info">
                            <p className="left__info__name">Kylax</p>
                            <p className="left__info__followers">
                              554 followers
                            </p>
                          </div>
                        </div>
                        <div className="top__seller__right">
                          <div className="top__seller__right__star">
                            <AiFillStar className="star__icon" />
                            <p> 4.8</p>
                          </div>
                          <div className="top__seller__right__button">
                            <p>follow</p>
                          </div>
                        </div>
                      </div>
                      <div className="top__seller__bottom__content">
                        <AiFillStar className="star1" />
                        <AiFillStar className="star2" />
                        <AiFillStar className="star3" />
                        <AiFillStar className="star4" />
                        <AiFillStar className="star5" />
                      </div>
                    </div>

                    <div className="top__seller">
                      <div className="top-seller-overlay"></div>
                      <img src={sell3} alt="" />
                      <div className="top__seller__top__content">
                        <div className="top__seller__left">
                          <img src={img3} alt="" />
                          <div className="left__info">
                            <p className="left__info__name">Antisocial</p>
                            <p className="left__info__followers">
                              432 followers
                            </p>
                          </div>
                        </div>
                        <div className="top__seller__right">
                          <div className="top__seller__right__star">
                            <AiFillStar className="star__icon" />
                            <p> 4.8</p>
                          </div>
                          <div className="top__seller__right__button">
                            <p>follow</p>
                          </div>
                        </div>
                      </div>
                      <div className="top__seller__bottom__content">
                        <AiFillStar className="star1" />
                        <AiFillStar className="star2" />
                        <AiFillStar className="star3" />
                        <AiFillStar className="star4" />
                        <AiFillStar className="star5" />
                      </div>
                    </div>

                    <div className="top__seller">
                      <div className="top-seller-overlay"></div>
                      <img src={sell4} alt="" />
                      <div className="top__seller__top__content">
                        <div className="top__seller__left">
                          <img src={img3} alt="" />
                          <div className="left__info">
                            <p className="left__info__name">finbond</p>
                            <p className="left__info__followers">
                              300 followers
                            </p>
                          </div>
                        </div>
                        <div className="top__seller__right">
                          <div className="top__seller__right__star">
                            <AiFillStar className="star__icon" />
                            <p> 4.8</p>
                          </div>
                          <div className="top__seller__right__button">
                            <p>follow</p>
                          </div>
                        </div>
                      </div>
                      <div className="top__seller__bottom__content">
                        <AiFillStar className="star1" />
                        <AiFillStar className="star2" />
                        <AiFillStar className="star3" />
                        <AiFillStar className="star4" />
                        <AiFillStar className="star5" />
                      </div>
                    </div>

                    <div className="top__seller">
                      <div className="top-seller-overlay"></div>
                      <img src={sell4} alt="" />
                      <div className="top__seller__top__content">
                        <div className="top__seller__left">
                          <img src={img3} alt="" />
                          <div className="left__info">
                            <p className="left__info__name">Pandora</p>
                            <p className="left__info__followers">
                              111 followers
                            </p>
                          </div>
                        </div>
                        <div className="top__seller__right">
                          <div className="top__seller__right__star">
                            <AiFillStar className="star__icon" />
                            <p> 4.8</p>
                          </div>
                          <div className="top__seller__right__button">
                            <p>follow</p>
                          </div>
                        </div>
                      </div>
                      <div className="top__seller__bottom__content">
                        <AiFillStar className="star1" />
                        <AiFillStar className="star2" />
                        <AiFillStar className="star3" />
                        <AiFillStar className="star4" />
                        <AiFillStar className="star5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </Media>
      </div>
      <div className="sellers__plans">
        <div className="sellers__plans__head">
          <h1>Want To Become a Seller?</h1>
          <p>Register Now!!!</p>
        </div>

        <div className="sellers__plans__cards">
          <div className="sellers__plans__card">
            <div className="sellers__plans__card__top">
              <p>BASIC</p>
              <BsInfoCircle className="plans__info__icon" />
            </div>
            <div className="sellers__plans__card__bottom">
              <p className="plans__text">Become a seller</p>
              <p className="plans__price">$11 / mo</p>
            </div>
          </div>

          <div className="sellers__plans__card">
            <div className="sellers__plans__card__top">
              <p>PRO</p>
              <BsInfoCircle className="plans__info__icon" />
            </div>
            <div className="sellers__plans__card__bottom">
              <p className="plans__text">Become a seller</p>
              <p className="plans__price">$21 / mo</p>
            </div>
          </div>

          <div className="sellers__plans__card">
            <div className="sellers__plans__card__top">
              <p>PREMIUM</p>
              <BsInfoCircle className="plans__info__icon" />
            </div>
            <div className="sellers__plans__card__bottom">
              <p className="plans__text">Become a seller</p>
              <p className="plans__price">$41 / mo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="new__sellers__table">
        <div className="seller__container__sellers__left">
          <h1 className="text-xl">New Sellers</h1>

          <div className="seller__container__sellers__list border-b-2 border-gray-400 p-1">
            <img src={cod1} alt="" />
            <p className="flex items-center text-white gap-1">
              <FaUserTag style={{ borderColor: "white" }} />
              Osas
            </p>
            <p className="gap-1">
              Sold: <span className="text-orange-500 ">8</span>
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <AiFillStar className="seller__star" />
              4.5{" "}
            </p>
            <button
              type="button"
              class="cursor-pointer hover:bg-orange-900 text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="seller__container__sellers__list border-b-2 border-gray-400 p-1">
            <img src={cod1} alt="" />
            <p className="flex items-center text-white gap-1">
              <FaUserTag style={{ borderColor: "white" }} />
              Osas
            </p>
            <p className="gap-1">
              Sold: <span className="text-orange-500 ">8</span>
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <AiFillStar className="seller__star" />
              4.5{" "}
            </p>
            <button
              type="button"
              class="cursor-pointer hover:bg-orange-900 text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="seller__container__sellers__list border-b-2 border-gray-400 p-1">
            <img src={cod1} alt="" />
            <p className="flex items-center text-white gap-1">
              <FaUserTag style={{ borderColor: "white" }} />
              Osas
            </p>
            <p className="gap-1">
              Sold: <span className="text-orange-500 ">8</span>
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <AiFillStar className="seller__star" />
              4.5{" "}
            </p>
            <button
              type="button"
              class="cursor-pointer hover:bg-orange-900 text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="seller__container__sellers__list border-b-2 border-gray-400 p-1">
            <img src={cod1} alt="" />
            <p className="flex items-center text-white gap-1">
              <FaUserTag style={{ borderColor: "white" }} />
              Osas
            </p>
            <p className="gap-1">
              Sold: <span className="text-orange-500 ">8</span>
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <AiFillStar className="seller__star" />
              4.5{" "}
            </p>
            <button
              type="button"
              class="cursor-pointer hover:bg-orange-900 text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
          <div className="seller__container__sellers__list border-b-2 border-gray-400 p-1">
            <img src={cod1} alt="" />
            <p className="flex items-center text-white gap-1">
              <FaUserTag style={{ borderColor: "white" }} />
              Osas
            </p>
            <p className="gap-1">
              Sold: <span className="text-orange-500 ">8</span>
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <AiFillStar className="seller__star" />
              4.5{" "}
            </p>
            <button
              type="button"
              class="cursor-pointer hover:bg-orange-900 text-white bg-[#f24902]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-[#f24902] dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
