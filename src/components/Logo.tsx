import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

const Logo = ({
  className = "h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80",
  linkClassName = "flex-shrink-0 group",
}: LogoProps) => (
  <Link to="/" className={linkClassName}>
    <img
      src="/logo-noura.png"
      alt="NOURA"
      className={className}
    />
  </Link>
);

export default Logo;
