import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../Container";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [btnDisable, setBtnDisable] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zlg092n",
        "template_9zfxabf",
        form.current,
        "I-WH7Asd4VtCvRsfg"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message Send Successfully.')
          setBtnDisable(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className=" my-20 " id="contact">
        <Container>
          <div className="text-center  mx-auto px-5 py-20">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#ff6900] pb-2">
              Contact Me
            </h2>
            <p className="pb-10">
              I am currently open for a fulltime Frontend Developer role. If you
              want to discuss about that feel free to contact me.
            </p>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <form ref={form} onSubmit={sendEmail} className="card-body">
                <div className="md:flex md:w-full md:gap-4">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text"> Name</span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text"> Email</span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Message</span>
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered textarea-sm w-full"
                  />
                </div>
                <button disabled={btnDisable} className="btn btn-primary">
                  {" "}
                  <input type="submit" value="Send" className="text-white font-bold" />
                </button>
                <Toaster />
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
