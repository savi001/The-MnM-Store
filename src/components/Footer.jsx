import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short ">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started ?</h3>
            <h3>Talk to us Today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>The M n M Pvt Ltd</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
              nunc vel felis dictum dictum vel nec dui. Vivamus hendrerit leo
              enim, sagittis aliquet dolor consectetur et.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type={"email"} placeholder={"your e-mail"} />
              <input type={"submit"} value={"subscribe"} />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <FaTwitter className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <div>
              <p className="Contact">Call Us</p>
              <a href="tel:+919304146278"
              target={"_blank"} rel="noreferrer">
                <p >
                  <FaPhoneAlt className="contactIcon" /> +919304146278
                </p>
              </a>
            </div>
            <div>
              <p className="Contact">Whatsapp on </p>
              <a 
              href="https://api.whatsapp.com/send/?phone=%2B919304146278&text&type=phone_number&app_absent=0"
              // href="https://wa.me/+919304146278" 
              target={"_blank"} rel="noreferrer">
                <p >
                  <FaWhatsapp className="contactIcon" />
                   +919304146278
                </p>
              </a>
            </div>
          </div>
          
         
        </div>
        {/*last bottom footer */}
        <div className="footer-bottom--section">
            <hr/>
            <div className="container grid grid-two-column">
                <div><p> Copyright © {new Date().getFullYear()} . All Copy Rights Reversed</p>
                </div>
                <div>
                <a href="#"><p>TERMS & CONDITIONS</p></a>
                <a href="#"><p>PRIVACY POLICY</p></a>
                 </div>


            </div>


          </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  .contactIcon {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.3rem;
    padding-right:0.5rem;
  }
  .Contact {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 3rem;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
