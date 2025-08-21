import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ParallaxProvider } from "react-scroll-parallax";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Quotes from "./components/Quotes";

const theme = createTheme({
  typography: {
    fontFamily:
      '"Inter", "Instrument Serif","Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: "#3B82F6",
    },
    secondary: {
      main: "#F59E0B",
    },
    background: {
      default: "rgb(219, 219, 213)",
    },
  },
});

function App() {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Header />
          <HeroSection />
          <Experience />
          <Quotes />
          <Form />
          <Footer />
        </div>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
