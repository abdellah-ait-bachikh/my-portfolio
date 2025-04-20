"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = ({ img, label,year }: { img: string; label: string,year:string }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back   bg-white/10 rounded-4xl ">
            <div className="back-content bg-transparent  rounded-3xl p-3">
            <Image
              className="rounded-2xl"
              src={img}
              width={300}
              height={300}
              alt={label}
            />
            </div>
          </div>
          <div className="front ">
          <div className="img">
              <div className="circle">
              </div>
              <div className="circle" id="right">
              </div>
              <div className="circle" id="bottom">
              </div>
            </div>
            <div className="front-content  border-2 border-slate-600/50">
              <small className="badge">{year}</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>Spaguetti Bolognese</strong>
                  </p>
                  <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style={{mixBlendMode: 'normal'}} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset={0}  strokeMiterlimit={10} strokeLinejoin="miter" strokeLinecap="butt" strokeWidth={1} stroke="none" fillRule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" /></g></g></svg>
                </div>
                <p className="card-footer">
                  30 Mins &nbsp; | &nbsp; 1 Serving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 150px;
    height: 160px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
   
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 14px;
    overflow: hidden;
  }

  .back {
    width: 100%;

    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
        border-radius: 14px;

    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .title p {
    width: 50%;
  }

  .card-footer {
    color: #ffffff88;
    margin-top: 5px;
    font-size: 8px;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: oklch(91% 0.096 180.426);
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: oklch(95.3% 0.051 180.801);
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: oklch(77.7% 0.152 181.912);
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }
`;

export default Card;
