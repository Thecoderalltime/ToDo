export default function AddTaskButton({ handleShowFrom, handleAllDelete}) {
  return (
    <div className="mb-14addTask items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleShowFrom}
        >
          Add Task
        </button>
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold" onClick={handleAllDelete}>
          Delete All
        </button>
      </div>
    </div>
  );
}
