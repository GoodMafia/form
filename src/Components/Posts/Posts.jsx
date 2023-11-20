import "./posts.scss";

export default function Posts(props) {
  return (
    <div className="post">
      <p>Заказчик: {props.obj.surName} {props.obj.name}</p>
      <p>Номер телефона: {props.obj.number}</p>
      <p>Почта: {props.obj.email}</p>
      <p>Адрес: {props.obj.address}</p>
    </div>
  );
}
