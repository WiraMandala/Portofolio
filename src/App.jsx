import { lazy, Suspense } from "react";
const ProjectDetail = lazy(() => import("./component/Project/ProjectDetail"));
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects/:id"
              element={
                <Suspense fallback={<div className="min-h-screen" />}>
                  <ProjectDetail />
                </Suspense>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
