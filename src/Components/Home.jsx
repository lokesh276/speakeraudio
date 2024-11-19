import NewProduct from "./NewProduct";
import HomeProductCrt from "./HomeProductCrt";
import UpgradeSetCard from "./UpgradeSetCard";
import HalfSpeakerComponent from "./HalfSpeakerComponent";
import BestAudio from "./BestAudio";
import FixedFirstComponent from "./BrokenFirstComponent";

export default function Home() {
  return (
    <div>
      <NewProduct />
      <HomeProductCrt />
      <UpgradeSetCard />
      <HalfSpeakerComponent />
      <FixedFirstComponent />
      <BestAudio />
    </div>
  );
}
