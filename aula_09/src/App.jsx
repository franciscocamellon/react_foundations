import React, { useState } from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import styles from "./app.module.css"

function App() {
  const [alunos, setAlunos] = useState([]);
  const [indexSelecionado, setIndexSelecionado] = useState(-1);
  const [formData, setFormData] = useState({ nome: "", matricula: "", curso: "", bimestre: "" });

  function addAluno(event) {
    event.preventDefault();

    setAlunos([...alunos, formData]);

    setFormData({ nome: "", matricula: "", curso: "", bimestre: "" });
  }

  function preencherFormulario(aluno, index) {
    setIndexSelecionado(index);
    setFormData({
      nome: aluno.nome,
      matricula: aluno.matricula,
      curso: aluno.curso,
      bimestre: aluno.bimestre
    });

  }

  function editarAluno(event) {
    event.preventDefault();
    const copyAlunos = [...alunos];

    copyAlunos[indexSelecionado].nome = formData.nome;
    copyAlunos[indexSelecionado].matricula = formData.matricula;
    copyAlunos[indexSelecionado].curso = formData.curso;
    copyAlunos[indexSelecionado].bimestre = formData.bimestre;

    setAlunos(copyAlunos);
    setFormData({ nome: "", matricula: "", curso: "", bimestre: "" });
    setIndexSelecionado(-1);
  }

  function removeAluno(posicaoArray) {
    const alunosFiltrados = alunos.filter(
      (aluno, index) => posicaoArray !== index
    );

    setAlunos(alunosFiltrados);
  }

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
        <input
          placeholder='Curso'
          value={formData.curso}
          onChange={(event) =>
            setFormData({ ...formData, curso: event.target.value })
          } />
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