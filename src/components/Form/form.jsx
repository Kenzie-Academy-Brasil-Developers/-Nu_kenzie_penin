import { useState } from "react";
import styles from "./style.module.scss";


export const Form = ({ listTransactions, setListTransactions }) => {
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionType, setTransactionType] = useState("entrada");

  function addValue() {
    if (transactionValue.length > 0 && transactionDescription.length > 0) {
      if (transactionType == "entrada") {
        setListTransactions([
          ...listTransactions,
          {
            description: transactionDescription,
            type: transactionType,
            value: parseFloat(transactionValue),
          },
        ]);
      } else {
        setListTransactions([
          ...listTransactions,
          {
            description: transactionDescription,
            type: transactionType,
            value: -parseFloat(transactionValue),
          },
        ]);
      }

      setTransactionValue("");
      setTransactionDescription("");
    } else {
      alert("preencha todos os campos")
      
    }
  }

  function changeType(e) {
    setTransactionType(e.target.value);
  }

  return (
    <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
      <div className={styles.div1}>
        <p>Descrição</p>
        <input
          className={styles.input1}
          type="text"
          name="descrição"
          value={transactionDescription}
          placeholder="Digite aqui sua descrição"
          autoComplete="off"
          onChange={(event) => {
            setTransactionDescription(event.target.value);
          }}
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <section className={styles.form_values}>
        <div className={styles.div2}>
          <p>Valor (R$)</p>
          <input
            className={styles.form_values_input}
            type="number"
            step="0.01"
            name="valor_transção"
            value={transactionValue}
            placeholder="1"
            onChange={(event) => {
              setTransactionValue(event.target.value);
            }}
          />
        </div>
        <div className={styles.type__value}>
          <p>Tipo de valor</p>
          <select className={styles.select} name="" value={transactionType} onChange={changeType}>
            <option className={styles.options} value="entrada">Entrada</option>
            <option className={styles.options} value="saida">Saída</option>
          </select>
        </div>
      </section>

      <button className={styles.button} type="submit" onClick={(x) => addValue()}>
        Inserir valor
      </button>
    </form>
  );
};
