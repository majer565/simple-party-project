import style from "./layout.module.css";

const Layout = (props) => {
  return (
    <div className={style.layout}>
      <div className={style.container}>{props.children}</div>
    </div>
  );
};

export default Layout;
