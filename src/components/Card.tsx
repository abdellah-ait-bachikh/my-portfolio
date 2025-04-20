"use client";
import { getDateDifference, getYear } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useTranslations } from "next-intl";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
const Card = ({
  img,
  label,
  date,
}: {
  img: string;
  label: string;
  date: string;
}) => {
  const t = useTranslations("pages.skills.card");
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  // Debounced visibility state
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  // Use IntersectionObserver as the primary detection method
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            controls.start({ opacity: 1, y: 0, scale: 1 });
          } else if (!entry.isIntersecting && isVisible) {
            setIsVisible(false);
            controls.start({ opacity: 0, y: 50, scale: 0.1 });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls, isVisible]);

  // Fallback scroll handler for fast scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set a new timeout to check visibility after scroll stops
      scrollTimeout.current = setTimeout(() => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const isInView =
          rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.1;

        if (isInView && !isVisible) {
          setIsVisible(true);
          controls.start({ opacity: 1, scale: 1 });
        } else if (!isInView && isVisible) {
          setIsVisible(false);
          controls.start({ opacity: 0, scale: 0.1 });
        }
      }, 100); // Adjust this delay as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [controls, isVisible]);

  return ( 
    <motion.div
    ref={cardRef}
    initial={{ opacity: 0, scale: 0.1 }}
    animate={controls}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    >
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
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content  border border-slate-600/30">
                <small className="badge">{getYear(date)}</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong dir="ltr">2 {t("description")}</strong>
                    </p>
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledWrapper>{" "}
    </motion.div>
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
    background-color: oklch(95.3% 0.051 180.801);
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
