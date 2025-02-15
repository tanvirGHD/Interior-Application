// import Image from "next/image";
import AboutUsPage from "./components/aboutUs/page";
import BannerPage from "./components/banner/page";
import OurGalleryPage from "./components/gallery/page";
import InteriorProcessPage from "./components/interiorProcess/page";
import SuccessCountPage from "./components/ourSuccessCount/page";
import ServicesPage from "./components/services/page";

export default function Home() {
  return (
    <div className="">
      <BannerPage></BannerPage>
      <div className="max-w-7xl mx-auto">
      <AboutUsPage></AboutUsPage>
      </div>
      <SuccessCountPage></SuccessCountPage>
      <div className="max-w-7xl mx-auto">
      <ServicesPage></ServicesPage>
      <OurGalleryPage></OurGalleryPage>
      <InteriorProcessPage></InteriorProcessPage>
      </div>
    </div>
  );
}
