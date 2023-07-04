import Container from "../../Container";
import aboutimg from "../../../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-[#fdf8f7] mt-10">
      <Container>
        <section className=" px-5 py-20 " id="about">
          <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-4">
            <div className="about-info">
              <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#ff6900] pb-2">
                About Me
              </h2>

              <p className="pb-5">
                Hi, My Name Is Abul Ala Jobayar everyone calls me jobayar. I am
                a MERN Stack Developer. I build beautifull websites with React,
                Node.js,MongoDb,Express and Tailwind CSS.
              </p>
              <p className="pb-5">
                I am proficient in Frontend skills like React.js, Axios,
                Tailwind CSS, SaSS, Css3 and many more.
              </p>

              <p className="pb-5">
                In backend I know Node.js, Express.js and MongoDB
              </p>

              <p>
                In my spare time, I am dedicated to learning programming skills,
                specifically the MERN stack. I believe that these skills will be
                valuable in my future career, and I am excited to see what I can
                create with them. The MERN stack is a popular JavaScript stack
                that consists of MongoDB, Express, React, and Node.js. MongoDB
                is a NoSQL database that is well-suited for storing large
                amounts of data. Express is a web framework that makes it easy
                to create RESTful APIs. React is a JavaScript library for
                building user interfaces. And Node.js is a JavaScript runtime
                environment that can be used to build both server-side and
                client-side applications. I have been learning about the MERN
                stack for the past few months, and I am starting to build my own
                websites and applications. I am enjoying the challenge of
                learning to program, and I am confident that these skills will
                be a valuable asset in my future. I am excited to see what I can
                create with the MERN stack, and I am eager to continue learning
                and growing as a developer
              </p>
            </div>

            <div className="about-img">
              <img
                src={aboutimg}
                alt="coding illustration"
                className="lgw-[80%] md:ml-auto w-96"
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
