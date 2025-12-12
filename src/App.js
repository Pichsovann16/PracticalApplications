import "./App.css";
import Course from "./components/course/Course";
import Navbar from "./components/navigation/Navbar";
import Products from "./components/products/Products";
import Counter from "./components/state/Counter";
import ToDoListCard from "./components/to-do-list/ToDoList";
import Employees from "./components/employees/Employees";

function App() {
  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center m-2">
        <Course />
      </div>
      <div className="row g-0">
        <div className="col-md-6 mb-4">
          <Counter />
        </div>
        <div className="col-md-6 mb-4">
          <ToDoListCard />
        </div>
        <div className="m-4 p-4">
          <Products />
        </div>
      </div>
      <Employees />
    </div>
  );
}
export default App;
