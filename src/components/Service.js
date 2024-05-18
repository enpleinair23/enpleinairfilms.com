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
      img: "assets/img/news/editing.jpg",
      icon: "assets/img/svg/art.svg",
      text: "From concept to execution, we handle every aspect of video production, ensuring a seamless and professional final product",
      date: "August 9, 2021",
      title: "Video Production",
      text1:
        "Video production is a multifaceted process that involves planning, shooting, and editing to create visual content for various purposes. It encompasses a wide range of activities, from conceptualization and scripting to the final delivery of a polished video.",
      text2:
        "Video production begins with pre-production, where ideas are transformed into a concrete plan. This stage involves concept development, scriptwriting, storyboarding, and planning logistics such as locations, casting, and equipment.",
      text3:
        "Once the groundwork is laid, the production phase involves bringing the plan to life through the use of cameras, lighting, sound equipment, and other tools. This stage includes shooting interviews, capturing b-roll footage, and ensuring that the visuals align with the creative vision.",
    },
    {
      img: "assets/img/news/editing.jpg",
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
      img: "assets/img/news/colour.jpg",
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
      img: "assets/img/news/effects.jpg",
      icon: "assets/img/svg/presentation.svg",
      text: "A versatile and dynamic tool that combines graphic design and animation to create engaging and visually appealing content",
      date: "August 9, 2021",
      title: "Motion Graphics",
      text1:
        "Motion Graphics involves the use of digital techniques to bring static graphics, text, and images to life through movement, transitions, and effects.",
      text2:
        "Here are key aspects and characteristics of motion graphics:",
      text3:
        "Animation: Motion graphics heavily rely on animation, where various visual elements move, rotate, scale, and transform over time. This can include 2D or 3D animation, giving depth and dimension to the visuals.",
        text4:"Graphic Design Elements: The foundation of motion graphics is built on graphic design principles. Elements such as typography, shapes, colors, and images are carefully crafted and arranged to convey a message or tell a story.",
        text5:"Transitions and Timing: Timing is crucial in motion graphics. Smooth transitions, well-timed movements, and synchronization with audio contribute to the overall effectiveness of the piece. The pacing and rhythm of the motion help guide the viewer's attention."
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
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold">
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
                    <p className="mt-[15px]">{modalContent.text4}</p>
                    <p className="mt-[15px]">{modalContent.text5}</p>
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
