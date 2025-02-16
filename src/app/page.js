// import Image from "next/image";
import AboutUsPage from "./components/aboutUs/page";
import BannerPage from "./components/banner/page";
import OurDesigner from "./components/designer/page";
import CostPage from "./components/developmentCost/page";
import OurGalleryPage from "./components/gallery/page";
import InteriorProcessPage from "./components/interiorProcess/page";
import SuccessCountPage from "./components/ourSuccessCount/page";
import ServicesPage from "./components/services/page";

export default function Home() {
  return (
    <div>
      <BannerPage></BannerPage>
      <div className="max-w-7xl mx-auto">
      <AboutUsPage></AboutUsPage>
      </div>
      <SuccessCountPage></SuccessCountPage>
      <div className="max-w-7xl mx-auto">
      <ServicesPage></ServicesPage>
      <OurGalleryPage></OurGalleryPage>
      <InteriorProcessPage></InteriorProcessPage>
      <CostPage></CostPage>
      <OurDesigner></OurDesigner>
      </div>
    </div>
  );
}
