import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";

const Service = () => {
  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "assets/img/news/2.jpg",
      icon: "assets/img/svg/play.svg",
      text: "Using technical skills and creativity to transform raw footage into a compelling and professional-looking final product",
      date: "August 9, 2021",
      title: "Video Editing",
      text1:
        "Video editing is the creative and technical process of manipulating raw video footage to produce a polished and visually cohesive final product. This process involves various stages, from organizing and selecting clips to applying effects and fine-tuning audio.",
      text2:
        "Beginning with the importation of video clips into specialized editing software, the editor meticulously organizes the material into a logical sequence on a timeline. Cutting and trimming then ensue, refining the content by removing unnecessary elements and ensuring a smooth and engaging flow.",
      text3:
        "Video editing is an art form that combines technical proficiency with creative expression, resulting in a polished and compelling visual piece ready for sharing on various platforms.",
    },
    {
      img: "assets/img/news/1.jpg",
      icon: "assets/img/svg/3d.svg",
      text: "A powerful and artistic aspect of video editing that plays a pivotal role in shaping the overall visual identity of a video",
      date: "August 9, 2021",
      title: "Colour Grading",
      text1:
        "Colour grading is a crucial step in the video editing process that involves the adjustment and enhancement of the colour and tone of a video to achieve a desired visual style or mood.",
      text2:
        "The primary goals of colour grading include achieving visual consistency across different scenes, correcting any colour imbalances introduced during filming, and enhancing the overall aesthetic appeal of the video.",
      text3:
        "Colour grading often involves working with colour wheels, curves, and sliders to fine-tune the shadows, midtones, and highlights of the video. It allows for the isolation and adjustment of specific colours within the frame, enabling editors to emphasize certain elements or create visual focal points.",
    },
    {
      img: "assets/img/news/6.jpg",
      icon: "assets/img/svg/presentation.svg",
      text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
      date: "August 9, 2021",
      title: "Motion Graphics",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "assets/img/news/5.jpg",
      icon: "assets/img/svg/art.svg",
      text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
      date: "August 9, 2021",
      title: "3D Game Art",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
  ];

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt="image"
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt="image"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.img}
                      style={{
                        backgroundImage: `url(${modalContent.img})`,
                      }}
                    />
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Service;
