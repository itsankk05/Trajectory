import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ marginTop: "20px", backgroundColor: "#333333" }}
      >
        <div className="container pt-4" style={{ display: "flex" }}>
          <div style={{ textAlign: "left", flex: 1 }}>
            Address:
            <br />
            SRM Institute Of Science And Technology,
            <br /> SRM Nagar, Kattankulathur - 603203 Chengalpattu District,
            Tamil Nadu.
          </div>
          <div style={{ flex: 1 }}>
            {/* Embedded Google Map */}
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  height="150"
                  src="https://maps.google.com/maps?width=314&amp;height=150&amp;hl=en&amp;q=SRM%20University%20KTR&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  // eslint-disable-next-line
                ></iframe>
              </div>
            </div>
            {/* End of Embedded Google Map */}
          </div>
        </div>

        <section className="mb-4">
          <div style={{ marginLeft: "10px" }}>
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

        <div
          className="text-center text-light p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            color: "white",
          }}
        >
          Developed Under SRM University
        </div>
      </footer>
    </div>
  );
}
