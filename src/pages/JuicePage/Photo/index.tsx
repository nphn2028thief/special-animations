import { FC, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "../JuicePage.module.scss";

interface IProps {
  data: string;
  index: number;
  isActive: boolean;
  onClick: (offsetLeft: number, offsetWidth: number) => void;
}

const cx = classNames.bind(styles);

const JuicePhoto: FC<IProps> = (props) => {
  const { data, index, isActive, onClick } = props;

  const juiceWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && juiceWrapperRef.current) {
      const { offsetLeft, offsetWidth } = juiceWrapperRef.current;
      onClick(offsetLeft, offsetWidth);
    }
  }, [isActive, onClick]);

  const handleClick = () => {
    if (juiceWrapperRef.current) {
      const { offsetLeft, offsetWidth } = juiceWrapperRef.current;
      onClick(offsetLeft, offsetWidth);
    }

    return;
  };

  return (
    <div
      ref={juiceWrapperRef}
      className={cx("juice-wrapper", !isActive && "un-active")}
      onClick={handleClick}
    >
      <img
        src={data}
        alt={`juice-${index + 1}`}
        className={cx("static-juice")}
      />
    </div>
  );
};

export default JuicePhoto;
