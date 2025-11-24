import FeatureProducts from "../../component/FeatureProducts";
import Reviews from "../../component/Reviews";

export default function Home() {
  return (
    <div className="uppercase font-bold text-5xl">
      <FeatureProducts />
      <Reviews />
    </div>
  );
}
