import { Col, Row } from "react-bootstrap";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCcMastercard,
  faCcVisa,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import {Link} from 'react-router-dom';

const Footer = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size={"lg"} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size={"lg"} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} size={"lg"} />;
  const instagtamIcon = <FontAwesomeIcon icon={faInstagram} size={"lg"} />;
  const pinterestIcon = <FontAwesomeIcon icon={faPinterest} size={"lg"} />;
  const xs = useMediaQuery({ query: "(max-width: 576px" });
  const mastercardIcon = <FontAwesomeIcon icon={faCcMastercard} size={"3x"} />;
  const visaIcon = <FontAwesomeIcon icon={faCcVisa} size={"3x"} />;

  const colStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="footer">
      <Row>
        <Col>
          <div className="col-inner">
            <div className="header">Contact us</div>
            <div className="content">
              <div className="footer-item">contact@yehagere.net</div>
              <div className="footer-item">+251 963 522 318</div>
              <div className="footer-item">Addis Ababa, Ethiopia</div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="col-inner">
            <div className="content">



            {/* <Link to="/about" style={{ color: "black" }}>
                    <div className="footer-link">About Adimera</div>
                  </Link> */}
                  <Link to="/privacypolicy" style={{ color: "black" }}>
                    <div className="footer-link">Privacy Policy</div>
                  </Link>
                  <Link to="/deliveryandreturn" style={{ color: "black" }}>
                    <div className="footer-link">
                      Delivery and Return Policy
                    </div>
                  </Link>
                  <Link to="/termsandconditions" style={{ color: "black" }}>
                    <div className="footer-link">Terms and Conditions</div>
                  </Link>
                  <Link to="/pricing" style={{ color: "black" }}>
                    <div className="footer-link">Pricing</div>
                  </Link>
                  <Link to="/faq" style={{ color: "black" }}>
                    <div className="footer-link">FAQ</div>
                  </Link>
                  


              {/* <div className="footer-link">Privacy Policy</div>
              <div className="footer-link">Delivery and Return Pollicy</div>
              <div className="footer-link">Terms and Conditions</div>
              <div className="footer-link">Pricing</div>
              <div className="footer-link">FAQ</div> */}
            </div>
          </div>
        </Col>
        {/* <Col>
          <div className="col-inner">
            <div className="header">Stay up to date</div>
            <div className="content">
              <form action="" className="form">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="form-control"
                />
                <textarea
                  name=""
                  id=""
                  
                  rows="2"
                  placeholder="Your message"
                  className="form-control"
                ></textarea>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="btn submit-btn"
                />
              </form>
            </div>
          </div>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <div className="col-inner">
            <div className="header">Connect with us</div>
            <div className="content">
              <div className="social-icons" style={{ display: "flex" }}>
                <a
                  href="https://www.facebook.com/ku.shlivestock/"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <div className="icon-item">
                    <div className="icon">{facebookIcon}</div>
                  </div>
                </a>
                <a href="https://twitter.com/KushLivestock" target="_blank" style={{ color: "black" }}>
                  <div className="icon-item">
                    <div className="icon">{twitterIcon}</div>
                  </div>
                </a>

                <a href="https://www.instagram.com/kushlivestock/" target="_blank" style={{ color: "black" }}>
                  <div className="icon-item">
                    <div className="icon">{instagtamIcon}</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/kushlivestock/" target="_blank" style={{ color: "black" }}>
                  <div className="icon-item">
                    <div className="icon">{linkedinIcon}</div>
                  </div>
                </a>

                <a href="https://www.pinterest.com/kushlivestock/" target="_blank" style={{ color: "black" }}>
                  {" "}
                  <div className="icon-item">
                    <div className="icon">{pinterestIcon}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div className="col-inner">
            {" "}
            <div className="header">We accept</div>
            <div className="content">
              {" "}
              <div
                className="payment-icons"
                style={
                  !xs ? { display: "flex", justifyContent: "flex-start" } : {}
                }
              >
                <div
                  className="icon"
                  style={{ width: "max-content", marginRight: ".55em" }}
                >
                  {mastercardIcon}
                </div>
                <div
                  className="icon"
                  style={{ width: "max-content", marginRight: ".55em" }}
                >
                  {visaIcon}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="all-right">
        &copy;2021 Kushlivestock . All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
