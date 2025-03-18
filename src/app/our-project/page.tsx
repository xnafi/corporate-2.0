import BannerSection from "@/components/re-ui/BannerSection";
import CollaborateWork from "@/components/view/CollaborateWork";
import Project from "@/components/view/Project/Project";


const OurProject = () => {
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <BannerSection />

      {/* Content Section */}
      <div className="mt-6 sm:mt-12">
        <Project />
      </div>

      <div className="mt-6 sm:mt-12">
        <CollaborateWork />
      </div>
    </div>
  );
};

export default OurProject;
