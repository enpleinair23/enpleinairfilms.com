import SectionContainer from "../layout/SectionContainer";
import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_eebx214"
const TEMPLATE_ID = "template_fxjpxc6"
const USER_ID = "laSIuiRMlk57Snzg8"

const onSubmit = e => {
  e.preventDefault()
  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then(alert("Message Sent!"))
  e.target.reset()
}


const Contact = () => {
  return (
    <SectionContainer navName="contact">
      <div className="section_inner">
        <div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
              Contact
            </span>
          </div>
          <div className="short_info w-full h-auto clear-both float-left mt-[62px]">
            <ul className="ml-[-30px] flex flex-wrap">
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/location.svg"
                    alt="image"
                  />
                  <span className="block">North Street, Bristol, UK</span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/mail.svg"
                    alt="image"
                  />
                  <span className="block">
                    <a
                      className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                      href="#"
                    >
                      contact@enpleinairfilms.com
                    </a>
                  </span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/call.svg"
                    alt="image"
                  />
                  <span className="block">+44 7585 445056</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="form w-full h-auto clear-both flex">
            <div className="left w-1/2 pr-[15px]">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  className="contact_form"
                  id="contact_form"
                  method="POST"
                  onSubmit={onSubmit}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          id="name"
                          type="text"
                          name="first_name"
                          placeholder="Name"
                          autoComplete="off"
                        />
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <button className="bg-black hover:bg-gray-500 rounded-none focus:outline-none text-white dark:text-black font-medium py-2 px-4 mt-2" type="submit">
                      Send Message
                  </button>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.9584622064945!2d-2.6132799241384737!3d51.44055671558533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c32fbfe1749%3A0xa3add59e9f04ba8f!2sNorth%20St%2C%20Bristol!5e0!3m2!1sen!2suk!4v1705339229446!5m2!1sen!2suk"
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
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
