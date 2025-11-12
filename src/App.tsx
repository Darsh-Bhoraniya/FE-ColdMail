import { Toaster } from "sonner";
import "./App.css";
import { Router } from "./routes/sections/index";
import LandingPageView from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router />

      {/* <LandingPageView /> */}
    </>
  );
}

export default App;
