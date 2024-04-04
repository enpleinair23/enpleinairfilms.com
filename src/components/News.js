import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";

const News = () => {
  useEffect(() => {
    var lists = document.querySelectorAll(".news_list > ul > li");
    let box = document.querySelector(".cavani_fn_moving_box");
    if (!box) {
      let body = document.querySelector("body");
      let div = document.createElement("div");
      div.classList.add("cavani_fn_moving_box");
      body.appendChild(div);
    }

    lists.forEach((list) => {
      list.addEventListener("mouseenter", (event) => {
        box.classList.add("opened");
        var imgURL = list.getAttribute("data-img");
        box.style.backgroundImage = `url(${imgURL})`;
        box.style.top = event.clientY - 50 + "px";
        console.log(event.clientY);
        if (imgURL === "") {
          box.classList.remove("opened");
          return false;
        }
      });
      list.addEventListener("mouseleave", () => {
        box.classList.remove("opened");
      });
    });
  }, []);

  const [isOpen4, setIsOpen4] = useState(false);
  const [modalContent, setModalContent] = useState({});
  function toggleModalFour(value) {
    setIsOpen4(!isOpen4);
    setModalContent(value);
  }
  const newsData = [
    {
      img: "assets/img/news/4.jpg",
      tag: "Branding",
      date: "April 4, 2024",
      comments: "3 comments",
      title: "EN PLEIN AIR® - YEAR 2",
      text1:
        "This is the second post on our blog!",
      text2:
        "There's going to be a lot of more interesting things in the future.",
      text3:
        "So just keep posted!",
    },
    {
      img: "assets/img/news/4.jpg",
      tag: "Branding",
      date: "June 25, 2023",
      comments: "3 comments",
      title: "EN PLEIN AIR® - YEAR 1",
      text1:
        "This is the first post on our new blog!",
      text2:
        "There's going to be a lot of more interesting things in the future.",
      text3:
        "So just keep posted!",
    },
  ];

  return (
    <Fragment>
      <SectionContainer navName="news">
        <div className="section_inner">
          <div className="cavani_tm_news w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Blog
              </span>
            </div>
            <div className="news_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="relative z-[2]">
                {newsData.map((news, i) => (
                  <li
                    className="w-full py-[29px] px-0"
                    data-img={news.img}
                    key={i}
                  >
                    <div className="list_inner w-full clear-both h-auto flex items-center">
              
                      <div className="relative">
                        <div className="extra_metas">
                          <ul className="flex items-center flex-wrap mb-[2px]">
                            <li className="relative mr-[10px]">
                              <span className="text-[15px] text-[#777]">
                                {news.date}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="post_title">
                          <h3 className="m-0 p-0 leading-[1] font-semibold">
                            <a href="#" onClick={() => toggleModalFour(news)}>
                              {news.title}
                            </a>
                          </h3>
                        </div>
                      </div>
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
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.img}
                      style={{ backgroundImage: `url(${modalContent.img})` }}
                    />
                  </div>
                  <div className="details">
                    <div className="meta">
                      <ul className="flex items-center flex-wrap mb-[2px]">
                        <li className="relative mr-[10px]">
                          <span className="text-[15px] text-[#777]">
                            {modalContent.date}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
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
export default News;
