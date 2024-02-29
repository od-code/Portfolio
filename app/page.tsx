import AppBar from "@/components/appbar";
import CTASection from "@/sections/cta-section";
import FeedSection from "@/sections/feed-section";
import WorkSection from "@/sections/work-section";
import ProfileSection from "@/sections/profile-section";
import SkillsSection from "@/sections/skills-section";

export default function Home() {
  return (
    <main>
      <AppBar />
      <ProfileSection />
      <FeedSection />
      <SkillsSection />
      <WorkSection />
      <CTASection />
    </main>
  );
}
