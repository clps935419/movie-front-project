import { selectMaskZIndex } from "@/store/slice/maskSlice";
import { useSelector } from "react-redux";
import { selectMaskArr } from "../store/slice/maskSlice";
import ReactDOM from "react-dom";
import clsx from "clsx";

function Mask() {
  const maskQueueArr = useSelector(selectMaskArr);
  const zIndex = useSelector(selectMaskZIndex);

  return ReactDOM.createPortal(
    <div
      style={{ zIndex, background: "rgba(31, 31, 31, 0.25)" }}
      className={clsx(
        "position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center",
        {
          invisible: maskQueueArr.length === 0,
        }
      )}
    >
      <div className="spinner-border" role="status"></div>
    </div>,
    document.body
  );
}

export default Mask;
