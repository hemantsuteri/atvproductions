import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Things I’ve made trying to put my dent in the universe.
            </div>

            <div className="subtitle projects-subtitle">
              I've worked on a variety of projects over the years and I'm proud
              of the progress I've made. Many of these projects are open-source
              and available for others to explore and contribute to. If you're
              interested in any of the projects I've worked on, please feel
              free to check out the code and suggest any improvements or
              enhancements you might have in mind. Collaborating with others is
              a great way to learn and grow, and I'm always open to new ideas
              and feedback.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>

          {/* Video Section */}
          <div className="video-section">
            <h2>Featured Videos</h2>
            <div className="video-grid">
              {/* Video 1 */}
              <div className="video-thumbnail">
                <a href="https://drive.google.com/file/d/1tj6n6WIMIfaXpRDcVWmG3HPdEMQReoM5/view?usp=drive_link
" target="_blank" rel="noopener noreferrer">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uZikhae6-JsU0rKICtG_FHx0G5YBUJ_vL5DM5iQ4QbwwZ4qBAUK4j3QJBKxpH41I1y0&usqp=CAU
				  " alt="Video 1" />
                </a>
              </div>

              {/* Video 2 */}
              <div className="video-thumbnail">
                <a href="https://drive.google.com/file/d/1VjkhmcjyTEOgjAj9G0y3L8cPN4djTfBT/view?usp=sharing
" target="_blank" rel="noopener noreferrer">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uZikhae6-JsU0rKICtG_FHx0G5YBUJ_vL5DM5iQ4QbwwZ4qBAUK4j3QJBKxpH41I1y0&usqp=CAU
" alt="Video 2" />
                </a>
              </div>

              {/* Video 3 */}
              <div className="video-thumbnail">
                <a href="https://drive.google.com/file/d/1nqUqiuPOBUVnPMTMp2D_XpBtBbqFAh6x/view?usp=sharing
" target="_blank" rel="noopener noreferrer">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uZikhae6-JsU0rKICtG_FHx0G5YBUJ_vL5DM5iQ4QbwwZ4qBAUK4j3QJBKxpH41I1y0&usqp=CAU
" alt="Video 3" />
                </a>
              </div>

              {/* Video 4 */}
              <div className="video-thumbnail">
                <a href="https://drive.google.com/file/d/1cnqmlmwgy0jfo9S9b7QkPme-Ru-4umJp/view?usp=sharing
" target="_blank" rel="noopener noreferrer">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uZikhae6-JsU0rKICtG_FHx0G5YBUJ_vL5DM5iQ4QbwwZ4qBAUK4j3QJBKxpH41I1y0&usqp=CAU
" alt="Video 4" />
                </a>
              </div>

              {/* Video 5 */}
              <div className="video-thumbnail">
                <a href="https://drive.google.com/file/d/11-IAxPqRrlMI-etitu_qi8oGVL2PFe6b/view?usp=sharing
" target="_blank" rel="noopener noreferrer">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uZikhae6-JsU0rKICtG_FHx0G5YBUJ_vL5DM5iQ4QbwwZ4qBAUK4j3QJBKxpH41I1y0&usqp=CAU
" alt="Video 5" />
                </a>
              </div>

              {/* Video 6 */}
              <div className="video-thumbnail">
                <a href="https://drive.google.com/file/d/19t3R-n9fyccqcypYGG_lFEaRJFzkGffb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uZikhae6-JsU0rKICtG_FHx0G5YBUJ_vL5DM5iQ4QbwwZ4qBAUK4j3QJBKxpH41I1y0&usqp=CAU
" alt="Video 6" />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
