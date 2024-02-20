import { BarChart, ButtonCircle, LineChart } from "../../components";
import SidebarComponent from "../../components/sidebar";
import style from "./landingpage.module.css";
import { FaSearch, FaRegArrowAltCircleUp } from "react-icons/fa";
import Coin from "../../assets/images/coin.png";
function LandingPage() {
  return (
    <>
      <div className={style.body}>
        <SidebarComponent />
        <div className={style.main}>
          <div>
            <div id="header" className={style.header}>
              <div>
                <h1>Hello, John D</h1>
                <p>View and control your finances here</p>
              </div>
              <ButtonCircle icon={<FaSearch />} />
            </div>
            <div className={style.section1}>
              <div
                id="balance-stat"
                className={`card , ${style.balanced_stat}`}
              >
                <div className={style.statistic}>
                  <h4>Balanced statistic</h4>
                  <h1>$ 564</h1>
                  <div className={style.section_coin}>
                    <img src={Coin} alt="coin" className={style.coin} />
                    <p>your total balance</p>
                  </div>
                  <div className={style.line}>
                    <LineChart />
                    <FaRegArrowAltCircleUp />
                    <h5>6%</h5>
                  </div>
                  <p>alway see your earning update</p>
                </div>
                <div className={style.statistic_2}>
                  <select name="Filter" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                  <BarChart />
                </div>
              </div>
              <div className={style.CardVisa}>
                <div>
                  <h1>S.</h1>
                  <h1>Visa</h1>
                </div>
                <div>
                  <h3>**** 9821</h3>
                  <div>
                    <h3>Jhon Demon</h3>
                    <h3>08/12</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section2}>
              <div id="list_item_to_buy">
                <h4>List of item to buy</h4>
                <input
                  type="date"
                  max="2022-12-15T10:00"
                  onChange={(e) => console.log(e.target.value)}
                />
                <input
                  type="time"
                  // max="2022-12-15T10:00"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div>1</div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
