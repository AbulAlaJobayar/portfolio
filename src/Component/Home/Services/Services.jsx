import Container from "../../Container";
import image1 from "../../../assets/web-design.png";
import image2 from "../../../assets/code.png";
import image3 from "../../../assets/library.png";
import image4 from "../../../assets/social.png";

const Services = () => {
  return (
    <>
      <Container>
        <section id="services" className="my-20">
          <div className="text-center">
            <h3 className="text-4xl font-medium text-[#ff6900]">
              Services I Am Providing
            </h3>
            <p className="mt-5 text-base ">
              I am giving all kind of web developer services you need with good{" "}
              <br /> price. I am ensure quality with unlimited revision. So you
              can get best design
            </p>
          </div>
          <div className=" grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-7">
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={image1}
                  alt="Shoes"
                  className="rounded-xl"
                  width={50}
                  height={50}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#15295f] text-2xl mt-5 mb-3 font-semibold">
                  Web Design
                </h2>
                <p className="text-base text-[#15295f]">
                  I have a strong understanding of web design and development,
                  and I use my skills to create websites that are both visually
                  appealing and easy to use. I also have a deep understanding of
                  user experience (UX), so I can ensure that my designs are
                  intuitive and engaging.
                </p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={image2}
                  alt="Shoes"
                  className="rounded-xl"
                  width={60}
                  height={60}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#15295f] text-2xl mt-5 mb-3 font-semibold">
                  Web development
                </h2>
                <p className="text-base text-[#15295f]">
                  I create websites that are both visually appealing and easy to
                  use. I start by understanding your goals for your website and
                  then work with you to create a design that meets those goals.
                  I use a variety of tools and techniques to create websites
                  that are responsive, accessible, and search engine optimized.
                </p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={image3}
                  alt="Shoes"
                  className="rounded-xl"
                  width={60}
                  height={60}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#15295f] text-2xl mt-5 mb-3 font-semibold">
                  React Development
                </h2>
                <p className="text-base text-[#15295f]">
                  I have experience in all aspects of React development, from
                  designing and implementing UIs to building reusable components
                  and libraries. I am confident that I can use my skills and
                  experience to help you build a high-quality, user-friendly
                  React application.
                </p>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={image4}
                  alt="Shoes"
                  className="rounded-xl"
                  width={60}
                  height={60}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#15295f] text-2xl mt-5 mb-3 font-semibold">
                  Wordpress Development
                </h2>
                <p className="text-base text-[#15295f]">
                  
                  As a WordPress developer, I have extensive experience in all
                  aspects of WordPress development, including: Design and
                  development of custom WordPress themes and plugins.
                  Customization of existing WordPress themes and plugins.
                  Integration of WordPress with other third-party applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Services;
