import video from "../assets/video3.mp4";
import styles from "./About.module.css";
import { aboutText, ourMission, ourVision, ourValue } from "../constants";

const About = () => {

  return (
    <>
      <section id="about" className="bg-slate-50 lg:py-40 mt-3 mb-4 lg:mb-0">
        <div className="max-w-7xl m-auto lg:px-0 px-6 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <video muted controls className={`${styles.videoAbout} rounded-lg`}>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div className="w-full h-full py-6 md:p-4 ">
            <div>
              <div className="mb-8">
                <div>
                  <h3 className="text-sm md:text-lg text-sky-500 tracking-tight font-semibold uppercase">
                    welcome to autorepair
                  </h3>
                </div>
                <div>
                  <h2 className="mt-1 mb-3 text-slate-950 text-xl md:text-3xl font-bold tracking-wide capitalize">
                    We help more than 45 years serving customer car
                  </h2>
                </div>
                <div>
                  <p className="text-slate-600 tracking-tighter text-pretty text-base md:text-lg">
                    {aboutText}
                  </p>
                </div>
              </div>

              <div className="px-4">
                <div>
                  <div className="mb-4 text-lg">
                    <ul className="flex justify-between items-center">
                      <li className="bg-sky-500 px-3 py-1 rounded-sm">
                        <a
                          href="#!"
                          className={`font-medium text-sm tracking-wider text-white ${
                            activeOurs === mission && "bg-sky-600 text-white"
                          }`}
                          onClick={() => setActiveOurs("mission")}
                        >
                          Our Mission
                        </a>
                      </li>
                      <li className="hover:bg-sky-500 hover:text-white px-3 py-1 rounded-sm">
                        <a
                          href="#!"
                          className={`font-semibold text-sm tracking-wider`}
                        >
                          Our Vision
                        </a>
                      </li>
                      <li className="hover:bg-sky-500 hover:text-white px-3 py-1 rounded-sm">
                        <a
                          href="#!"
                          className={`font-semibold text-sm tracking-wider`}
                        >
                          Our Value
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-slate-600 tracking-tighter text-pretty text-base">
                      {(ourMission, ourVision, ourValue)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
