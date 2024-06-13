import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import EPath from "@/constant/path";

import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <ul className={cx("nav-list")}>
        {Object.values(EPath).map((item) => (
          <li className={cx("nav-item")}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
