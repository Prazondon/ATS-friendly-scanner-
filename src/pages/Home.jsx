import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import UploadSection from "../components/upload/UploadSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
    title="Analyze Your Resume with AI"
    description="Upload your resume and receive AI-powered feedback instantly."
    buttonText="Upload Resume"
    buttonText2="Learn More"
    />
      <UploadSection />
      <FeatureSection />
      <Footer />
    </>
  );
}

export default Home;