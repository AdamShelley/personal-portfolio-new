import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Data
import { projectsWIP } from "../../projects-wip";

// Components
import WhyContent from "./langai/WhyContent";
import Contents from "./langai/Contents";
import GoalSection from "./langai/GoalSection";
import AndroidDownload from "./langai/AndroidDownload";
import ProjectOverview from "./langai/ProjectOverview";
import TechStack from "./langai/TechStack";
import PatchNotes from "./langai/PatchNotes";
import ImageModal from "./shared/ImageModal";

// Styles
import { SmallBox } from "../styles/styles";
import { PageContainer } from "../styles/PageContainer";
import PageBackButton from "./shared/BackButton";

const LangAI = () => {
  const location = useLocation();
  let project = location.state;
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    project = projectsWIP[0];
  }

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `LangAI | Adam Shelley`;
  }, []);

  return (
    <PageContainer>
      {project && (
        <div>
          <PageBackButton />

          <h2>{project.name}</h2>

          <ul>
            {project.skills.map((skill) => (
              <SmallBox key={skill}>{skill}</SmallBox>
            ))}
          </ul>

          <Contents />
          <WhyContent />
          <GoalSection />
          <AndroidDownload />
          <ProjectOverview project={project} openImage={openImage} />
          <TechStack />
          <PatchNotes />
          <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
        </div>
      )}
    </PageContainer>
  );
};

export default LangAI;
