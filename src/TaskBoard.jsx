import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import TaskBar from "./components/TaskBar/TaskBar";

function TaskBoard() {
  return (
    <>
      <Header />
      <HeroSection />
      <TaskBar />
      <Footer />
    </>
  );
}

export default TaskBoard;
