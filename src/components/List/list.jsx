import { useState } from "react";
import { Card } from "../Card/card.jsx";
import "./list.css";

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
      <ul className="list">
        <div className="list_filter">
          <p>Resumo financeiro</p>

          <div className="list_filter__buttons">
            <button
              style={{ backgroundColor: "#e34981" }}
              value="todos"
              onClick={(event) => {
                setFilter("");
                const butReceived = document.getElementById("received");
                const butExit = document.getElementById("exit");
                event.target.style.backgroundColor = "#e34981";
                butExit.style.backgroundColor = "#e9ecef";
                butReceived.style.backgroundColor = "#e9ecef";
              }}
              id="all"
            >
              Todos
            </button>

            <button
              value="entrada"
              onClick={(event) => {
                setFilter("entrada");
                const butAll = document.getElementById("all");
                const butExit = document.getElementById("exit");
                event.target.style.backgroundColor = "#e34981";
                butAll.style.backgroundColor = "#e9ecef";
                butExit.style.backgroundColor = "#e9ecef";
              }}
              id="received"
            >
              Entradas
            </button>

            <button
              value="saida"
              onClick={(event) => {
                setFilter("saida");
                const butAll = document.getElementById("all");
                const butReceived = document.getElementById("received");
                event.target.style.backgroundColor = "#e34981";
                butReceived.style.backgroundColor = "#e9ecef";
                butAll.style.backgroundColor = "#e9ecef";
              }}
              id="exit"
            >
              Despesas
            </button>
          </div>
        </div>

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
