import Contributors from "./Contributors";
import Extras from "./Extras";
import PreviewCard from "./PreviewCard";
import TitleSection from "./TitleSection";
import ProfileCardsLists from "./ProfileCardsLists";
import Footer from "./Footer";


export default function Home() {
    return (
        <div className="p-1">
            <TitleSection />
            <PreviewCard />
            <Contributors />
            <Extras />
            <ProfileCardsLists />
            <Footer />
        </div>
    )
}