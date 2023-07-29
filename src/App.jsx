import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signin from './Signin.jsx';
import Signup from "./Signup.jsx"
import Appbar from './Appbar.jsx';
import AddCourse from './AddCourse.jsx';
import Courses from './Courses.jsx';
import Course from './Course.jsx';


function App() {
  return (
    <div style={{
      width: "100vm",
      height: "100vh",
      backgroundColor: "#eeeeee"}}
      >
      <Router>
      <Appbar />
        <Routes>
          <Route path={'/addcourse'} element={<AddCourse />} />
          <Route path={'/course/:courseId'} element={<Course />} />
          <Route path={'/courses'} element={<Courses />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/signin"} element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
