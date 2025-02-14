// import Image from "next/image";
import AboutUsPage from "./components/aboutUs/page";
import BannerPage from "./components/banner/page";
import SuccessCountPage from "./components/ourSuccessCount/page";

export default function Home() {
  return (
    <div className="">
      <BannerPage></BannerPage>
      <div className="max-w-7xl mx-auto">
      <AboutUsPage></AboutUsPage>
      </div>
      <SuccessCountPage></SuccessCountPage>
    </div>
  );
}
