import { ScaleLoader, SyncLoader } from "react-spinners";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader">
      <SyncLoader color="#000" margin={4} size={17} />
    </div>
  );
}
