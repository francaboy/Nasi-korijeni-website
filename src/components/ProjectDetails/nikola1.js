import projectDetails from "@/data/projectDetails";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ReactPlayer from "react-player";

const { title, texts, name, category, date, socials } = projectDetails;
const videoUrl = "https://www.youtube.com/watch?v=KGJybrtmNy8";

const Nikola1 = () => {
  return (
    <section className="project-details">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="project-details__video">
            <ReactPlayer url={videoUrl} controls={true} width="1170px" height="546px" />
            </div>
          </Col>
        </Row>
        <div className="project-details__content">
          <Row>
            <Col xl={8} lg={7}>
              <div className="project-details__content-left">
              <p className="project-details__content-text-1">
                    Vođeni idejom očuvanja kulturne baštine i tradicije kroz različite kulturne događaje i festivale, a nakon uspješnih organizovanja božićnih koncerata i narodnih zborova koji su okupili ogroman broj ljudi, došli smo na ideju da organizujemo veliki narodni festival – Zavičaj fest, u srcu našeg grada, na tvrđavi Kastel.
                    </p>
                    <p className="project-details__content-text-1"> U četvrtak, 8. Avgusta, festival će otvoriti velika regionalna zvjezda Nikola Rokvić, a program će upotpuniti višegodišnji osvajač najprestižnijih nagrada na najvećem saboru trubača u Guči, Dejan Petrović sa Big bendom.
<br />
Budite dio jedinstvenog muzičkog događaja koji se po prvi put organizuje na ovim prostorima. Sačuvaj svoje korijene!
<br />
Vidimo se na Kastelu!

                  </p>
                <div className="project-details__cta">
                  <a 
                    href="https://gigstix.ba/event/zavicaj-fest-nikola-rokvic-banja-luka-08-avgust-2024/" 
                    className="cta-button"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Купи карту
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={5}>
              <div className="project-details__content-right">
                <div className="project-details__details-box">
                  <div className="project-details__details-info">
                    <div className="project-details__details-info-single">
                      <h5 className="project-details__details-info-client">
                        Догађај:
                      </h5>
                      <p className="project-details__details-info-name">
                        {name}
                      </p>
                    </div>
                    <div className="project-details__details-info-single">
                      <h5 className="project-details__details-info-client">
                        Категорија:
                      </h5>
                      <p className="project-details__details-info-name">
                        {category}
                      </p>
                    </div>
                    <div className="project-details__details-info-single">
                      <h5 className="project-details__details-info-client">
                        Датум:
                      </h5>
                      <p className="project-details__details-info-name">
                        {date}
                      </p>
                    </div>
                  </div>
                  <div className="project-details__details-social-list">
                    {socials.map(({ id, icon, href }) => (
                      <a key={id} href={href}>
                        <i className={icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xl={12}>
            <div className="project-details__pagination-box">
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nikola1;
