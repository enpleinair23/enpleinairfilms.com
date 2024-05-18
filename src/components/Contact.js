import SectionContainer from "../layout/SectionContainer";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <SectionContainer navName="contact">
      <div className="section_inner">
        <div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold">
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
                  <span className="block">North Street,
                  <br/>
                  Bristol, UK
                  </span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/mail.svg"
                    alt="image"
                  />
                  <div className="">
                    <a
                      className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                      href="#"
                    >
                      contact@
                      <br/>
                      enpleinairfilms.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/call.svg"
                    alt="image"
                  />
                  <span className="block">07585 <br/>
                  445056</span>
                </div>
              </li>
            </ul>
          </div>
          <ContactForm/>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
