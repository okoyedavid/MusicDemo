import { Link } from "react-router-dom";

function Button({ children, to }) {
  const baseClass =
    "my-2 bg-btn px-4 py-2 hover:bg-btnHover transition-all rounded-md text-btnText focus:ring shadow-sm shadow-tertiary font-semibold";
  if (to)
    return (
      <Link className={baseClass} to={to}>
        {children}
      </Link>
    );
  return <button className={baseClass}>{children}</button>;
}

export default Button;
