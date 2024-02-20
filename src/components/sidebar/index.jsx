import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import style from "./sidebar.module.css";
import { RiHome3Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuClock9, LuLogOut, LuWallet } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import ProfilePict from "../../assets/images/profile.jpg";
import { useEffect, useRef, useState } from "react";
function SidebarComponent() {
  const [tab, setTab] = useState(0);
  // const [tab,setTab]
  const [pos, setPos] = useState(295);
  const reff = useRef([]);

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    console.log(tab);
    let highlighter = document.querySelector(".highlighter");
    const componentRef = reff.current[0];
    const { top, bottom } = componentRef.getBoundingClientRect();
    highlighter.style.top = `${top + tab * 60}px`;
    highlighter.style.bottom = `${viewportHeight - bottom + tab * 60}px`;
    // Calculate vh value based on viewport height
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportHeight]);

  const handleChaneMenu = async ({ ref }) => {
    setTab(ref);
    const componentRef = reff.current[ref];
    const { top, bottom } = componentRef.getBoundingClientRect();
    console.log(top, bottom);

    let highlighter = document.querySelector(".highlighter");

    if (parseInt(top) > parseInt(pos)) {
      highlighter.style.top = `${top}px`;
      setTimeout(function () {
        highlighter.style.bottom = `${viewportHeight - bottom}px`;
      }, 200);
    } else {
      highlighter.style.bottom = `${viewportHeight - bottom}px`;
      setTimeout(function () {
        highlighter.style.top = `${top}px`;
      }, 200);
    }
    setPos(top);
  };

  return (
    <div className={style.main}>
      <div>
        <h1>S.</h1>
        <HiOutlineChatBubbleLeftRight className={style.iconChat} />
      </div>
      <div className={style.menu}>
        <span
          onClick={() =>
            handleChaneMenu({
              ref: 0,
            })
          }
          ref={(ref) => (reff.current[0] = ref)}
        >
          <RiHome3Line />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              ref: 1,
            })
          }
          ref={(ref) => (reff.current[1] = ref)}
        >
          <FaRegBell />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              ref: 2,
            })
          }
          ref={(ref) => (reff.current[2] = ref)}
        >
          <LuClock9 />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              ref: 3,
            })
          }
          ref={(ref) => (reff.current[3] = ref)}
        >
          <BsPeople />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              ref: 4,
            })
          }
          ref={(ref) => (reff.current[4] = ref)}
        >
          <LuWallet />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              ref: 5,
            })
          }
          ref={(ref) => (reff.current[5] = ref)}
        >
          <IoSettingsOutline />
        </span>
        <div className={"highlighter"} id="slider"></div>
      </div>
      <div>
        <img src={ProfilePict} alt="profile picture" className={style.avatar} />
        <LuLogOut className={style.logout} />
      </div>
    </div>
  );
}

export default SidebarComponent;
