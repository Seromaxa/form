import React from "react"
import Form from "./form"
import Input from "../UI/input"
import Button from "../UI/button"
import styles from "../assets/styles/forms.module.css"
import { ReactComponent as Eye } from "../assets/impagens/openEye.svg"
import { ReactComponent as Eye2 } from "../assets/impagens/closeEye.svg"

const SingLog = ({ picture, side, buttonSide, buttonText, context = {} }) => {
  return (
    <Form picture={picture} side={side} onSubmit={context.submit}>
      <div className={styles.wrapper}>
        <Input
          warning={{
            show: context?.user.uncorrect.email,
            text: context?.user.uncorrect.emailText,
            class: styles.input_warning,
          }}
          wrapper={{ class: styles.input_wrapper }}
          placeholder="em@il"
          name="email"
          style={{ class: styles.form_input }}
          onChange={context?.change}
          val={context?.user.email}
          onBlur={context?.blur}
        />
        <Input
          warning={{
            show: context?.user.uncorrect.password,
            text: context?.user.uncorrect.passwordText,
            class: styles.input_warning,
          }}
          label={{
            show: true,
            class: styles.input_label,
            text: context?.type ? <Eye2 /> : <Eye />,
            onClick: context?.typeToggle,
          }}
          wrapper={{ class: styles.input_wrapper }}
          placeholder="password"
          type={context?.type ? "password" : "text"}
          name="password"
          style={{ class: styles.form_input }}
          onChange={context?.change}
          val={context?.user.password}
          onBlur={context?.blur}
        />
      </div>
      <div className={styles.button_holder}>
        <Button
          text={buttonText}
          styles={{ class: [styles.button, buttonSide].join(" ") }}
          disabled={
            context?.user.auth.email && context?.user.auth.password
              ? false
              : true
          }
        />
      </div>
    </Form>
  )
}
export default SingLog
