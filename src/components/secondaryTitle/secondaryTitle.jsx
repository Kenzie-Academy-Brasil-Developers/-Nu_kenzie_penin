import styles from './styles.module.scss'

export const Title = ({children}) => {
    return(
        <h2 className={styles.mainTitle}>{children}</h2>
    )
}