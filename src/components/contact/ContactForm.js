import emailjs from "emailjs-com";
import { useState } from "react";
const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_eebx214", // service id
          "template_fxjpxc6", // template id
          mailData,
          "laSIuiRMlk57Snzg8" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
<div className="form w-full h-auto clear-both flex">
<div className="left w-1/2 pr-[15px]">
  <div className="fields w-full h-auto clear-both float-left">
    <form
      action="/"
      className=""
      id="contact_form"
      method="POST"
      onSubmit={onSubmit}
    >
                <div
          className={error ? "empty_notice" : "returnmessage"}
          style={{ display: error == null ? "none" : "block" }}
        >
          <span className="">
            {error
              ? "Please Fill Required Fields"
              : "Your message has been received, We will contact you soon."}
          </span>
        </div>
      <div
        className="returnmessage"
        data-success="Your message has been received, We will contact you soon."
      />
      <div className="first w-full float-left">
        <ul>
          <li className="w-full mb-[30px] float-left">
            <input
                            name="name"
                            onChange={(e) => onChange(e)}
                            value={name}
                            id="name"
                            type="text"
                            placeholder="Name"
            />
          </li>
          <li className="w-full mb-[30px] float-left">
            <input
             name="email"
             onChange={(e) => onChange(e)}
             value={email}
             id="email"
             type="email"
             placeholder="Email"
            />
          </li>
        </ul>
      </div>
      <div className="last">
        <textarea
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
            id="message"
            placeholder="Message"
        />
      </div>
      <button className="cavani_tm_button" type="submit">
        <a>
          Send Message
        </a>
      </button>
    </form>
  </div>
</div>
<div className="right w-1/2 pl-[15px] relative">
  <div className="map_wrap">
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height={355}
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.9586427476734!2d-2.610705!3d51.4405534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c32fbfe1749%3A0xa3add59e9f04ba8f!2sNorth%20St%2C%20Bristol!5e0!3m2!1sen!2suk!4v1712233668144!5m2!1sen!2suk"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
        <a href="https://fmovies-online.net">fmovies</a>
        <br />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
          }}
        />
        <a href="https://www.embedgooglemap.net">
          embedgooglemap.net
        </a>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
          }}
        />
      </div>
    </div>
    {/* Get your API here https://www.embedgooglemap.net */}
  </div>
</div>
</div>

);
};
export default ContactForm;