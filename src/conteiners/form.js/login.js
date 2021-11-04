import React, { useContext } from "react"
import Form from "../../components/form"
import Input from "../../UI/input"
import Button from "../../UI/button"
import Outum from "../../assets/outum.jpeg"
import styles from "./forms.module.css"
import { ReactComponent as Eye } from "../../assets/eye.svg"
import { ReactComponent as Eye2 } from "../../assets/eye2.svg"
import { Context } from "../../store/context"

const LogIn = () => {
  const { user, change, logIn, blur, type, typeToggle } = useContext(Context)
  return (
    <Form picture={Outum} side={false} onSubmit={logIn}>
      <div className={styles.wrapper}>
        <Input
          warning={{
            show: user.uncorrect.email,
            text: user.uncorrect.emailText,
            class: styles.input_warning,
          }}
          wrapper={{ class: styles.input_wrapper }}
          placeholder="em@il"
          style={{ class: styles.form_input }}
          type="email"
          name="email"
          onChange={change}
          val={user.email}
          onBlur={blur}
        />
        <Input
          warning={{
            show: user.uncorrect.password,
            text: user.uncorrect.passwordText,
            class: styles.input_warning,
          }}
          label={{
            show: true,
            class: styles.input_label,
            text: type ? <Eye2 /> : <Eye />,
            onClick: typeToggle,
          }}
          wrapper={{ class: styles.input_wrapper }}
          placeholder="password"
          type={type ? "password" : "text"}
          name="password"
          style={{ class: styles.form_input }}
          onChange={change}
          val={user.password}
          onBlur={blur}
        />
      </div>
      <div className={styles.button_holder}>
        <Button
          text={"Log in"}
          styles={{ class: [styles.button, styles.left].join(" ") }}
          onClick={(ev) => logIn(ev)}
          disabled={user.auth.email && user.auth.password ? false : true}
        />
      </div>
    </Form>
  )
}
export default LogIn
