import './main.css';
import Icon from '../../../public/icons/icon';

export default function Main() {
  return (
    <>
      <div className="main-container">
        <div className="title-container">
          <Icon />
          <p className="main-title">프로그래밍 문제 생성기</p>
        </div>
        <div className="main-form-container">
          <div className="lang-form">
            <select name="" id="">
              <option>언어를 선택해 주세요</option>
              <option>Javascript</option>
              <option>SQL</option>
            </select>
          </div>
          <div className="difficulty-form">
            <select name="" id="">
              <option>난이도를 선택해 주세요</option>
              <option>고급</option>
              <option>중급</option>
              <option>초급</option>
            </select>
          </div>
          <div>
            <select name="" id="">
              <option>난이도를 선택해 주세요</option>
              <option>고급</option>
              <option>중급</option>
              <option>초급</option>
            </select>
          </div>
          <input type="text" placeholder="문항수를 입력하세요" />
          <button>생성하기</button>
        </div>
      </div>
    </>
  );
}
