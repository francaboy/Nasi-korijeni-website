import React from "react";

const GoogleMap = () => {
  return (
    <section className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.4546608405394!2d17.203987590463473!3d44.791922056158015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e03aff2c123b7%3A0x48b5bf60c634d77a!2sKnjaza%20Milo%C5%A1a%2010e%2C%20Banja%20Luka%2078000!5e0!3m2!1sen!2sba!4v1701816138868!5m2!1sen!2sba"
        className="google-map__one"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default GoogleMap;
