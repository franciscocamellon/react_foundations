import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import axios from "axios";
import Modal from "react-modal";
import styles from "./app.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [alunos, setAlunos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [idSelecionado, setIdSelecionado] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  async function addAluno(event) {
    event.preventDefault();

    try {
      await axios.post("https://api-aluno.vercel.app/aluno", {
        nome: formData.nome,
        matricula: formData.matricula,
        curso: formData.curso,
        bimestre: formData.bimestre,
      });
      getStudent();
      alert("Sucesso ao salvar aluno!");
    } catch (error) {
      alert("Erro ao salvar aluno!");
    }
  }

  function preencherFormulario(aluno) {
    console.log(aluno);
    setFormData({
      nome: aluno.nome,
      matricula: aluno.matricula,
      curso: aluno.curso,
      bimestre: aluno.bimestre,
    });
    setIdSelecionado(aluno._id);
  }

  async function updateStudent(event) {
    event.preventDefault();

    try {
      await axios.put(
        `https://api-aluno.vercel.app/aluno/${idSelecionado}`,
        formData
      );
      setFormData({ nome: "", matricula: "", curso: "", bimestre: "" });
      setIdSelecionado("");
      alert("Sucesso ao editar aluno!");
      getStudent();
    } catch (error) {
      alert("Erro ao editar aluno!");
    }
  }

  async function removeAluno() {
    try {
      await axios.delete(`https://api-aluno.vercel.app/aluno/${idSelecionado}`);
      getStudent();
      alert("Sucesso ao deletar aluno!");
      setIdSelecionado("");
      setModalVisibility(false);
    } catch (error) {
      alert("Erro ao deletar aluno!");
    }
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
      const response = await axios.get("https://api-aluno.vercel.app/cursos");
      setCourses(response.data.cursos);
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

      <form
        className={styles.form}
        onSubmit={(event) =>
          idSelecionado ? updateStudent(event) : addAluno(event)
        }
      >
        <input
          placeholder="Nome"
          value={formData.nome}
          onChange={(event) =>
            setFormData({ ...formData, nome: event.target.value })
          }
        />
        <input
          placeholder="Matrícula"
          value={formData.matricula}
          onChange={(event) =>
            setFormData({ ...formData, matricula: event.target.value })
          }
        />
        <select
          placeholder="Curso"
          value={formData.curso}
          onChange={(event) =>
            setFormData({ ...formData, curso: event.target.value })
          }
        >
          {courses.map((course) => (
            <option key={course.id}>{course.name}</option>
          ))}
        </select>

        <input
          placeholder="Bimestre"
          value={formData.bimestre}
          onChange={(event) =>
            setFormData({ ...formData, bimestre: event.target.value })
          }
        />

        <button type="submit">Salvar</button>
      </form>

      <div className={styles.container_table}>
        <h3>Alunos Cadastrados</h3>
        {alunos.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ordem</th>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Curso</th>
                <th>Bimestre</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno, index) => (
                <tr key={aluno._id}>
                  <td>{index + 1}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.matricula}</td>
                  <td>{aluno.curso}</td>
                  <td>{aluno.bimestre}</td>
                  <td>
                    <FiEdit
                      color="#0fba3f"
                      cursor="pointer"
                      onClick={() => preencherFormulario(aluno)}
                    />
                    <FiTrash2
                      color="#f90000"
                      cursor="pointer"
                      onClick={() => {
                        setIdSelecionado(aluno._id);
                        setModalVisibility(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h4>Não há alunos cadastrados</h4>
        )}
      </div>
      <Modal
        isOpen={modalVisibility}
        style={customStyles}
        onRequestClose={() => {
          setIdSelecionado("");
          setModalVisibility(false);
        }}
      >
        <h2 style={{ color: "black" }}>Confirmação</h2>
        <p style={{ color: "black" }}>Deseja remover o item selecionado?</p>
        <button onClick={removeAluno}>Sim</button>
        <button
          onClick={() => {
            setIdSelecionado("");
            setModalVisibility(false);
          }}
        >
          Não
        </button>
      </Modal>
    </div>
  );
}

export default App;
