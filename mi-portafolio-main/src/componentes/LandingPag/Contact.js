import styled from "styled-components";

const HeaderStyle = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 50px;
  border-bottom: 3px solid azure;
`;
const Contactos = styled.p`
  font-family: "Times New Roman", serif;
  font-size: 28px;
  text-align: right;
  padding-right: 70px;
  margin: 0;
  font-size: calc(18px + (28 - 18) * ((100vw - 300px) / (1600 - 300)));

`;
const Iconos = styled.image`
  vertical-align: baseline;
  padding-left: 20px;
`;

function Contact() {
  return (
    <HeaderStyle>
      <Contactos>
        <span translate="no"> Contactanos por:</span>
        <Iconos>{IconoDeLinkedin()}</Iconos>
        <Iconos>{IconoInstagram()}</Iconos>
        <Iconos>{IconoTwitter()}</Iconos>
        <Iconos>{IconoFacebook()}</Iconos>
      </Contactos>
    </HeaderStyle>
  );
}

function IconoDeLinkedin() {
  // es un componente siendo llamado como una funcion
  return (
    <a href="https://www.linkedin.com">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <circle cx="4" cy="4" r="2" fill="#f7fffe" fill-opacity="0">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.18s"
            values="0;1"
          />
        </circle>
        <g
          fill="none"
          stroke="#f7fffe"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        >
          <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.18s"
              dur="0.24s"
              values="12;0"
            />
          </path>
          <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.54s"
              dur="0.24s"
              values="12;0"
            />
          </path>
          <path
            stroke-dasharray="24"
            stroke-dashoffset="24"
            d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.78s"
              dur="0.24s"
              values="24;0"
            />
          </path>
        </g>
      </svg>
    </a>
  );
}
function IconoTwitter() {
  return (
    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
      <svg
        class="IconTwitter"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 16 16"
      >
        <path
          fill="white" // Azul claro similar al de Twitter
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        />
      </svg>
    </a>
  );
}
function IconoInstagram() {
  return (
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="IconInstagram"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        />
      </svg>
    </a>
  );
}
function IconoFacebook() {
  return (
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#f7fffe"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        >
          <path
            stroke-dasharray="24"
            stroke-dashoffset="24"
            d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.48s"
              values="24;0"
            />
          </path>
          <path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.24s"
              values="8;0"
            />
          </path>
        </g>
      </svg>
    </a>
  );
}
export default Contact;
