import React, { useState, useRef, useEffect } from "react"
import styles from "./form.module.css"

const Form = ({ children, picture, onSubmit, onClick, side }) => {
  const [transform, setTransfotm] = useState({
    rx: 0,
    ry: 0,
    tx: 0,
    ty: 0,
  })
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })
  const [mouse, setMouse] = useState({
    mouseX: 0,
    mouseY: 0,
  })

  const wrapper = useRef(null)

  useEffect(() => {
    setSize((prev) => {
      return {
        ...prev,
        width: wrapper.current.offsetWidth,
        height: wrapper.current.offsetHeight,
      }
    })
  }, [])
  useEffect(() => {
    setTransfotm((prev) => {
      return {
        ...prev,
        rx: side
          ? (mouse.mouseX / size.width) * 30
          : (mouse.mouseX / size.width) * -30,
        ry: side
          ? (mouse.mouseY / size.height) * -30
          : (mouse.mouseY / size.height) * 30,
        tx: side
          ? (mouse.mouseX / size.width) * -40
          : (mouse.mouseX / size.width) * 40,
        ty: side
          ? (mouse.mouseY / size.height) * -40
          : (mouse.mouseY / size.height) * 40,
      }
    })
  }, [mouse, size, side])

  const moveHandler = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    setMouse((prev) => {
      return {
        ...prev,
        mouseX: ev.pageX - wrapper.current.offsetLeft - size.width / 2,
        mouseY: ev.pageY - wrapper.current.offsetTop - size.height / 2,
      }
    })
  }
  const outHendler = () => {
    setMouse((prev) => {
      return {
        ...prev,
        mouseX: 0,
        mouseY: 0,
      }
    })
    setTransfotm((prev) => {
      return {
        ...prev,
        rx: 0,
        ry: 0,
        tx: 0,
        ty: 0,
      }
    })
  }

  return (
    <div
      className={styles.form_wrapper}
      onMouseMove={moveHandler}
      onMouseOut={outHendler}
      onClick={onClick}
      ref={wrapper}
    >
      <form
        className={styles.form}
        style={{
          transform: `rotateX(${transform.rx}deg) rotateY(${transform.ry}deg)`,
        }}
        onSubmit={onSubmit}
      >
        <div
          className={styles.form_bg}
          style={{
            transform: `translateX(${transform.tx}px) translateY(${transform.ty}px)`,
            backgroundImage: `url(${picture})`,
          }}
        ></div>
        {children}
      </form>
    </div>
  )
}

export default Form
