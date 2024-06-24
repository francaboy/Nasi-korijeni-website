import SingleBlog from "@/components/BlogOne/SingleBlog";
import blogPage from "@/data/blogPage";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";

const BlogPage = () => {
  return (
    <section className="blog-page">
      <Container>
        <div className="blog-one__container">
          <div className="blog-one__single animated fadeInUp">
            <div className="blog-one__img">
              <Image src={require(`@/images/blog/blog-page-img-1.jpg`).default.src} alt="" />
              <Link href="/nikola-rokvic" legacyBehavior>
                <a>
                  <span className="blog-one__plus"></span>
                </a>
              </Link>
              <div className="blog-one__date">
                <p>8. Август</p>
              </div>
            </div>
            <div className="blog-content">
              <ul className="list-unstyled blog-one__meta">
                <li>
                  <Link href="/nikola-rokvic" legacyBehavior>
                    <a>
                      <i className="far fa-user-circle"></i> админ
                    </a>
                  </Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>
                  <Link href="/nikola-rokvic" legacyBehavior>
                    <a>
                      <i className="far fa-comments"></i> 0 Коментара
                    </a>
                  </Link>
                </li>
              </ul>
              <h3 className="blog-one__title">
                <Link href="/nikola-rokvic" legacyBehavior>
                  Никола Роквић
                </Link>
              </h3>
              <div className="blog-one__read-btn">
                <Link href="/nikola-rokvic" legacyBehavior>
                  Више детаља
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-one__single animated fadeInUp">
            <div className="blog-one__img">
              <Image src={require(`@/images/blog/blog-page-img-2.jpg`).default.src} alt="" />
              <Link href="/zorica-brunclik" legacyBehavior>
                <a>
                  <span className="blog-one__plus"></span>
                </a>
              </Link>
              <div className="blog-one__date">
                <p>9. Август</p>
              </div>
            </div>
            <div className="blog-content">
              <ul className="list-unstyled blog-one__meta">
                <li>
                  <Link href="/zorica-brunclik" legacyBehavior>
                    <a>
                      <i className="far fa-user-circle"></i> админ
                    </a>
                  </Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>
                  <Link href="/zorica-brunclik" legacyBehavior>
                    <a>
                      <i className="far fa-comments"></i> 0 Коментара
                    </a>
                  </Link>
                </li>
              </ul>
              <h3 className="blog-one__title">
                <Link href="/zorica-brunclik" legacyBehavior>
                  Зорица Брунцлик
                </Link>
              </h3>
              <div className="blog-one__read-btn">
                <Link href="/zorica-brunclik" legacyBehavior>
                  Више детаља
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-one__single animated fadeInUp">
            <div className="blog-one__img">
              <Image src={require(`@/images/blog/blog-page-img-3.jpg`).default.src} alt="" />
              <Link href="/baja-mali-knindza" legacyBehavior>
                <a>
                  <span className="blog-one__plus"></span>
                </a>
              </Link>
              <div className="blog-one__date">
                <p>10. Август</p>
              </div>
            </div>
            <div className="blog-content">
              <ul className="list-unstyled blog-one__meta">
                <li>
                  <Link href="/baja-mali-knindza" legacyBehavior>
                    <a>
                      <i className="far fa-user-circle"></i> админ
                    </a>
                  </Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>
                  <Link href="/baja-mali-knindza" legacyBehavior>
                    <a>
                      <i className="far fa-comments"></i> 0 Коментара
                    </a>
                  </Link>
                </li>
              </ul>
              <h3 className="blog-one__title">
                <Link href="/baja-mali-knindza" legacyBehavior>
                  Баја Мали Книнџа
                </Link>
              </h3>
              <div className="blog-one__read-btn">
                <Link href="/baja-mali-knindza" legacyBehavior>
                  Више детаља
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-sidebar__load-more text-center">
          <Link href="#" legacyBehavior>
            <a className="thm-btn blog-sidebar__load-more-btn">
              Учитајте још догађаја
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
