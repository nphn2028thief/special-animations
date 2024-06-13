import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";

import Header from "../components/Header";

import styles from "./MainLayout.module.scss";
import Sidebar from "../components/Sidebar";

const cx = classNames.bind(styles);

function MainLayout() {
  return (
    <main className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("children")}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default MainLayout;
