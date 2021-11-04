import React, { useState, useRef, useEffect } from "react"
import SingLog from "../components/singLog"
import Men from "../assets/impagens/men.jpg"
import Outum from "../assets/impagens/outum.jpeg"
import styles from "../assets/styles/forms.module.css"

const Forms = () => {
  const [toggle, setToggle] = useState(true)
  const [type, setType] = useState(true)
  const [user, setUser] = useState({
    email: "",
    password: "",
    url: "",
    auth: {
      email: false,
      password: false,
    },
    uncorrect: {
      email: false,
      password: false,
      emailText: "",
      passwordText: "",
    },
  })

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

  const typeToggle = () => {
    setType(!type)
  }

  const changeHandler = (ev) => {
    setUser((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      }
    })
  }

  useEffect(() => {
    let string = /([a-zA-Z0-9]+@[a-z]+\.[a-z]+)/g
    let result = string.test(user.email)
    setUser((prev) => {
      return {
        ...prev,
        auth: {
          ...prev.auth,
          email: result,
          password: user.password.length < 6 ? false : true,
        },
      }
    })
  }, [user.email, user.password])

  const logIner = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    console.log("fetch to Log in", user)
    setUser({
      email: "",
      password: "",
      url: "",
      auth: {
        email: false,
        password: false,
      },
      uncorrect: {
        email: false,
        password: false,
        emailText: "",
        passwordText: "",
      },
    })
  }
  const singIn = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    console.log("fetch to Sing Up", user)
    setUser({
      email: "",
      password: "",
      url: "",
      auth: {
        email: false,
        password: false,
      },
      uncorrect: {
        email: false,
        password: false,
        emailText: "",
        passwordText: "",
      },
    })
  }
  const blurHendler = (ev) => {
    let string = /([a-zA-Z0-9]+@[a-z]+\.[a-z]+)/g
    let result = user.email.match(string)
    if (ev.target.dataset.focus && ev.target.value.length >= 4) {
      if (ev.target.name === "email") {
        setUser((prev) => {
          return {
            ...prev,
            uncorrect: {
              ...prev.uncorrect,
              email: !result,
              emailText: "Enter correct email",
            },
          }
        })
      } else if (ev.target.name === "password") {
        setUser((prev) => {
          return {
            ...prev,
            uncorrect: {
              ...prev.uncorrect,
              password: ev.target.value.length < 6 ? true : false,
              passwordText: "Password must be more then 6 chars",
            },
          }
        })
      }
    }
  }
  return (
    <div onClick={toggleHendler} ref={toggler}>
      {toggle ? (
        <SingLog
          picture={Men}
          side={true}
          buttonSide={styles.right}
          buttonText="Sing up"
          context={{
            user: user,
            change: changeHandler,
            submit: singIn,
            blur: blurHendler,
            type: type,
            typeToggle: typeToggle,
          }}
        />
      ) : (
        <SingLog
          picture={Outum}
          side={false}
          buttonSide={styles.left}
          buttonText="Log in"
          context={{
            user: user,
            change: changeHandler,
            submit: logIner,
            blur: blurHendler,
            type: type,
            typeToggle: typeToggle,
          }}
        />
      )}
    </div>
  )
}
export default Forms
