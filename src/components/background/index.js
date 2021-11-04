import React from "react"
import styles from "./background.module.css"

const Background = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
export default Background
