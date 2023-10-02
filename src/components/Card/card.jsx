import styles from "./style.module.scss";

export const Card = ({
  transactionName,
  transactionType,
  transactionValue,
  removeElement,
  index,
}) => {
  return (
    <>
      {transactionType == "entrada" ? (
          <li className={styles.received}>
          <div className={styles.div__entrada}>
            <p className={styles.p__entrada}>{transactionName}</p>
            <span>Entrada</span>
          </div>
          <section className={styles.section__money}>
            <p>{transactionValue} </p>
            <button className={styles.button__excluir}
              onClick={(event) => {
                removeElement(event.target.id);
              }}
              value="oi"
              id={index}
            >Excluir</button>
          </section>
        </li>
      ) : (
        <li className={styles.despesa}>
          <div className={styles.div__entrada}>
            <p className={styles.p__entrada}>{transactionName}</p>
            <span>Despesa</span>
          </div>

          <section className={styles.section__money}>
            <p>{transactionValue} </p>
            <button className={styles.button__excluir}
              onClick={(event) => {
                removeElement(event.target.id);
              }}
              value="oi"
              id={index}
            >Excluir</button>
          </section>
        </li>
      )}
    </>
  );
};
