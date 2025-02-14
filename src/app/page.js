// import Image from "next/image";
import AboutUsPage from "./components/aboutUs/page";
import BannerPage from "./components/banner/page";

export default function Home() {
  return (
    <div className="">
      <BannerPage></BannerPage>
      <AboutUsPage></AboutUsPage>
    </div>
  );
}
