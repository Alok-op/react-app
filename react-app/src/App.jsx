import { Routes, Route } from "react-router";
import List from "./List";
import DetailInfo from "./DetailInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List/>} />
      <Route path="/details/:id" element={<DetailInfo/>} />
    </Routes>
  )
}

export default App;