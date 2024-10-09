import VerificationCard from "./VerificationCard";
import Vurl from "../Images/approved.png";
import Vtext from "../Images/clipboard.png";
import Vimage from "../Images/camera.png";
import Vbarcode from "../Images/barcode.jpg";

const VerificationMethods = () => {
  const methods = [
    {
      img: Vurl,
      text: "Url Verification",
    },
    {
      img: Vtext,
      text: "Manual Verification",
    },
    {
      img: Vimage,
      text: "Image Verification",
    },
    {
      img: Vbarcode,
      text: "Barcode Verification",
    },
  ];

  return (
    <section className="VerificationMethods text-center">
      <h2 className="Heading">Select Verification Method</h2>

      <div className="cardContainer">
        {methods.map((item) => (
          <VerificationCard key={item} val={item} />
        ))}
      </div>
    </section>
  );
};

export default VerificationMethods;
