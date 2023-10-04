import { currency } from "../List/list.jsx";
import styles from "./style.module.scss";
import { Title } from "../secondaryTitle/secondaryTitle.jsx";

export const TotalMoney = ({ listTransactions }) => {
  
  return (
    <div className={styles.money}>
      <div className={styles.totalmoney}>
      <Title>Valor Total:</Title>
        <span className={styles.span}>
          {currency(
            listTransactions.reduce((valorAnterior, valorAtual) => {
              return valorAnterior + valorAtual.value;
            }, 0)
          )}
        </span>
      </div>
      <p className={styles.p}>O valor se refere ao saldo</p>
    </div>
  );
};