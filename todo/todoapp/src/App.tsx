import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: task };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-6 min-h-screen">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h1 className="mb-4 font-bold text-2xl text-center">To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
            className="p-2 border rounded w-full"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button className="bg-blue-500 px-4 py-2 rounded text-white" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-50 shadow p-2 rounded">
              <span>{todo.text}</span>
              <button className="bg-red-500 px-3 py-1 rounded text-white" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
