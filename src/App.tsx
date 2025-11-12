import { Toaster } from "sonner";
import "./App.css";
import { Router } from "./routes/sections/index";
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
