import Modal from "react-modal";

export const Soundcloud = ({ isOpen3, toggleModalThree }) => {
  return (
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {" "}
      <div
        onClick={toggleModalThree}
        className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                onClick={toggleModalThree}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Modal>
  );
};
export const Detail = ({ isOpen4, toggleModalFour }) => {
  return (
    <Modal
      isOpen={isOpen4}
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
            <div className="popup_details w-full h-auto clear-both float-left">
              <div className="top_image">
                <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url="assets/img/portfolio/farm2.jpg"
                  style={{
                    backgroundImage: 'url("assets/img/portfolio/farm2.jpg")',
                  }}
                />
              </div>
              <div className="portfolio_main_title">
                <h3 className="text-[16px] mb-[2px] font-semibold">
                  On The Farm
                </h3>
                <span className="text-[14px]">Colour Grading</span>
                <div />
              </div>
              <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                <div className="textbox w-[70%] pr-[40px]">
                  <p className="mb-[15px]">
                  The concept of this color grading project is to encapsulate the breathtaking beauty and tranquility of a farm at sunrise. The goal is to enhance the natural colors present during this time, emphasizing the soft, warm hues that bathe the landscape in a soft glow. The imagery should evoke a sense of peace and serenity while highlighting the inherent charm and simplicity of farm life.
                  </p>
                  <p>THE PROCESS</p>
                  <p>1. Selecting Footage: The first step in the color grading process is selecting the right footage. High-quality footage captured during the golden hour, with its soft, diffused light, is essential to achieving the desired effect. Shots of rolling fields, grazing animals, and rustic farm structures provide the perfect canvas for our color grading endeavor.</p>
<p>2. Establishing a Mood: Before diving into color grading, it's crucial to establish the mood and tone we want to convey. For this project, we aim to evoke feelings of warmth, nostalgia, and tranquility. By carefully selecting the right shots and framing, we set the stage for the color grading process.</p>
<p>3. Enhancing Colors: With the mood established, it's time to enhance the colors to bring out the natural beauty of the scene. During sunrise, warm tones dominate the landscape, with hues of orange, yellow, and gold painting the sky and earth. By adjusting the color temperature, saturation, and contrast, we can intensify these warm tones, creating a vibrant and inviting atmosphere.</p>
<p>4. Creating Depth and Dimension: Adding depth and dimension to the footage further enhances its visual appeal. By adjusting the color grading to accentuate foreground, midground, and background elements, we create a sense of depth that draws the viewer into the scene, inviting them to explore every corner of the frame.</p>
                </div>
                <div className="detailbox w-[30%] pl-[40px]">
                  <ul>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Client</span>
                      <span>Chesapeake Farm</span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Category</span>
                      <span>
                        <a className="text-[#7d7789]" href="#">
                          Colour Grading
                        </a>
                      </span>
                    </li>
                    <li className="mb-[10px] w-full float-left">
                      <span className="first font-bold block">Date</span>
                      <span>March 14, 2023</span>
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/1.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/1.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/2.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/2.jpg")',
                          }}
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
                          alt="image"
                        />
                        <div
                          className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                          data-img-url="assets/img/portfolio/3.jpg"
                          style={{
                            backgroundImage:
                              'url("assets/img/portfolio/3.jpg")',
                          }}
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
