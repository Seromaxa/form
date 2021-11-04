import React from "react"

const Button = ({ onClick, styles = {}, text, disabled }) => {
  const clickHandler = (ev) => {
    ev.stopPropagation()
    return onClick
  }
  return (
    <>
      {disabled ? (
        <button onClick={clickHandler} className={styles.class} disabled>
          {text}
        </button>
      ) : (
        <button onClick={clickHandler} className={styles.class}>
          {text}
        </button>
      )}
    </>
  )
}
export default Button
