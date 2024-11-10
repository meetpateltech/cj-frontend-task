import Navigation from "@/components/Header";
import HeroSection from "@/components/HeroSection"
import PartnerSection from "@/components/PartnerSection"
import FeatureSection from "@/components/FeatureSection"
import ProgramSection from "@/components/ProgramSection"
import AchievementSection from "@/components/AchievementSection"
import Footer from "@/components/Footer"
import EnquireSection from "@/components/EnquireSection"
import DownloadSection from "@/components/DownloadSection"
import NewsSection from "@/components/NewsSection";
import MentorShowcase from "@/components/MentorShowcase"
import LearningJourney from "@/components/LearningJourney";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
    <Navigation />
    <HeroSection />
    <PartnerSection />
    <FeatureSection />
    <ProgramSection />
    <AchievementSection />
    <TestimonialSlider />
    <LearningJourney />
    <MentorShowcase />
    <NewsSection />
    <DownloadSection />
    <EnquireSection />
    <Footer />
    </>
  );
}
