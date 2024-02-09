import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import style from "./sidebar.module.css";
import { RiHome3Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuClock9, LuLogOut, LuWallet } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import ProfilePict from "../../assets/images/profile.jpg";
import { useState } from "react";
function SidebarComponent() {
  // const [tab, setTab] = useState(1);
  const [pos, setPos] = useState(295);
  const handleChaneMenu = async ({ newPos, bp, tp }) => {
    let highlighter = document.querySelector(".highlighter");
    console.log(highlighter);
    if (parseInt(newPos) > parseInt(pos)) {
      highlighter.style.top = tp;
      setTimeout(function () {
        highlighter.style.bottom = bp;
      }, 200);
    } else {
      highlighter.style.bottom = bp;
      setTimeout(function () {
        highlighter.style.top = tp;
      }, 200);
    }
    setPos(newPos);
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
              newPos: 527,
              bp: "527px",
              tp: "295px",
            })
          }
        >
          <RiHome3Line />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              newPos: 587,
              bp: "587px",
              tp: "355px",
            })
          }
        >
          <FaRegBell />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              newPos: 652,
              bp: "652px",

              tp: "415px",
            })
          }
        >
          <LuClock9 />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              newPos: 707,
              bp: "707px",

              tp: "475px",
            })
          }
        >
          <BsPeople />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              newPos: 767,
              bp: "767px",
              tp: "535px",
            })
          }
        >
          <LuWallet />
        </span>
        <span
          onClick={() =>
            handleChaneMenu({
              newPos: 827,
              bp: "827px",
              tp: "595px",
            })
          }
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
