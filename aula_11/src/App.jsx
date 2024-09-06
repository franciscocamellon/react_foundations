import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios"
import styles from "./app.module.css"

function App() {
  const [alunos, setAlunos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [indexSelecionado, setIndexSelecionado] = useState(-1);
  const [formData, setFormData] = useState({ nome: "", matricula: "", curso: "", bimestre: "" });

  async function addAluno(event) {
    event.preventDefault();

    try {
      await axios.post("https://api-aluno.vercel.app/aluno", {
        nome: formData.nome,
        matricula: formData.matricula,
        curso: formData.curso,
        bimestre: formData.bimestre
      })
      getStudent();
      alert("Sucesso ao salvar aluno!");
    } catch (error) {
      alert("Erro ao salvar aluno!");
    }
  }

  function preencherFormulario(aluno, index) {

  }

  function editarAluno(event) {

  }

  function removeAluno(posicaoArray) {

  }

  async function getStudent() {
    try {
      const response = await axios.get("https://api-aluno.vercel.app/aluno");
      setAlunos(response.data);
    } catch (error) {
      alert("Erro ao buscar dados dos alunos!");
    }
  }

  async function getCourses() {
    try {
      const response = await axios.get("https://api-aluno.vercel.app/cursos")
      setCourses(response.data.cursos)
    } catch (error) {
      alert("Erro ao buscar dados dos cursos!");
    }
  }

  useEffect(() => {
    getStudent();
  }, []);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Diário eletrônico</h1>

      <form className={styles.form} onSubmit={(event) =>
        indexSelecionado >= 0 ? editarAluno(event) : addAluno(event)}>
        <input
          placeholder='Nome'
          value={formData.nome}
          onChange={(event) =>
            setFormData({ ...formData, nome: event.target.value })
          } />
        <input
          placeholder='Matrícula'
          value={formData.matricula}
          onChange={(event) =>
            setFormData({ ...formData, matricula: event.target.value })
          } />
        <select
          placeholder='Curso'
          value={formData.curso}
          onChange={(event) =>
            setFormData({ ...formData, curso: event.target.value })
          } >

          {courses.map((course) => (
            <option key={course.id}>{course.name}</option>
          )
          )}

        </select>

        <input
          placeholder='Bimestre'
          value={formData.bimestre}
          onChange={(event) =>
            setFormData({ ...formData, bimestre: event.target.value })
          } />

        <button type='submit'>Salvar</button>
      </form>

      <div className={styles.container_table}>
        <h3>Alunos Cadastrados</h3>
        {alunos.length > 0 ?
          <table className={styles.table}>
            <tr>
              <th>Ordem</th>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Curso</th>
              <th>Bimestre</th>
              <th>Ações</th>
            </tr>
            {alunos.map((aluno, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.matricula}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.bimestre}</td>
                <td>
                  <FiEdit
                    color='#0fba3f'
                    cursor='pointer'
                    onClick={() => preencherFormulario(aluno, index)}
                  />
                  <FiTrash2
                    color='#f90000'
                    cursor='pointer'
                    onClick={() => removeAluno(index)}
                  />
                </td>
              </tr>
            ))}
          </table> :
          <h4>Não há alunos cadastrados</h4>
        }
      </div>
    </div>
  )
}

export default App