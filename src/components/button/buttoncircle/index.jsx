/* eslint-disable react/prop-types */
import style from "./button.module.css";
function ButtonCircle(props) {
  const { icon } = props;
  return <div className={style.main}>{icon}</div>;
}

export default ButtonCircle;
