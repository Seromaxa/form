import React, { useState, useEffect } from "react"
import { Context } from "./store/context"
import Background from "./components/background"
import Form from "./conteiners/form.js/index"

function App() {
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
  const [type, setType] = useState(true)

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
    let result = user.email.match(string)
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
    console.log("fetch to Log in")
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
    console.log("fetch to Sing Up")
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
    <>
      <Background>
        <Context.Provider
          value={{
            user: user,
            change: changeHandler,
            logIn: logIner,
            singIn: singIn,
            blur: blurHendler,
            typeToggle: typeToggle,
            type: type,
          }}
        >
          <Form />
        </Context.Provider>
      </Background>
    </>
  )
}

export default App
