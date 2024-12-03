// eslint-disable-next-line no-unused-vars
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../../public/assets/image/Pdf.png";
import img2 from "../../../public/assets/image/sound.png";
import { useNavigate } from "react-router-dom";

function Generated() {
  const navigate = useNavigate();

  return (
    <>
      <div className="Generated-section">
        <div className="Generated-hero">
          <div className="section">
            <div className="container-Generated">
              <div className="row">
                <div className="col-md-2">
                  <button className="icon-Generated">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="icon-Generated"
                    />
                  </button>
                </div>
                <div className="col-md-8">
                  <h5>generated on</h5>
                  <h6>DD/MM/YY</h6>
                </div>
              </div>
              <br />
              <h3>Story Title Will Be Here</h3>
              <div className="para-Generated">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  at, aspernatur nemo deserunt nam sapiente. Est, deleniti ad.
                  Quas atque a quis odio soluta quae illo? Maxime porro iure
                  nemo? Itaque quis velit totam repudiandae rem ex, aliquam
                  placeat possimus doloremque soluta natus nemo quisquam odit
                  enim tempore temporibus perferendis. Ducimus, est. Tempora
                  maiores illo veritatis voluptatibus sequi, dignissimos
                  corporis!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  at, aspernatur nemo deserunt nam sapiente. Est, deleniti ad.
                  Quas atque a quis odio soluta quae illo? Maxime porro iure
                  nemo? Itaque quis velit totam repudiandae rem ex, aliquam
                  placeat possimus doloremque soluta natus nemo quisquam odit
                  enim tempore temporibus perferendis. Ducimus, est. Tempora
                  maiores illo veritatis voluptatibus sequi, dignissimos
                  corporis!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  vitae exercitationem eveniet vel quibusdam itaque omnis
                  voluptas sequi, corporis quisquam voluptates cupiditate unde
                  veniam optio laborum reiciendis aliquid ipsa earum! Quidem
                  necessitatibus molestias libero officiis quas, veniam beatae
                  corporis mollitia voluptate est esse eos aspernatur.
                  Cupiditate quidem, dolores amet odit dolor molestiae corrupti,
                  nemo quod deleniti voluptate omnis, illum fuga.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  vitae exercitationem eveniet vel quibusdam itaque omnis
                  voluptas sequi, corporis quisquam voluptates cupiditate unde
                  veniam optio laborum reiciendis aliquid ipsa earum! Quidem
                  necessitatibus molestias libero officiis quas, veniam beatae
                  corporis mollitia voluptate est esse eos aspernatur.
                  Cupiditate quidem, dolores amet odit dolor molestiae corrupti,
                  nemo quod deleniti voluptate omnis, illum fuga.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Recusandae consequuntur repellendus veniam a animi eum
                  exercitationem aliquam sed harum. Ut aut aperiam fugiat
                  voluptatum inventore sed commodi laboriosam illum id.
                  Temporibus voluptatum, itaque odit similique sed nobis cum
                  enim modi perspiciatis consequuntur harum assumenda reiciendis
                  quas qui minima corrupti laudantium! Praesentium recusandae
                  repellendus ratione ea sequi! Veniam quidem ad nihil? Saepe
                  minima esse similique optio aliquam, in iure distinctio
                  quisquam aliquid, repellat laudantium corporis, deserunt
                  voluptates? Nobis obcaecati in velit recusandae, quas
                  repellendus sunt natus necessitatibus facilis eveniet est
                  quam!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Recusandae consequuntur repellendus veniam a animi eum
                  exercitationem aliquam sed harum. Ut aut aperiam fugiat
                  voluptatum inventore sed commodi laboriosam illum id.
                  Temporibus voluptatum, itaque odit similique sed nobis cum
                  enim modi perspiciatis consequuntur harum assumenda reiciendis
                  quas qui minima corrupti laudantium! Praesentium recusandae
                  repellendus ratione ea sequi! Veniam quidem ad nihil? Saepe
                  minima esse similique optio aliquam, in iure distinctio
                  quisquam aliquid, repellat laudantium corporis, deserunt
                  voluptates? Nobis obcaecati in velit recusandae, quas
                  repellendus sunt natus necessitatibus facilis eveniet est
                  quam!
                </p>
              </div>
              <div className="contanier btn-Generated">
                <div className="row SDD-Generated">
                  <div className="col-md-6">
                    <button className="pdf-btn-Generated">
                      <img src={img1} alt="Download" />
                      Download As Pdf
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="audio-btn-Generated">
                      <img src={img2} alt="Audio" />
                      Download As Audio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="action-buttons-Generated">
            <button className="create-btn-Generated" onClick={() => navigate("/generated")}>
              <span className="icon">
                {/* <img src={img3} /> */}
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0625 0.605469C24.5195 0.148438 25.2812 0.148438 25.7383 0.605469L26.1445 1.01172C26.6016 1.46875 26.6016 2.23047 26.1445 2.6875L21.8281 7.5625C21.6758 7.71484 21.625 7.91797 21.625 8.12109V9.1875C21.625 9.64453 21.2188 10 20.8125 10H20C19.7461 10 19.543 10.1016 19.3906 10.3047L5.57812 25.6914C5.27344 26.0469 4.81641 26.25 4.30859 26.25C3.90234 26.25 3.44531 26.0977 3.14062 25.793L0.957031 23.6094C0.652344 23.3047 0.5 22.8477 0.5 22.4414C0.5 21.9336 0.703125 21.4766 1.05859 21.1719L6.69531 16.0938C6.89844 15.9414 7 15.7383 7 15.4844V14.0625C7 13.6562 7.35547 13.25 7.8125 13.25H9.53906C9.74219 13.25 9.94531 13.1992 10.0977 13.0469L24.0625 0.605469ZM22.4375 14.875C22.5898 14.875 22.7422 15.0273 22.793 15.1797L23.5547 17.8203L26.1953 18.582C26.3477 18.6328 26.5 18.7852 26.5 18.9375C26.5 19.1406 26.3477 19.293 26.1953 19.3438L23.5547 20.1055L22.793 22.7461C22.7422 22.8984 22.5898 23 22.4375 23C22.2344 23 22.082 22.8984 22.0312 22.7461L21.2695 20.1055L18.6289 19.3438C18.4766 19.293 18.375 19.1406 18.375 18.9375C18.375 18.7852 18.4766 18.6328 18.6289 18.582L21.2695 17.8203L22.0312 15.1797C22.082 15.0273 22.2344 14.875 22.4375 14.875ZM4.91797 3.80469L5.67969 6.44531L8.32031 7.20703C8.47266 7.25781 8.625 7.41016 8.625 7.5625C8.625 7.76562 8.47266 7.91797 8.32031 7.96875L5.67969 8.73047L4.91797 11.3711C4.86719 11.5234 4.71484 11.625 4.5625 11.625C4.35938 11.625 4.20703 11.5234 4.15625 11.3711L3.39453 8.73047L0.753906 7.96875C0.601562 7.91797 0.5 7.76562 0.5 7.5625C0.5 7.41016 0.601562 7.25781 0.753906 7.20703L3.39453 6.44531L4.15625 3.80469C4.20703 3.65234 4.35938 3.5 4.5625 3.5C4.71484 3.5 4.86719 3.65234 4.91797 3.80469ZM11.875 0.25C12.0273 0.25 12.1797 0.402344 12.2305 0.605469L12.5859 1.97656L13.957 2.33203C14.1602 2.38281 14.3125 2.53516 14.3125 2.6875C14.3125 2.89062 14.1602 3.04297 13.957 3.09375L12.5859 3.44922L12.2305 4.82031C12.1797 5.02344 12.0273 5.125 11.875 5.125C11.6719 5.125 11.5195 5.02344 11.4688 4.82031L11.1133 3.44922L9.74219 3.09375C9.53906 3.04297 9.4375 2.89062 9.4375 2.6875C9.4375 2.53516 9.53906 2.38281 9.74219 2.33203L11.1133 1.97656L11.4688 0.605469C11.5195 0.402344 11.6719 0.25 11.875 0.25Z"
                    fill="#BC6C25"
                  />
                  <path
                    d="M24.0625 0.605469C24.5195 0.148438 25.2812 0.148438 25.7383 0.605469L26.1445 1.01172C26.6016 1.46875 26.6016 2.23047 26.1445 2.6875L21.8281 7.5625C21.6758 7.71484 21.625 7.91797 21.625 8.12109V9.1875C21.625 9.64453 21.2188 10 20.8125 10H20C19.7461 10 19.543 10.1016 19.3906 10.3047L5.57812 25.6914C5.27344 26.0469 4.81641 26.25 4.30859 26.25C3.90234 26.25 3.44531 26.0977 3.14062 25.793L0.957031 23.6094C0.652344 23.3047 0.5 22.8477 0.5 22.4414C0.5 21.9336 0.703125 21.4766 1.05859 21.1719L6.69531 16.0938C6.89844 15.9414 7 15.7383 7 15.4844V14.0625C7 13.6562 7.35547 13.25 7.8125 13.25H9.53906C9.74219 13.25 9.94531 13.1992 10.0977 13.0469L24.0625 0.605469ZM22.4375 14.875C22.5898 14.875 22.7422 15.0273 22.793 15.1797L23.5547 17.8203L26.1953 18.582C26.3477 18.6328 26.5 18.7852 26.5 18.9375C26.5 19.1406 26.3477 19.293 26.1953 19.3438L23.5547 20.1055L22.793 22.7461C22.7422 22.8984 22.5898 23 22.4375 23C22.2344 23 22.082 22.8984 22.0312 22.7461L21.2695 20.1055L18.6289 19.3438C18.4766 19.293 18.375 19.1406 18.375 18.9375C18.375 18.7852 18.4766 18.6328 18.6289 18.582L21.2695 17.8203L22.0312 15.1797C22.082 15.0273 22.2344 14.875 22.4375 14.875ZM4.91797 3.80469L5.67969 6.44531L8.32031 7.20703C8.47266 7.25781 8.625 7.41016 8.625 7.5625C8.625 7.76562 8.47266 7.91797 8.32031 7.96875L5.67969 8.73047L4.91797 11.3711C4.86719 11.5234 4.71484 11.625 4.5625 11.625C4.35938 11.625 4.20703 11.5234 4.15625 11.3711L3.39453 8.73047L0.753906 7.96875C0.601562 7.91797 0.5 7.76562 0.5 7.5625C0.5 7.41016 0.601562 7.25781 0.753906 7.20703L3.39453 6.44531L4.15625 3.80469C4.20703 3.65234 4.35938 3.5 4.5625 3.5C4.71484 3.5 4.86719 3.65234 4.91797 3.80469ZM11.875 0.25C12.0273 0.25 12.1797 0.402344 12.2305 0.605469L12.5859 1.97656L13.957 2.33203C14.1602 2.38281 14.3125 2.53516 14.3125 2.6875C14.3125 2.89062 14.1602 3.04297 13.957 3.09375L12.5859 3.44922L12.2305 4.82031C12.1797 5.02344 12.0273 5.125 11.875 5.125C11.6719 5.125 11.5195 5.02344 11.4688 4.82031L11.1133 3.44922L9.74219 3.09375C9.53906 3.04297 9.4375 2.89062 9.4375 2.6875C9.4375 2.53516 9.53906 2.38281 9.74219 2.33203L11.1133 1.97656L11.4688 0.605469C11.5195 0.402344 11.6719 0.25 11.875 0.25Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              Create
            </button>
            <button className="other-btn-Generated" onClick={() => navigate("/history")}>
              <span className="icon">
                {/* <img src={img} /> */}
                <svg
                  width="30"
                  height="27"
                  viewBox="0 0 30 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.125 0.25H3.75H16.75H18.375C19.2383 0.25 20 1.01172 20 1.875C20 2.78906 19.2383 3.5 18.375 3.5V4.05859C18.375 6.24219 17.5117 8.32422 15.9883 9.84766L12.5352 13.25L14.3633 15.0781C13.8047 16.2461 13.5 17.5664 13.5 18.9375C13.5 21.9844 14.9727 24.6758 17.2578 26.25H16.75H3.75H2.125C1.21094 26.25 0.5 25.5391 0.5 24.625C0.5 23.7617 1.21094 23 2.125 23V22.4414C2.125 20.3086 2.9375 18.2266 4.46094 16.7031L7.91406 13.25L4.46094 9.84766C2.9375 8.32422 2.125 6.24219 2.125 4.05859V3.5C1.21094 3.5 0.5 2.78906 0.5 1.875C0.5 1.01172 1.21094 0.25 2.125 0.25ZM5.375 4.05859C5.375 5.02344 5.62891 5.98828 6.1875 6.75H14.3125C14.8203 5.98828 15.125 5.02344 15.125 4.05859V3.5H5.375V4.05859ZM29.75 18.9375C29.75 23 26.4492 26.25 22.4375 26.25C18.375 26.25 15.125 23 15.125 18.9375C15.125 14.9258 18.375 11.625 22.4375 11.625C26.4492 11.625 29.75 14.9258 29.75 18.9375ZM22.4375 14.875C21.9805 14.875 21.625 15.2812 21.625 15.6875V18.9375C21.625 19.3945 21.9805 19.75 22.4375 19.75H24.875C25.2812 19.75 25.6875 19.3945 25.6875 18.9375C25.6875 18.5312 25.2812 18.125 24.875 18.125H23.25V15.6875C23.25 15.2812 22.8438 14.875 22.4375 14.875Z"
                    fill="#BC6C25"
                  />
                  <path
                    d="M2.125 0.25H3.75H16.75H18.375C19.2383 0.25 20 1.01172 20 1.875C20 2.78906 19.2383 3.5 18.375 3.5V4.05859C18.375 6.24219 17.5117 8.32422 15.9883 9.84766L12.5352 13.25L14.3633 15.0781C13.8047 16.2461 13.5 17.5664 13.5 18.9375C13.5 21.9844 14.9727 24.6758 17.2578 26.25H16.75H3.75H2.125C1.21094 26.25 0.5 25.5391 0.5 24.625C0.5 23.7617 1.21094 23 2.125 23V22.4414C2.125 20.3086 2.9375 18.2266 4.46094 16.7031L7.91406 13.25L4.46094 9.84766C2.9375 8.32422 2.125 6.24219 2.125 4.05859V3.5C1.21094 3.5 0.5 2.78906 0.5 1.875C0.5 1.01172 1.21094 0.25 2.125 0.25ZM5.375 4.05859C5.375 5.02344 5.62891 5.98828 6.1875 6.75H14.3125C14.8203 5.98828 15.125 5.02344 15.125 4.05859V3.5H5.375V4.05859ZM29.75 18.9375C29.75 23 26.4492 26.25 22.4375 26.25C18.375 26.25 15.125 23 15.125 18.9375C15.125 14.9258 18.375 11.625 22.4375 11.625C26.4492 11.625 29.75 14.9258 29.75 18.9375ZM22.4375 14.875C21.9805 14.875 21.625 15.2812 21.625 15.6875V18.9375C21.625 19.3945 21.9805 19.75 22.4375 19.75H24.875C25.2812 19.75 25.6875 19.3945 25.6875 18.9375C25.6875 18.5312 25.2812 18.125 24.875 18.125H23.25V15.6875C23.25 15.2812 22.8438 14.875 22.4375 14.875Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
            <button className="other-btn-Generated" onClick={() => navigate("/tips")}>
              <span className="icon">
                {/* <img src={img4} /> */}
                <svg
                  width="33"
                  height="27"
                  viewBox="0 0 33 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.50391 0.453125L5.94141 2.07812C6.5 2.48438 6.65234 3.24609 6.29688 3.80469C5.89062 4.36328 5.12891 4.51562 4.57031 4.10938L2.13281 2.48438C1.57422 2.12891 1.42188 1.36719 1.82812 0.808594C2.18359 0.25 2.94531 0.0976562 3.50391 0.453125ZM30.3164 2.48438L27.8789 4.10938C27.3203 4.51562 26.5586 4.36328 26.2031 3.80469C25.7969 3.24609 25.9492 2.48438 26.5078 2.07812L28.9453 0.453125C29.5039 0.0976562 30.2656 0.25 30.6719 0.808594C31.0273 1.36719 30.875 2.12891 30.3164 2.48438ZM1.21875 8.375H4.46875C5.12891 8.375 5.6875 8.93359 5.6875 9.59375C5.6875 10.3047 5.12891 10.8125 4.46875 10.8125H1.21875C0.507812 10.8125 0 10.3047 0 9.59375C0 8.93359 0.507812 8.375 1.21875 8.375ZM28.0312 8.375H31.2812C31.9414 8.375 32.5 8.93359 32.5 9.59375C32.5 10.3047 31.9414 10.8125 31.2812 10.8125H28.0312C27.3203 10.8125 26.8125 10.3047 26.8125 9.59375C26.8125 8.93359 27.3203 8.375 28.0312 8.375ZM5.94141 17.1094L3.50391 18.7344C2.94531 19.1406 2.18359 18.9883 1.82812 18.4297C1.42188 17.8711 1.57422 17.1094 2.13281 16.7031L4.57031 15.0781C5.12891 14.7227 5.89062 14.875 6.29688 15.4336C6.65234 15.9922 6.5 16.7539 5.94141 17.1094ZM27.8789 15.1289L30.3164 16.7539C30.875 17.1094 31.0273 17.8711 30.6719 18.4297C30.2656 18.9883 29.5039 19.1406 28.9453 18.7852L26.5078 17.1602C25.9492 16.7539 25.7969 15.9922 26.2031 15.4336C26.5586 14.875 27.3203 14.7227 27.8789 15.1289ZM22.8008 15.3828C21.7852 16.7539 20.7695 18.1758 20.3125 19.75H12.1875C11.6797 18.1758 10.6641 16.7539 9.64844 15.3828C9.39453 15.0273 9.14062 14.6719 8.88672 14.3164C7.87109 12.8438 7.3125 11.1172 7.3125 9.1875C7.3125 4.26172 11.2734 0.25 16.25 0.25C21.1758 0.25 25.1875 4.26172 25.1875 9.1875C25.1875 11.1172 24.5781 12.8438 23.5625 14.3164C23.3086 14.6719 23.0547 15.0273 22.8008 15.3828ZM20.3125 22.1875C20.3125 24.4727 18.4844 26.25 16.25 26.25C13.9648 26.25 12.1875 24.4727 12.1875 22.1875V21.375H20.3125V22.1875ZM17.4688 4.71875C17.4688 4.05859 16.9102 3.5 16.25 3.5C15.5391 3.5 15.0312 4.05859 15.0312 4.71875V10.4062C15.0312 11.1172 15.5391 11.625 16.25 11.625C16.9102 11.625 17.4688 11.1172 17.4688 10.4062V4.71875ZM16.25 16.5C17.1133 16.5 17.875 15.7891 17.875 14.875C17.875 14.0117 17.1133 13.25 16.25 13.25C15.3359 13.25 14.625 14.0117 14.625 14.875C14.625 15.7891 15.3359 16.5 16.25 16.5Z"
                    fill="#BC6C25"
                  />
                  <path
                    d="M3.50391 0.453125L5.94141 2.07812C6.5 2.48438 6.65234 3.24609 6.29688 3.80469C5.89062 4.36328 5.12891 4.51562 4.57031 4.10938L2.13281 2.48438C1.57422 2.12891 1.42188 1.36719 1.82812 0.808594C2.18359 0.25 2.94531 0.0976562 3.50391 0.453125ZM30.3164 2.48438L27.8789 4.10938C27.3203 4.51562 26.5586 4.36328 26.2031 3.80469C25.7969 3.24609 25.9492 2.48438 26.5078 2.07812L28.9453 0.453125C29.5039 0.0976562 30.2656 0.25 30.6719 0.808594C31.0273 1.36719 30.875 2.12891 30.3164 2.48438ZM1.21875 8.375H4.46875C5.12891 8.375 5.6875 8.93359 5.6875 9.59375C5.6875 10.3047 5.12891 10.8125 4.46875 10.8125H1.21875C0.507812 10.8125 0 10.3047 0 9.59375C0 8.93359 0.507812 8.375 1.21875 8.375ZM28.0312 8.375H31.2812C31.9414 8.375 32.5 8.93359 32.5 9.59375C32.5 10.3047 31.9414 10.8125 31.2812 10.8125H28.0312C27.3203 10.8125 26.8125 10.3047 26.8125 9.59375C26.8125 8.93359 27.3203 8.375 28.0312 8.375ZM5.94141 17.1094L3.50391 18.7344C2.94531 19.1406 2.18359 18.9883 1.82812 18.4297C1.42188 17.8711 1.57422 17.1094 2.13281 16.7031L4.57031 15.0781C5.12891 14.7227 5.89062 14.875 6.29688 15.4336C6.65234 15.9922 6.5 16.7539 5.94141 17.1094ZM27.8789 15.1289L30.3164 16.7539C30.875 17.1094 31.0273 17.8711 30.6719 18.4297C30.2656 18.9883 29.5039 19.1406 28.9453 18.7852L26.5078 17.1602C25.9492 16.7539 25.7969 15.9922 26.2031 15.4336C26.5586 14.875 27.3203 14.7227 27.8789 15.1289ZM22.8008 15.3828C21.7852 16.7539 20.7695 18.1758 20.3125 19.75H12.1875C11.6797 18.1758 10.6641 16.7539 9.64844 15.3828C9.39453 15.0273 9.14062 14.6719 8.88672 14.3164C7.87109 12.8438 7.3125 11.1172 7.3125 9.1875C7.3125 4.26172 11.2734 0.25 16.25 0.25C21.1758 0.25 25.1875 4.26172 25.1875 9.1875C25.1875 11.1172 24.5781 12.8438 23.5625 14.3164C23.3086 14.6719 23.0547 15.0273 22.8008 15.3828ZM20.3125 22.1875C20.3125 24.4727 18.4844 26.25 16.25 26.25C13.9648 26.25 12.1875 24.4727 12.1875 22.1875V21.375H20.3125V22.1875ZM17.4688 4.71875C17.4688 4.05859 16.9102 3.5 16.25 3.5C15.5391 3.5 15.0312 4.05859 15.0312 4.71875V10.4062C15.0312 11.1172 15.5391 11.625 16.25 11.625C16.9102 11.625 17.4688 11.1172 17.4688 10.4062V4.71875ZM16.25 16.5C17.1133 16.5 17.875 15.7891 17.875 14.875C17.875 14.0117 17.1133 13.25 16.25 13.25C15.3359 13.25 14.625 14.0117 14.625 14.875C14.625 15.7891 15.3359 16.5 16.25 16.5Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
            <button className="other-btn-Generated">
              <span className="icon">
                {/* <img src={img5} /> */}
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.375 13.25C7.76953 13.25 4.875 10.3555 4.875 6.75C4.875 3.19531 7.76953 0.25 11.375 0.25C14.9297 0.25 17.875 3.19531 17.875 6.75C17.875 10.3555 14.9297 13.25 11.375 13.25ZM9.03906 15.6875H13.6602C18.6875 15.6875 22.75 19.75 22.75 24.7773C22.75 25.5898 22.0391 26.25 21.2266 26.25H1.47266C0.660156 26.25 0 25.5898 0 24.7773C0 19.75 4.01172 15.6875 9.03906 15.6875Z"
                    fill="#BC6C25"
                  />
                  <path
                    d="M11.375 13.25C7.76953 13.25 4.875 10.3555 4.875 6.75C4.875 3.19531 7.76953 0.25 11.375 0.25C14.9297 0.25 17.875 3.19531 17.875 6.75C17.875 10.3555 14.9297 13.25 11.375 13.25ZM9.03906 15.6875H13.6602C18.6875 15.6875 22.75 19.75 22.75 24.7773C22.75 25.5898 22.0391 26.25 21.2266 26.25H1.47266C0.660156 26.25 0 25.5898 0 24.7773C0 19.75 4.01172 15.6875 9.03906 15.6875Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Generated;
