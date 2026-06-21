import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodo([...todo, task]);
    setTask("");
  };

  const moveTask = (index, source, setSource, target, setTarget) => {
    const item = source[index];
    setTarget([...target, item]);
    setSource(source.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Forge Kanban Board</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <h2>Todo</h2>
          {todo.map((t, i) => (
            <div key={i}>
              {t}
              <button
                onClick={() =>
                  moveTask(i, todo, setTodo, doing, setDoing)
                }
              >
                →
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2>Doing</h2>
          {doing.map((t, i) => (
            <div key={i}>
              {t}
              <button
                onClick={() =>
                  moveTask(i, doing, setDoing, done, setDone)
                }
              >
                →
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2>Done</h2>
          {done.map((t, i) => (
            <div key={i}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}