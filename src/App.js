// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Popup from "./common/Popup";
import Listli from "./common/Listli";

function App() {
  const [list, setList] = useState([
    "송도센터럴파크",
    "파주 프로방스 / 헤이리 마을",
    "춘천 소양강 스카이워크",
  ]);

  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [titleNo, setTitleNo] = useState(0);
  const [inText, setInText] = useState("");

  const writeList = () => {
    if (inText == "") {
      alert("내용을 입력해주세요");
      return;
    }
    let copy = [...list];
    //copy.push(inText);
    copy.unshift(inText);
    setList(copy);
    setInText("");
  };

  const delList = (i) => {
    console.log("test", i);
    let copy = [...list];
    copy.splice(i, 1);
    setList(copy);
  };

  return (
    <div className="wrap">
      <header>
        <h1>
          <span>가자</span>
          <span>여행</span>
        </h1>
      </header>

      {/* <button
        onClick={() => {
          setIsOpen(true);
        }}>
        열기
      </button>
      <button
        onClick={() => {
          setIsOpen(false);
        }}>
        닫기
      </button>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        toggle
      </button> */}

      <main>
        <div className="textInput">
          <input
            type="text"
            value={inText}
            onChange={(e) => {
              console.log(e);
              e.preventDefault();
              setInText(e.target.value);
            }}
            placeholder="어디로 갈까요?"
          />
          <button onClick={writeList}>입력</button>
        </div>
        <p className="total">
          총 리스트 개수 <span>{list.length}</span>
        </p>
        <ul className="list">
          {list.map((list, i) => {
            return (
              <Listli
                list={list}
                key={i}
                i={i}
                setIsOpen={setIsOpen} // 모달을 여는 함수
                setTitleNo={setTitleNo}
                delList={delList}
              />
            );
          })}
        </ul>
        {list.length <= 0 ? <p style={{textAlign: "center"}}>리스트가 없습니다.</p> : null}
      </main>
      {isOpen == false ? null : (
        <Popup list={list} setIsOpen={setIsOpen} titleNo={titleNo} />
      )}
    </div>
  );
}

export default App;
