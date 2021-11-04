import React, { useState, useRef } from "react"
import Register from "./registerForm"
import LogIn from "./login"
import styles from "./forms.module.css"

const Forms = () => {
  const [toggle, setToggle] = useState(true)
  const toggler = useRef(null)

  const toggleHendler = (ev) => {
    ev.stopPropagation()

    let interval
    if (
      ev.target.tagName === "INPUT" ||
      ev.target.tagName === "BUTTON" ||
      ev.target.tagName === "LABEL" ||
      ev.target.tagName === "g" ||
      ev.target.tagName === "path" ||
      ev.target.tagName === "ellipse" ||
      ev.target.tagName === "svg"
    ) {
      return
    }
    toggler.current.classList.add(styles.active)
    interval = setTimeout(() => {
      setToggle(!toggle)
      setTimeout(() => {
        toggler.current.classList.remove(styles.active)
      }, 1000)
    }, 700)
    return () => clearTimeout(interval)
  }
  return (
    <div onClick={toggleHendler} ref={toggler}>
      {toggle ? <LogIn /> : <Register />}
    </div>
  )
}
export default Forms
