import React, { useState } from "react"

const Input = ({
  label = {
    lbUp: false,
    text: "",
    show: false,
    class: null,
    inlineStyle: {},
    onClick: null,
  },
  warning = {
    class: "",
    inlineStyle: {},
    text: "",
    show: false,
  },
  wrapper = {
    class: "",
    inlineStyle: {},
  },
  refer,
  name,
  placeholder,
  type,
  style = {},
  dataId,
  onChange,
  onBlur,
  onFocus,
  inlineStyle = {},
  val,
}) => {
  // eslint-disable-next-line
  const [id, setId] = useState(Math.random())
  const [focused, setFocused] = useState(false)
  const clickHandler = (ev) => {
    ev.stopPropagation()
  }
  const focusHandler = (ev) => {
    setFocused(true)
    if (!!onFocus) {
      onFocus(ev)
    } else {
      return
    }
  }

  return (
    <div className={wrapper?.class} style={wrapper?.inlineStyle}>
      {label.lbUp ? (
        <>
          {label.show ? (
            <label
              htmlFor={id}
              className={label?.class}
              style={label?.inlineStyle}
              onClick={label?.onClick}
            >
              {label.text}
            </label>
          ) : null}
          <input
            type={type}
            name={name}
            ref={refer}
            placeholder={placeholder}
            id={id}
            data-id={dataId}
            onChange={onChange}
            className={style?.class}
            style={inlineStyle}
            onClick={clickHandler}
            value={val || ""}
            onBlur={onBlur}
            onFocus={focusHandler}
            data-focus={focused}
            autoComplete="off"
          />
          {warning.show ? (
            <span className={warning.text} style={warning.inlineStyle}>
              {warning.text}
            </span>
          ) : null}
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            ref={refer}
            placeholder={placeholder}
            id={id}
            data-id={dataId}
            onChange={onChange}
            className={style?.class}
            style={inlineStyle}
            onClick={clickHandler}
            value={val || ""}
            onBlur={onBlur}
            onFocus={focusHandler}
            data-focus={focused}
            autoComplete="off"
          />
          {warning.show ? (
            <span className={warning.class} style={warning.inlineStyle}>
              {warning.text}
            </span>
          ) : null}
          {label.show ? (
            <label
              htmlFor={id}
              className={label?.class}
              style={label?.inlineStyle}
              onClick={label?.onClick}
            >
              {label.text}
            </label>
          ) : null}
        </>
      )}
    </div>
  )
}

export default Input
