import Banner from "../../component/Banner";
import Blog from "../../component/Blog";
import Cta from "../../component/Cta";
import FeatureProducts from "../../component/FeatureProducts";
import Reviews from "../../component/Reviews";

export default function Home() {
  return (
    <div>
      <Banner/>
      <FeatureProducts />
      <Reviews />
      <Cta />
      <Blog />
    </div>
  );
}
