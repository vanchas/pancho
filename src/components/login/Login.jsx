import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  Label,
} from "reactstrap";
import s from "./login.module.scss";
import { useRouter } from "next/router";
import Person from "../../assets/images/person.png";
import Eye from "../../assets/images/svg/eye.svg";
import EyeSlash from "../../assets/images/svg/eye-slash.svg";
import Registration from "./Registration";
import LoginFacebook from "./LoginFacebook";
import LoginGoogle from "./LoginGoogle";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalExample = ({ buttonLabel, className, active }) => {
  const [inputType, setInputType] = useState(true);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorFromBackend, setErrorFromBackend] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Некорректный е-мейл")
        .required("Обязательное поле!"),
      password: Yup.string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле!"),
    }),
    onSubmit: values => {
      loginSubmitHandler(values.email, values.password)
    }
  });

  const toggle = () => {
    if (router.pathname === '/cabinet') {
      router.push('/')
    } else {
      setModal(!modal);
    }
  }

  const loginSubmitHandler = (login, password) => {
    console.log(login, password);
    router.push("/cabinet");
    toggle();
  };

  return (
    <div>
      <span className={s.toggle_button} onClick={toggle}>
        <img src={Person} alt="" className={s.person_sign} />
        <span className={active ? s.activeLink : s.button}>{buttonLabel}</span>
      </span>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          toggle={toggle}
          className={`${s.bg_dark} text-white text-center border-0`}
        >
          ВХОД В ЛИЧНЫЙ КАБИНЕТ
        </ModalHeader>
        <ModalBody className={s.bg_dark}>
          <InputGroup className={`mb-4`}>
            <Input
              placeholder="Логин*"
              required
              type="text"
              name={"email"}
              className={`text-white ${s.bg_dark}`}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className={`text-danger w-100 mb-0`}>{formik.errors.email}</p>
            )}
          </InputGroup>
          <InputGroup className={s.password_input}>
            <Input
              placeholder="Пароль*"
              required
              name={"password"}
              type={inputType ? "password" : "text"}
              className={`text-white ${s.bg_dark}`}
              onChange={formik.handleChange}
            />
            {inputType ? (
              <span onClick={() => setInputType(!inputType)}>
                <img src={EyeSlash} alt={``} />
              </span>
            ) : (
              <span onClick={() => setInputType(!inputType)}>
                {" "}
                <img src={Eye} alt={``} />
              </span>
            )}
            {formik.errors.password && formik.touched.password && (
              <p className={`text-danger w-100`}>{formik.errors.password}</p>
            )}
          </InputGroup>
          <InputGroup className="d-flex justify-content-between">
            <Label className="pl-4 pt-1 text-white">
              <Input
                type="checkbox"
                onChange={() => setRememberMe(!rememberMe)}
              />
              запомнить меня
            </Label>
            <a href="#" className="pt-1 text-white">
              забыли пароль?
            </a>
          </InputGroup>
          <Button
            className="mx-auto d-block mb-3 font-weight-bold"
            color=""
            style={{ backgroundColor: "#ffed00" }}
            onClick={formik.handleSubmit}
          >
            ВОЙТИ
          </Button>
          <div className="text-center text-white">ВОЙТИ КАК ПОЛЬЗОВАТЕЛЬ</div>
          {/*{errorFromBackend && (*/}
          {/*  <div className="alert alert-danger" role="alert">*/}
          {/*    {errorFromBackend}*/}
          {/*  </div>*/}
          {/*)}*/}

          <div className={s.login_with_google_facebook_block}>
            <LoginFacebook setErrorFromBackend={setErrorFromBackend} />
            <LoginGoogle setErrorFromBackend={setErrorFromBackend} />
          </div>
        </ModalBody>
        <ModalFooter className={`${s.bg_dark} text-center border-0 pt-0`}>
          <Registration buttonLabel={`регистрация на сайте`} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
