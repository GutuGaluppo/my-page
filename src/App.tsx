import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ParallaxProvider } from "react-scroll-parallax";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Quotes from "./components/Quotes";
import ScrollToTop from "./components/ScrollToTop";
import theme from "./theme";

function App() {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header />
          <HeroSection />
          <Experience />
          <Quotes />
          <Form />
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
