import foto from "../assets/img/foto.jpg";

export const Home = () => {
  return (
    <div className="container-fluid bg-image p-3" id="bg">
      <div className="row">
        <div className="col"></div>
        <div className="col-lg-4 col-md-6">
          <div className="card shadow bg-dark rounded">
            <img src={foto} className="rounded-circle img-fluid m-5" alt="" />
            <div className="card-body text-center">
              <h5 className="card-title text-light">Luis Flores</h5>
              <p className="card-text text-light">Web developer</p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light rounded-circle mx-3 my-4"
                style={{ width: "50px", height: "50px" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/luis-david-flores-mart%C3%ADnez-aa2325228/")
                }
              >
                <i className="bi bi-linkedin"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-light rounded-circle mx-3 my-4"
                style={{ width: "50px", height: "50px" }}
                onClick={() =>
                  (window.location.href = "https://github.com/LuisFlores7247")
                }
              >
                <i className="bi bi-github"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
