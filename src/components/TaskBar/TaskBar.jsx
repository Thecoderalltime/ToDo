import { useState } from "react";
import Search from "../Search/Search";
import AddTaskButton from "./AddTaskButton";
import ShowTask from "./ShowTask";
import AddModal from "../AddTaskForm/AddModal";

export default function TaskBar() {
  const initaialTask = {
    id: "jsadkgje2",
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently",
    tags: ["Web", "Paython"],
    priority: "Low",
    isFavorite: true,
  };

  const [showTask, setShowTask] = useState([initaialTask]);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState();

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setShowTask([...showTask, newTask]);
    } else {
      setShowTask(
        showTask.map((task) => {
          if (task.id === isAdd.id) {
            return newTask;
          }
          return newTask;
        })
      );
    }

    setShowModal(false);
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setShowModal(true);
  };
  const handleDelete = (deleteTask) => {
    const deletedTask = showTask.filter((task) => task.id !== deleteTask.id);
    setShowTask(deletedTask);
  };
  const handleAllDelete = () => {
    showTask.length = 0;
    setShowTask([...showTask]);
  };

  const handleFavorite = (taskId) => {
    const index = showTask.findIndex((task) => task.id === taskId);
    const newTask = [...showTask];
    newTask[index].isFavorite = !newTask[index].isFavorite;
    setShowTask(newTask);
  };
  const handleHide = () => {
    setShowModal(false);
    setEditTask(null);
  };

  const handleSearch = (search) => {
    console.log(search);
    const filtered = showTask.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
    setShowTask([...filtered]);
  };
  return (
    <section
      className=" bg-[#1D212B] text-white"
      id="tasks bg-black text-white"
    >
      {showModal && (
        <AddModal
          handleAddTask={handleAddEditTask}
          editTask={editTask}
          handleHide={handleHide}
        />
      )}
      <div className="container">
        {/* Search Box */}
        <Search onSearch={handleSearch} />
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <AddTaskButton
            handleShowFrom={() => setShowModal(true)}
            handleAllDelete={handleAllDelete}
          />
          {showTask.length>0 ?<ShowTask
            showTask={showTask}
            onEdit={handleEdit}
            handleDelete={handleDelete}
            handleFavorite={handleFavorite}
          /> :<p className="text-center text-3xl"> NO Task Found</p>}
          
        </div>
      </div>
    </section>
  );
}
