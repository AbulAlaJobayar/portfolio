
import collegeine from "../../../assets/collegeine.png";
import powerlern from "../../../assets/powerlern.png";
import funtopia from "../../../assets/funtopia.png"; 
import dmnDelisious from "../../../assets/dmnDelisious.png"; 
import teahouse from "../../../assets/teahous.png"; 
import bikedeko from "../../../assets/bikeDeko.png"; 
import archetect from "../../../assets/archetect.png"; 
import universe from "../../../assets/jsprojects.png"; 
import codeamy from "../../../assets/codeamy.png"; 

import Container from "../../Container";

const Projects = () => {
  const projects = [
    {
      img:collegeine,
      title: " college booking website ",
      desc: " A college booking facilities website. Built with Node.js, MongoDB, React, express and Tailwind CSS ",
      live: "https://collegeine.web.app/",
      client_repo: "https://github.com/AbulAlaJobayar/collegeine_frontend",
      server_repo:"https://github.com/AbulAlaJobayar/collegeine_backend",
    },
    {
      img:powerlern,
      title: "Summer camp website ",
      desc: " A Foreign language learning school. Built with Node.js, MongoDB, React, express and Tailwind CSS ",
      live: "https://assingment-12-client.web.app/",
      client_repo: "https://github.com/AbulAlaJobayar/summer-Camp-School-Client",
      server_repo:"https://github.com/AbulAlaJobayar/Summer-Camp-School-Server",
    },
    {
      img: funtopia,
      title: "Toy sell Website",
      desc: "A Toy Sell Website. Built with React, Node.js , MongoDb,Express Tailwind and more",
      live: "https://assingment-11-client-6b966.web.app/?fbclid=IwAR1uJTTz3K9P53HlJzvXF6xgvGlHOpDOLdYgDDLf2-kUDXjBnYb9VTvPfNw",
      client_repo: "https://github.com/AbulAlaJobayar/Toy-MarketPlace-Client",
      server_repo:"https://github.com/AbulAlaJobayar/Toy-MarketPlace-Server"
    },
    {
      img: dmnDelisious,
      title: " Restaurant Website",
      desc: "A Food Sell Website, Made With React.js, Express.js, MongoDB, and Many more technology",
      live: "https://assingment-10-client.web.app/services?fbclid=IwAR0SxGqJe9jhfAOsksPaE-N_XX1ikphOs6jTKsQA6CGIlPjGGNJZRvaibNY",
      client_repo: "https://github.com/AbulAlaJobayar/chef-recipe-hunter-client",
      server_repo:"https://github.com/AbulAlaJobayar/chef-recipe-server"
    },
    {
      img: teahouse,
      title: "Tea House ",
      desc: "Teahouse website.made with html and tailwind css",
      live: "https://abulalajobayar.github.io/tea-house/?fbclid=IwAR3OstAuKHG5KjL1PHoswcWpvDdfDuGcA5g9UXLl5zYCuIcNIr7bcuDnV0M",
      client_repo: "https://github.com/AbulAlaJobayar/tea-house",
      
    },
    {
      img: bikedeko,
      title: "Bicker Zone  Website",
      desc: "Bike sell website. Made With html and css",
      live: "https://abulalajobayar.github.io/bicker-zone-website/?fbclid=IwAR0RKKWVbJOzzpXnfxAq71B_4PJKqGuwM36vvdbiJPd_67nYenw2NOOYgfY",
      client_repo: "https://github.com/AbulAlaJobayar/bicker-zone-website",
    },
    {
      img: archetect,
      title: "G3 Architects",
      desc: "Architects website. made with html and css ",
      live: "https://abulalajobayar.github.io/second-project/?fbclid=IwAR3GK5bs59W06kj6ifM8hj4_6lLU5ZYHUM7KsTW5pPr6ck2QPwm1njIya-M#",
      client_repo: "https://github.com/AbulAlaJobayar/second-project",
    },
    {
      img: universe,
      title: "Ai Universe",
      desc: "Ai Universe website. made with html, css and javascript",
      live: "https://lively-tanuki-a74013.netlify.app/?fbclid=IwAR0GBtOvXR01M7GMrzW9odgpQaFvl6pqrQhJYag4vu4qI7bNroA8enSKvo0",
      client_repo: "https://github.com/AbulAlaJobayar/ai-universe-hub",
    },
    {
      img: codeamy,
      title: "knowledge-cafe",
      desc: "codeamy website. made with html, css and javascript",
      live: "https://dashing-marshmallow-d99cad.netlify.app/?fbclid=IwAR2ReWKs41N3MFgRHKruGQfIxcyDiLrNGyM2qqgyVJ9AKv6Q0CJhNFeEjqM",
      client_repo: "https://github.com/AbulAlaJobayar/knowledge-cafe",
    },
  ];

  return (
    <Container>
    <section className="  px-5 py-20" id="projects">
      <div className="">
        <div className=" mb-5 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-5 text-[#ff6900] pb-2">
           My Projects
          </h2>

          <p className="pb-5 text-base text-[#15295f]">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects  container mx-auto grid md:grid-cols-3 gap-10  mb-5">
        {projects.map((project, i) => {
          return (
            <div className="relative  rounded-xl gap-10" key={i}>
              <img src={project.img} alt={project.title}  className="w-full rounded-xl"/>
              <div className="flex absolute left-0 right-0 top-0 rounded-xl bottom-0 mx-auto w-[100%] h-[100%]  bg-[#fdf8f7]  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                
                <p className=" text-xl text-center font-bold  text-[#15295f]">
                  {project.title}
                </p>
                <p className="py-2 text-center font-bold px-2 text-[#15295f]">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project?.live}
                    className="px-5 py-2 bg-[#ff6900] hover:bg-[#ff9100] text-white mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project?.client_repo}
                    className="px-5 py-2 bg-[#ff6900] hover:bg-[#ff9100] text-white mr-5 font-bold"
                  >
                    Client
                  </a>
                 {
                   project?.server_repo && <a
                   href={project?.server_repo}
                   className="px-5 py-2 bg-[#ff6900]  hover:bg-[#ff9100] text-white font-bold"
                 >Server</a>
                 }
                    
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    </Container>
  );
};

export default Projects;
