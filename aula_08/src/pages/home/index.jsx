import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import styles from "./styles.module.css"

function Home() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  function saveTask(event) {
    event.preventDefault();

    const copy = [...tasks];

    copy.push({
      title,
      category,
      date,
      description
    })

    setTasks(copy)

    localStorage.setItem("@tasks", JSON.stringify(copy))

    setTitle("");
    setCategory("");
    setDate("");
    setDescription("");

  }

  function deleteTask(taskIndex) {
    const filteredTask = tasks.filter((task, index) => taskIndex !== index)

    setTasks(filteredTask);
  }

  function retrieveTasks() {
    const stringTask = localStorage.getItem("@tasks")

    if (stringTask) {
      const arrayTask = JSON.parse(stringTask);
      setTasks(arrayTask)
    }
    console.log(stringTask)
  }

  useEffect(() => {
    retrieveTasks();
  }, []);



  return (
    <div className={styles.container}>
      <div className={styles.container_form}>
        <form className={styles.form} onSubmit={(event) => saveTask(event)}>
          <h2>Nova tarefa</h2>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Título" />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Selecione...</option>
            <option>Trabalhar</option>
            <option>Estudar</option>
          </select>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Data" />
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Descrição" />
          <button type='submit'>Salvar</button>
        </form>
      </div>
      <div className={styles.container_list}>
        <div className={styles.container_title}>
          <h3>Lista de tarefas</h3>
          <p>Total: {tasks.length} tarefas</p>
        </div>

        {tasks.map((task, index) => (
          <div className={styles.card}>
            <div>
              <p className={styles.bold}>{task.title}</p>
              <p>{task.category}</p>
              <p>{task.description}</p>
            </div>
            <div>
              <p>{task.date}</p>
              <FaTrashAlt
                color='red'
                size={20}
                onClick={() => deleteTask(index)}
              />
            </div>
          </div>
        ))}



      </div>
    </div>
  )
}

export default Home