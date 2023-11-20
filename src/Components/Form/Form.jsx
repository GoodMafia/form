import { useState } from "react";
import "./form.scss";

export default function Form(props) {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="header">
      <div className="wrapper">
        <div className="Parent1">
          <div className="firstblock">
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              className="name"
              type="text"
              placeholder="ИМЯ"
              required=""
            />
            <input
              onChange={(event) => setSurname(event.target.value)}
              value={surname}
              className="surname"
              type="text"
              placeholder="ФАМИЛИЯ"
              required=""
            />
          </div>
          <div className="secondblock">
            <input
              onChange={(event) => setNumber(event.target.value)}
              value={number}
              className="number"
              type="text"
              placeholder="ТЕЛЕФОН"
              required=""
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              className="email"
              type="text"
              placeholder="ЭЛЕКТРОННАЯ ПОЧТА"
              required=""
            />
          </div>
        </div>
        <div className="Parent2">
          <div className="thirdblock">
            <textarea
              onChange={(event) => setAddress(event.target.value)}
              value={address}
              className="address"
              type="text"
              placeholder="АДРЕС ДОСТАВКИ"
              name=""
              id=""
              cols="30"
              rows="10"
              required=""
            ></textarea>
          </div>
          <div className="fourthblock">
            <button
              type="button"
              onClick={() => {
                props.addPost(name, surname, number, email, address);
                setName("");
                setSurname("");
                setNumber("");
                setAddress("");
                setEmail("");
              }}
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
