import Modal1 from "react-modal";
import { Contexto } from "../appContext";
import { useState, useContext } from "react";
import styles from "../styles/modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { timeout } from "./helpers";
import emailjs from "emailjs-com";
import { buttonDisabled } from "../styles/spinningWheel.module.css";
import SpinningWheel from "../components/spinningWheel";

export default function Modal() {
  const { modalIsOpen, setIsOpen } = useContext(Contexto);
  const [submitMessage, setSubmitMessage] = useState("");
  const [allowSend, setAllowSend] = useState(true);
  const [form, setForm] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userMessage: "",
  });
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.id]:
        typeof event.target.value === "string"
          ? event.target.value
          : JSON.stringify(event.target.value),
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const emailjsObj = {
      serviceId: "gmail",
      templateId: "template_aRfTvlUy",
      userId: process.env.NEXT_PUBLIC_USER_ID,
    };
    try {
      if (allowSend) {
        setAllowSend(() => false);
        const result = await emailjs.send(
          emailjsObj.serviceId,
          emailjsObj.templateId,
          form,
          emailjsObj.userId
        );
        if (result.status == 200) {
          setSubmitMessage(() => "Gracias!");
        } else {
          setSubmitMessage(() => "Ha ocurrido un error");
        }
        console.log("result:", result);
        await timeout(2);
        closeModal();
        setSubmitMessage(() => "");
        await timeout(0.5);
        setAllowSend(() => true);
      }
    } catch (err) {
      console.error(err);
      if (allowSend) {
        setAllowSend(() => false);
        console.error(err);
        setSubmitMessage(() => "Ha ocurrido un error");
        await timeout(2);
        closeModal();
        setSubmitMessage(() => "");
        await timeout(0.5);
        setAllowSend(() => true);
      }
    }
  };
  return (
    <Modal1
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      closeTimeoutMS={500}
      className={{
        base: `${styles.baseContent}`,
        afterOpen: `${styles.afterOpenContent}`,
        beforeClose: `${styles.beforeCloseContent}`,
      }}
      overlayClassName={{
        base: `${styles.baseOverlay}`,
        afterOpen: `${styles.afterOpenOverlay}`,
        beforeClose: `${styles.beforeCloseOverlay}`,
      }}
    >
      <h1>
        Thank you for your time{" "}
        <span aria-label="Hi there" role="img">
          ✌
        </span>
      </h1>
      <h2>Please fill this form, and I'll be in touch with you</h2>
      <form onSubmit={submitForm}>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
          </li>
          <li>
            <input
              type="text"
              id="userName"
              name="name"
              onChange={handleForm}
              required
            />
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
          </li>
          <li>
            <input
              type="text"
              id="userEmail"
              name="email"
              onChange={handleForm}
              required
            />
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="number">Phone Number</label>
          </li>
          <li>
            <input
              type="text"
              id="userPhoneNumber"
              name="phoneNumber"
              onChange={handleForm}
            />
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="message">Your message:</label>
          </li>
          <li>
            <textarea
              type="text"
              id="userMessage"
              name="message"
              onChange={handleForm}
              required
            />
          </li>
        </ul>
        <div>
          <div>
            <button
              disabled={allowSend ? false : true}
              type="submit"
              className={
                allowSend
                  ? `${styles.submitButton}`
                  : `${styles.submitButton} ${buttonDisabled}`
              }
            >
              {allowSend ? "SUBMIT" : <SpinningWheel />}
            </button>
            <span>{submitMessage}</span>
          </div>
        </div>
      </form>
      <div onClick={closeModal} className={`${styles.cross}`}>
        <FontAwesomeIcon color="rgba(34, 34, 34, 0.9)" icon={faTimes} />{" "}
      </div>
    </Modal1>
  );
}
