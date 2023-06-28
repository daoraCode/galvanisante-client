import { useContext } from "react";
import { Link } from "react-router-dom";
import "./memorycard.css";

export const MemoryCard = ({ memory }) => {
  return (
    <div className="mry-crd-ctn jst-ct-ctr a-itm-ctr">
      <div className="mry-text-ctn">
        <p className="mry-p-theme">{memory.theme}</p>
      </div>
      <Link to={`/memory/${memory._id}`}>
        <img
          loading="lazy"
          className="mry-img-cover"
          src={`${import.meta.env.VITE_BACKEND_API}/${memory.cover}`}
        />
      </Link>
    </div>
  )
};
