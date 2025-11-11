import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/Layouts/MainLayout"
import Home from "./pages/home"
import Community from "./pages/community"
import Progress from "./pages/progress/Index"
import Meals from "./pages/meals"
import Workouts from "./pages/workouts"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"


const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/meal" element={<Meals />} />
        <Route path="/workouts" element={<Workouts />} />
      </Route>

      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/*" element={<NotFound />}/>
    </Routes>
  )
}

export default App