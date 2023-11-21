import Shoop_Bag from "./Shoop_Bag";
import img1 from "./CC1_PICT/shoe1.jfif";
import img2 from "./CC1_PICT/shoe2.jfif";
import img3 from "./CC1_PICT/scarf1.jfif";

const MyApp = () => {
  return (
    <div>
      <table style={{width:"100%"}}>
        <tr>
          <Shoop_Bag img={img1} name="Shoe1" amnt="$549" />
        </tr>
        <tr>
          <Shoop_Bag img={img2} name="Shoe2" amnt="$870" />
        </tr>
        <tr>
          <Shoop_Bag img={img3} name="Scarf" amnt="$349" />
        </tr>
      </table>
    </div>
  );
};

export default MyApp;
