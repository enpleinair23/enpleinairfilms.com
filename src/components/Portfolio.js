import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail } from "./Popup";

const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="zTFCeq2H3UY"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen2}
        videoId="TmwxKBkYk0I"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen5}
        videoId="AOsRcSRl_Ic"
        animationSpeed={300}
        onClose={() => setIsOpen5(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen6}
        videoId="yFdeOxwD0mI"
        animationSpeed={300}
        onClose={() => setIsOpen6(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen7}
        videoId="sNbY1vas3HU"
        animationSpeed={300}
        onClose={() => setIsOpen7(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen8}
        videoId="Z5F7NXgdDfI"
        animationSpeed={300}
        onClose={() => setIsOpen8(false)}
        modalVideoClose="mfp-close"
      />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    Adverts
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".vimeo"
                    onClick={handleFilterKeyChange("vimeo")}
                  >
                    Brand Films
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Colour Grading
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/ooredoo.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ooredoo
                        </h3>
                        <span className="text-[14px]">Advert</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/olympic.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Qatar Olympic Committee
                        </h3>
                        <span className="text-[14px]">Advert</span>
                      </div>
                      <a
                        onClick={() => setIsOpen7(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/baladna.jpg"
                        onClick={() => setIsOpen2(true)}
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Baladna Milk
                        </h3>
                        <span className="text-[14px]">Advert</span>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-vimeo"
                        href="#"
                        onClick={() => setIsOpen2(true)}
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/invest.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Invest Qatar
                        </h3>
                        <span className="text-[14px]">Brand Film</span>
                      </div>
                      <a
                        onClick={() => setIsOpen5(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/tasmu.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          TASMU
                        </h3>
                        <span className="text-[14px]">Brand Film</span>
                      </div>
                      <a
                        onClick={() => setIsOpen6(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="vimeo mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/northatlantic.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          College of the North Atlantic
                        </h3>
                        <span className="text-[14px]">Brand Film</span>
                      </div>
                      <a
                        onClick={() => setIsOpen8(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="detail mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/farm.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          On The Farm
                        </h3>
                        <span className="text-[14px]">Colour Grading</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFour}
                      />
                    </div>
                    <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                            This captivating endeavor takes you to the sprawling fields and rustic landscapes of a farm, where every frame is a celebration of nature's bounty and the hard work that goes into cultivating the land.
                            </p>
                            <p>
                            The color grading in is an ode to the rich and diverse colors found in the countryside. From the golden amber of ripe wheat fields to the lush greenery of flourishing crops, each frame is meticulously treated to showcase the vibrancy and authenticity of farm life.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Chesapeake Farm</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Colour Grading
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 14, 2023</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/youtube.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
