import Contributors from "./home/Contributors";
import Footer from "./home/Footer";
import PreviewCard from "./home/PreviewCard";
import ProfileCardsLists from "./home/ProfileCardsLists";
import TitleSection from "./home/TitleSection";
import Extras from "./home/Extras";

export default function Home() {
  return (
    <div className="p-1 flex flex-col items-center">
      <TitleSection />
      <PreviewCard />
      <Contributors />
      <Extras />
      <ProfileCardsLists />
      <Footer />
    </div>
  );
}
