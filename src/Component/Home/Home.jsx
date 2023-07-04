import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import MainHeading from "./MinHeding/MainHeading";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <MainHeading></MainHeading>
      <Services></Services>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <MessengerCustomerChat
        pageId="118745424599268"
        appId="994048914934914"
      />
    </>
  );
};

export default Home;
