import strings from "../../locales/en.json";

export const EmailIcon = (props) => {
  const { height, width, dark } = props;
  return (
    <a
      className="navbar-brand"
      href={strings.socialLinks.emailUrl}
      target="_blank"
      rel="noopener noreferrer me"
      title={strings.socialLinks.email}
    >
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 21"
        fill="none"
        stroke={dark ? "white" : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </a>
  );
};
