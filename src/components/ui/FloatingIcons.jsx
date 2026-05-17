import {
  FaCode,
  FaBug,
  FaTerminal,
} from "react-icons/fa";

function FloatingIcons() {
  return (
    <>
      <FaCode
        className="
          float
          fixed
          top-24
          left-8
          text-green-500
          text-4xl
          opacity-20
          pointer-events-none
        "
      />

      <FaBug
        className="
          float
          fixed
          bottom-20
          right-10
          text-green-400
          text-3xl
          opacity-20
          pointer-events-none
        "
      />

      <FaTerminal
        className="
          float
          fixed
          top-1/2
          right-20
          text-green-500
          text-5xl
          opacity-20
          pointer-events-none
        "
      />
    </>
  );
}

export default FloatingIcons;