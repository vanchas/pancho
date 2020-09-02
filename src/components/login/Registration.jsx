import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup
} from "reactstrap";
import s from "./login.module.scss";
import { useRouter } from "next/router";
import Eye from "../../assets/images/svg/eye.svg";
import EyeSlash from "../../assets/images/svg/eye-slash.svg";
import LoginGoogle from "./LoginGoogle";
import LoginFacebook from "./LoginFacebook";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";

const phoneNumberMask = [
  /\d/,
  /\d/,
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/
];

const Registration = ({ buttonLabel }) => {
  const [inputType, setInputType] = useState(true);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [errorFromBackend, setErrorFromBackend] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      phone: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Обязательное поле!"),
      password: Yup.string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле!"),
      passwordConfirmation: Yup.string()
        .min(6, "Минимум 6 символов")
        .required("Обязательное поле!"),
      email: Yup.string()
        .email("Некорректный е-мейл")
        .required("Обязательное поле!"),
      phone: Yup.string()
        .matches(phoneNumberMask, `Некорректный номер телефона ${validationSchema.phone}`)
        .required("Обязательное поле!")
    }),
    onSubmit: values => {
      registrationSubmitHandler(values.name, values.password, values.passwordConfirmation, values.email, values.phone);
    }
  });

  const toggle = () => setModal(!modal);

  const registrationSubmitHandler = (name, password, passwordConfirmation, email, phone) => {
    console.log(name, password, passwordConfirmation, email, phone);
    router.push("/cabinet");
  };

  return (
    <div className={`mx-auto`}>
      <Button
        color=""
        className={`text-white`}
        onClick={toggle}
      >
        <u>{buttonLabel}</u>
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader
          toggle={toggle}
          className={`border-0 text-white text-center font-weight-bold ${s.bg_dark}`}
        >
          РЕГИСТРАЦИЯ
        </ModalHeader>
        <ModalBody className={`pb-0 ${s.bg_dark}`}>
          <InputGroup>
            <Input
              placeholder="Имя*"
              type="text"
              name={`name`}
              className={`text-white ${s.bg_dark} mb-4`}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <p className={`text-danger w-100`}>{formik.errors.name}</p>
            )}
          </InputGroup>
          <InputGroup>

            {/*<Field*/}
            {/*  name="phone"*/}
            {/*  render={({ field }) => (*/}
                <MaskedInput
                  mask={phoneNumberMask}
                  id="phone"
                  name="phone"
                  type="text"
                  className={`text-white ${s.bg_dark} mb-4 form-control`}
                  onChange={formik.handleChange}

                  // className={
                  //   "form-control" +
                  //   (errors.phone && touched.phone ? " is-invalid" : "")
                  // }
                />
             {/*  )}*/}
             {/*/>*/}
            {/*<Input*/}
            {/*  placeholder="Телефон*"*/}
            {/*  type="number"*/}
            {/*  name={`phone`}*/}
            {/*  className={`text-white ${s.bg_dark} mb-4`}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*/>*/}
            {formik.errors.phone && formik.touched.phone && (
              <p className={`text-danger w-100`}>{formik.errors.phone}</p>
            )}
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="E-mail*"
              type="email"
              name={`email`}
              className={`text-white ${s.bg_dark} mb-4`}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className={`text-danger w-100`}>{formik.errors.email}</p>
            )}
          </InputGroup>
          <InputGroup className={s.password_input}>
            <Input
              placeholder="Пароль*"
              required
              type={inputType ? "password" : "text"}
              name={`password`}
              className={`text-white ${s.bg_dark} mb-4`}
              onChange={formik.handleChange}
            />
            {inputType ? (
              <span onClick={() => setInputType(!inputType)} className={s.eye}>
                <img src={EyeSlash} alt={``} />
              </span>
            ) : (
              <span onClick={() => setInputType(!inputType)} className={s.eye}>
                <img src={Eye} alt={``} />
              </span>
            )}
            {formik.errors.password && formik.touched.password && (
              <p className={`text-danger w-100`}>{formik.errors.password}</p>
            )}
          </InputGroup>
          <InputGroup className={s.password_input}>
            <Input
              placeholder="Подтверждение пароля*"
              required
              type={inputType ? "password" : "text"}
              name={`passwordConfirmation`}
              className={`text-white ${s.bg_dark} mb-4`}
              onChange={formik.handleChange}
            />
            {inputType ? (
              <span onClick={() => setInputType(!inputType)} className={s.eye}>
                    <img src={EyeSlash} alt={``} />
                  </span>
            ) : (
              <span onClick={() => setInputType(!inputType)} className={s.eye}>
                    {" "}
                <img src={Eye} alt={``} />
                  </span>
            )}
            {formik.errors.passwordConfirmation && formik.touched.passwordConfirmation && (
              <p className={`text-danger w-100`}>{formik.errors.passwordConfirmation}</p>
            )}
          </InputGroup>
          <Button
            color=""
            className="d-block mx-auto font-weight-bold mb-3"
            style={{ backgroundColor: "#ffed00" }}
            onClick={formik.handleSubmit}
          >
            Продолжить
          </Button>
        </ModalBody>
        <ModalFooter className={`pt-0 border-0 ${s.bg_dark}`}>
          {/*{errorFromBackend && (*/}
          {/*  <div className="alert alert-danger" role="alert">*/}
          {/*    {errorFromBackend}*/}
          {/*  </div>*/}
          {/*)}*/}
          <div className="text-center text-white w-100">ВОЙТИ КАК ПОЛЬЗОВАТЕЛЬ</div>

          <div className={s.login_with_google_facebook_block}>
            <LoginFacebook setErrorFromBackend={setErrorFromBackend} />
            <LoginGoogle setErrorFromBackend={setErrorFromBackend} />
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Registration;
