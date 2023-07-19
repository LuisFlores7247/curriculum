export const About = () => {
  const technologies = [
    {
      iconName: "fa-solid fa-c fa-2xl",
      skill: 4,
      name: "ANSI C",
    },
    {
      iconName: "fa-solid fa-code fa-2xl",
      skill: 4,
      name: "C++",
    },
    {
      iconName: "fa-brands fa-java fa-2xl",
      skill: 3,
      name: "JAVA",
    },
    {
      iconName: "fa-brands fa-python fa-2xl",
      skill: 2,
      name: "PYTHON",
    },
    {
      iconName: "fa-brands fa-html5 fa-2xl",
      skill: 4,
      name: "HTML",
    },
    {
      iconName: "fa-brands fa-css3-alt fa-2xl",
      skill: 3,
      name: "CSS",
    },
    {
      iconName: "fa-brands fa-react fa-2xl",
      skill: 1,
      name: "REACT",
    },
    {
      iconName: "fa-solid fa-database fa-2xl",
      skill: 4,
      name: "MYSQL",
    },
  ];
  const generateCircles = (skill) => {
    const solidCircles = skill;
    const regularCircles = 5 - solidCircles;
    const circles = [];

    for (let i = 0; i < solidCircles; i++) {
      circles.push(
        <i key={`solid-${i}`} className="fa-solid fa-circle mx-1"></i>
      );
    }

    for (let i = 0; i < regularCircles; i++) {
      circles.push(
        <i key={`regular-${i}`} className="fa-regular fa-circle mx-1"></i>
      );
    }

    return circles;
  };
  return (
    <main className="container">
      <div className="bg-body-tertiary p-5 rounded mt-3 my-3">
        <h1 className="text-center mb-3">About me</h1>
        <p className="lead text-break">
          Hi, I'm Luis Flores, I'm currently a third semester student in the
          Computer Systems Engineering program. I am a computer technician,
          where my main languages are C, C++, and Java in conjunction with
          relational databases such as MYSQL. I also have knowledge in the
          development of web pages with HTML5, CSS, JAVASCRIPT and I am
          currently learning REACT JS.
        </p>
        <p className="lead text-break">
          I have participated in web projects such as a work stress survey made
          for the company called "EMSA", as well as some projects during my high
          school, which would be a real estate website and another one about the
          catastrophe in Pripyat. In the case of graphical interfaces, I have
          worked with some CRUD made mostly in Java and some others in C and
          C++.
        </p>
        <h1 className="text-center mb-3">Technologies</h1>
        <div className="container">
          <div class="row">
            {technologies.map((technology, index) => (
              <div class="col-md-4 mb-3">
                <div
                  key={index}
                  className="card text-light text-center bg-dark py-3 rounded"
                >
                  <div className="card-body">
                    <span
                      className={technology.iconName + "mb-5"}
                      style={{ color: "#ffffff", fontSize: "2rem" }}
                    ></span>
                    <h5>{technology.name}</h5>
                    {generateCircles(technology.skill)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
