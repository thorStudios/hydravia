import Blog from "../../component/Blog";
import Cta from "../../component/Cta";
import FeatureProducts from "../../component/FeatureProducts";
import Reviews from "../../component/Reviews";

export default function Home() {
  return (
    <div className="uppercase font-bold text-5xl">
      <FeatureProducts />
      <Reviews />
      <Cta />
      <Blog />
    </div>
  );
}
