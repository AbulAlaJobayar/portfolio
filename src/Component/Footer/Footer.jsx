import Container from "../Container";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="  border-t-2 border-neutral-100">
      <Container>
        <footer className="footer items-center p-4 text-neutral-content">
          <div className="items-center grid-flow-col">
            <p className="text-[#15295f] text-xl font-bold">
              Jobayar © {year} - All right reserved
            </p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a className="text-[#15295f]"
            href="https://www.linkedin.com/in/abul-ala-jobayar-4972b5202/"
            >
              <img src="https://i.ibb.co/sHX149s/linkedin-logo-png-2035.png" width="30" height="30" alt="" />
            </a>
            <a className="text-[#15295f] w-10"
            href="https://github.com/AbulAlaJobayar"
            >
              <img src="https://i.ibb.co/jyS0H9K/github-mark.png" width='24' height="24" alt="" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100010086635226"
              className="text-[#15295f]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
