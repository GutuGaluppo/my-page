import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ParallaxProvider } from "react-scroll-parallax";
import CanvasBackground from "./components/CanvasBackground";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Quotes from "./components/Quotes";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeModeProvider, useThemeMode } from "./contexts/ThemeContext";
import { createAppTheme } from "./theme";
import ParticleFieldBackground from "./components/ParticleFieldBackground";

const AppContent: React.FC = () => {
  const { mode } = useThemeMode();
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <div>
          {/*<ParticleFieldBackground />*/}
          <CanvasBackground />
          <Header />
          <HeroSection />
          <Experience />
          <Quotes />
          <Form />
          <Footer />
          <ScrollToTop />
          <ThemeToggle />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeModeProvider>
      <AppContent />
    </ThemeModeProvider>
  );
}

export default App;
