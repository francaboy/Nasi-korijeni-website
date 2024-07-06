import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const PageHeader = ({ page = "", title = "", parent = "" }) => {
  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        
      ></div>
      <Container>
        <div className="page-header__inner">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href="/" legacyBehavior>
                Почетна
              </Link>
            </li>{" "}
            {parent && (
              <li>
                <Link href={`/${parent.toLowerCase()}`} legacyBehavior>
                  {parent}
                </Link>
              </li>
            )}{" "}
            <li>{page || title}</li>
          </ul>
          <h2>{title || page}</h2>
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
