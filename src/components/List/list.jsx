import { useState } from "react";
import { Card } from "../Card/card.jsx";
import styles from "./style.module.scss";

export const currency = function (number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(number);
};

export function List({ listTransactions, removeElement }) {
  const teste = true;

  const [filter, setFilter] = useState("");

  return (
    <>
      <ul className={styles.list}>
          <p className={styles.p}>Resumo financeiro</p>
          

        {listTransactions.map((transaction, index) => {
          if (filter == "") {
            return (
              <Card
                key={index}
                transactionName={transaction.description}
                transactionType={transaction.type}
                transactionValue={currency(Math.abs(transaction.value))}
                removeElement={removeElement}
                index={index}
              />
            );
          } else {
            if (transaction.type == filter) {
              return (
                <Card
                  key={index}
                  transactionName={transaction.description}
                  transactionType={transaction.type}
                  transactionValue={currency(Math.abs(transaction.value))}
                  removeElement={removeElement}
                  index={index}
                />
              );
            }
          }
        })}
      </ul>
    </>
  );
}
