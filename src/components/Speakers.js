import { data } from "../SpeakerData";
import "../pages/css/local-styles.css";
import SpeakersList from "./SpeakersList";

function Speakers() {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;
