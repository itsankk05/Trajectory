import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ marginTop: "20px", backgroundColor: "#333333" }}
      >
        {/* <!-- Grid container --> */}
        <div className="container pt-4" style={{ display: "flex" }}>
          {/* <!-- Section: Social media --> */}
          <div style={{ textAlign: "left" }}>
            Address:
            <br />
            SRM Institue Of Science And Technology,
            <br /> SRM Nagar, Kattankulathur - 603203 Chengalpattu District,
            Tamil Nadu.
          </div>
          <section className="mb-4" style={{ marginLeft: "auto" }}>
            {/* <!-- Facebook --> */}
            <div>
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.facebook.com/SRMUniversityOfficial"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://twitter.com/SRM_Univ"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.instagram.com/SRMUniversityOfficial/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* <!-- Linkedin --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.linkedin.com/company/srm-ist-chennai/"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <!-- Github --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.youtube.com/user/SRMeducation"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
        >
          Developed Under SRM University{" "}
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
