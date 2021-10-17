import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GolfCourseCard from './components/golfCourse/GolfCourseCard';
import GolfGrid from './components/golfCourse/GolfGrid';

function App() {
  return (
    <div>
      <Navbar />
      <GolfGrid />
    </div>
  );
}

export default App;
