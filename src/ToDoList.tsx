import { SetStateAction, useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([
    "Task #1 Esempio",
    "Task #2 Esempio",
    "Task #3 Esempio",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index: any) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Update state after filtering
  }
  function moveTaskUp(index: any) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="to-do-list">
        <h1>Lista Delle Cose Da Fare</h1>
        <div>
          <input
            type="text"
            placeholder="Inserisci un Task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Aggiungi
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Rimuovi
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ⬆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                ⬇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
