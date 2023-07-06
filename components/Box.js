import style from "./box.module.css";

const Box = (props) => {
  return <div className={style.box}>{props.children}</div>;
};

export default Box;
