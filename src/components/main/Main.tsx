'use client';
import './main.css';
import Icon from '../../../public/icons/icon';
import { useState } from 'react';
import { DifficultyData, LanguageData } from '@/components/main/mainData';

export default function Main() {
  const [lang, setLang] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [count, setCount] = useState<number>();

  const allowedLangs = LanguageData;
  const allowedDifficulties = DifficultyData;

  const handleClickBtn = () => {
    if (!lang || !difficulty || !count) {
      alert('선택하지 않은 항목이 있습니다.');
    }
    console.log(lang, difficulty, count);
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <Icon />
        <p className="main-title">프로그래밍 문제 생성기</p>
      </div>
      <div className="main-form-container">
        <div className="lang-form">
          <select name="" id="" onChange={(e) => setLang(e.target.value)}>
            <option>언어를 선택해 주세요</option>
            {allowedLangs.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="difficulty-form">
          <select name="" id="" onChange={(e) => setDifficulty(e.target.value)}>
            <option>난이도를 선택해 주세요</option>
            {allowedDifficulties.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="문항수를 입력하세요"
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button onClick={handleClickBtn}>생성하기</button>
      </div>
    </div>
  );
}
