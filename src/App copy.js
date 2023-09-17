// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const test = "여행";
  const [list, setList] = useState([
    "송도센터럴파크",
    "파주 프로방스 / 헤이리 마을",
    "춘천 소양강 스카이워크",
  ]);

  const [count, setCount] = useState(0);
  return (
    <div className="wrap">
      <header>
        <h1>
          <span>가자</span>
          <span>여행</span>
        </h1>
      </header>
      <main>
        {/* <div className="textInput">
          <input
            type="text"
            value="어디로 갈까요?"
            onCanPlay={(e) => {
              e.preventDefault();
            }}
          />
          <button>입력</button>
        </div> */}
        <button
          onClick={() => {
            setCount(count + 1);
            console.log("증가됨");
          }}
        >
          숫자올리기
        </button>
        <button
          onClick={() => {
            let copy = [...list];
            copy[0] = "제주도";
            setList(copy);
          }}
        >
          제목변경
        </button>
        <button
          onClick={() => {
            let copy = [...list];
            copy.sort();
            setList(copy);
          }}
        >
          가나다순 정렬
        </button>
        <p className="total">
          총 리스트 갯수 <span>{count}</span>
        </p>
        <ul className="list">
          <li>
            <p>{list[0]}</p>
            <i className="fa-solid fa-trash-can"></i>
          </li>
          <li>
            <p>{list[1]}</p>
            <i className="fa-solid fa-trash-can"></i>
          </li>
          <li>
            <p>{list[2]}</p>
            <i className="fa-solid fa-trash-can"></i>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
