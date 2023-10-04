import "./App.scss";
import { useState } from "react";
import { Form } from "./components/Form/form.jsx";
import { Header } from "./components/Header/header.jsx";
import { List } from "./components/List/list.jsx";
import { TotalMoney } from "./components/TotalMoney/money.jsx";


function App() {
  const [home, setHome] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  function removeElement(id) {
    const filter = listTransactions.filter((x) => {
      if (listTransactions.indexOf(x) != id) {
        return x;
      }
    });
    setListTransactions(filter);
  }

  return (
    <>
      <div className="App">
        <Header setHome={setHome}></Header>
        <div className="form_box">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          ></Form>
          {listTransactions.length > 0 ? (
            <TotalMoney
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              removeElement={removeElement}
            ></TotalMoney>
          ) : (
          <div></div>
          )}
        </div>

        {listTransactions.length > 0 ? (
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            removeElement={removeElement}
          ></List>
        ) : (
          <div className="noTransactions">
            <p>Você ainda não possui nenhum lançamento</p>
            <div></div>
          </div>
        )}
      </div>

    </>
  );
}

export default App;
