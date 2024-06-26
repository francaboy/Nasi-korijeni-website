import projectDetails from "@/data/projectDetails";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ReactPlayer from "react-player";

const { title, texts, name, category, date, socials } = projectDetails;
const videoUrl = "https://www.youtube.com/watch?v=2-585zLEV00";

const Zorica1 = () => {
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
                <h3 className="project-details__content-title">ЗОРИЦА БРУНЦЛИК</h3>
                
                <p className="project-details__content-text-1">
                Вођени идејом очувања културне баштине и традиције кроз различите културне догађаје и фестивале, а након успјешних организовања божићних концерата и народних зборова који су окупили огроман број људи, дошли смо на идеју да организујемо велики народни фестивал – Завичај фест, у срцу нашег града, на тврђави Кастел.
                      </p>
                    <p className="project-details__content-text-1"> У петак, 9. Августа у госте нам долази најпознатији музички пар Зорица Брунцлик и Мирољуб Аранђеловић Кемиш, уз „краља“ хармонике, Борка Радивојевића, који ће наступити са својим оркестром Тигрови.
<br />
Будите дио јединственог музичког догађаја који се по први пут организује на овим просторима. Сачувај своје коријене!
<br />
Видимо се на Кастелу!

                  </p>
                
                <div className="project-details__cta">
                  <a 
                    href="https://gigstix.ba/event/zavicaj-fest-zorica-brunclik-banja-luka-09-avgust-2024/" 
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
                      9 Август, 2024
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

export default Zorica1;
