import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import orange from "@/assets/images/juices/orange.png";
import plumb from "@/assets/images/juices/plumb.png";
import kiwi from "@/assets/images/juices/kiwi.png";
import strawberry from "@/assets/images/juices/strawberry.png";
import orangeJuice from "@/assets/images/juices/orange-juice.png";
import plumbJuice from "@/assets/images/juices/plumb-juice.png";
import kiwiJuice from "@/assets/images/juices/kiwi-juice.png";
import strawberryJuice from "@/assets/images/juices/strawberry-juice.png";
import JuicePhoto from "./Photo";
import { juiceData } from "@/constant/juice";

import styles from "./JuicePage.module.scss";

const cx = classNames.bind(styles);

const juiceWrappers: string[] = [
  orangeJuice,
  plumbJuice,
  kiwiJuice,
  strawberryJuice,
];

function JuicePage() {
  const [currentJuiceIndex, setCurrentJuiceIndex] = useState<number>(0);
  const [deg, setDeg] = useState<number>(-45);

  const lineRef = useRef<HTMLDivElement>(null);
  const juiceWheelRef = useRef<HTMLInputElement>(null);
  const fruitsWheelRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (juiceWheelRef.current) {
      juiceWheelRef.current.style.transform = `rotate(${deg}deg)`;
    }

    if (fruitsWheelRef.current) {
      fruitsWheelRef.current.style.transform = `rotate(${deg}deg)`;
    }
  }, [currentJuiceIndex, deg]);

  const calculateRotation = (
    currentPosition: number,
    targetPosition: number
  ) => {
    const steps = targetPosition - currentPosition;

    if (steps === juiceData.length - 1) return juiceData.length - 1;
    if (steps > 2) return steps + 4;
    if (steps === -(juiceData.length - 1)) return 1 - juiceData.length;
    if (steps < -2) return steps - 4;

    return steps;
  };

  const handleClick = (
    offsetLeft: number,
    offsetWidth: number,
    index: number
  ) => {
    if (lineRef.current) {
      lineRef.current.style.left = offsetLeft + "px";
      lineRef.current.style.width = offsetWidth + "px";
    }

    if (currentJuiceIndex === index) {
      return;
    }

    const steps = calculateRotation(currentJuiceIndex, index);

    setDeg((prev) => prev - steps * 90);
    setCurrentJuiceIndex(index);
  };

  return (
    <div className={cx("wrapper")}>
      <div
        style={{ background: juiceData[currentJuiceIndex].backgroundColor }}
        className={cx("container")}
      >
        <nav style={{ visibility: "hidden" }}>
          <img src="./images/logo.png" alt="logo" className="logo" />
          <div className="menu-text">
            <p>Home</p>
            <p>Flavor</p>
            <p>About</p>
          </div>
          <button>Shop online</button>
        </nav>
        <div className={cx("content")}>
          <div className={cx("juice-text")}>
            <h1
              key={juiceData[currentJuiceIndex].name}
              className={cx("fade-in")}
            >
              {juiceData[currentJuiceIndex].name}
            </h1>
            <p
              key={juiceData[currentJuiceIndex].description}
              className={cx("juice-info", "fade-in")}
            >
              {juiceData[currentJuiceIndex].description}
            </p>
          </div>
          <div className={cx("photos")}>
            {juiceWrappers.map((item, index) => (
              <JuicePhoto
                data={item}
                index={index}
                isActive={currentJuiceIndex === index}
                onClick={(offsetLeft, offsetWidth) =>
                  handleClick(offsetLeft, offsetWidth, index)
                }
              />
            ))}

            <div ref={lineRef} className={cx("line")}></div>
          </div>
        </div>
        <div ref={juiceWheelRef} className={cx("juice-wheel")}>
          <img
            src={orangeJuice}
            alt="juice1"
            className={cx("dynamic-juice-1")}
          />
          <img
            src={plumbJuice}
            alt="juice1"
            className={cx("dynamic-juice-2")}
          />
          <img src={kiwiJuice} alt="juice1" className={cx("dynamic-juice-3")} />
          <img
            src={strawberryJuice}
            alt="juice1"
            className={cx("dynamic-juice-4")}
          />
        </div>
        <div ref={fruitsWheelRef} className={cx("fruits-wheel")}>
          <img src={orange} alt="orange" className={cx("dynamic-fruits-1")} />
          <img src={plumb} alt="plumb" className={cx("dynamic-fruits-2")} />
          <img src={kiwi} alt="kiwi" className={cx("dynamic-fruits-3")} />
          <img
            src={strawberry}
            alt="strawberry"
            className={cx("dynamic-fruits-4")}
          />
        </div>
      </div>
    </div>
  );
}

export default JuicePage;
