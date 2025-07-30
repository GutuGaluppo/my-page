import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Quotes from "./components/Quotes";
import SkillSphere from "./components/SkillSphere";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <HeroSection />
        <Experience />
        <SkillSphere widthVw={900} heightVh={600} />
        <Form />
        <Quotes />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
