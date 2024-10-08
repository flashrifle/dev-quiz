'use client';
import './main.css';
import './mobile.css';
import Icon from '../../../public/icons/icon';
import { ChangeEvent, useEffect, useState } from 'react';
import { DifficultyData, LanguageData } from '@/components/main/mainData';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { examDataStore } from '../../../recoil/store';
import { BarLoader, ClipLoader } from 'react-spinners';

export default function Main() {
  const [lang, setLang] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [count, setCount] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useRecoilState(examDataStore); // 응답 데이터를 저장할 상태
  const [isPc, setIsPc] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>('파일을 첨부해 주세요');
  const router = useRouter();

  const allowedLangs = LanguageData;
  const allowedDifficulties = DifficultyData;

  const host = process.env['NEXT_PUBLIC_END_POINT'];

  useEffect(() => {
    if (window.innerWidth < 760) setIsPc(false);

    const handleResize = () => {
      if (window.innerWidth < 760) setIsPc(false);
      else setIsPc(true);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickBtn = async () => {
    if (!lang || !difficulty || !count) {
      alert('선택하지 않은 항목이 있습니다.');
      return;
    }
    setLoading(true);
    await axios
      .post(`${host}/api/examCreate`, {
        lang: lang,
        difficulty: difficulty,
        count: count,
      })
      .then((res) => {
        setLoading(false);
        setResponseData(res.data);
        router.push('/api/examCreate');
      })
      .catch((err) => console.error(err));
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (!file) {
      setFileName('파일을 첨부해 주세요');
    } else {
      setFileName(e.target.value);
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-wrap">
          <ClipLoader size={80} color={'#47A289'} />
        </div>
      )}
      {isPc ? (
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
              <select
                name=""
                id=""
                onChange={(e) => setDifficulty(e.target.value)}
              >
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
          <div className="main-file-container">
            <span className="file-uploader">{fileName}</span>
            <label htmlFor="file">파일찾기</label>
            <input id="file" type="file" onChange={handleFileInputChange} />
          </div>
        </div>
      ) : (
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
              <select
                name=""
                id=""
                onChange={(e) => setDifficulty(e.target.value)}
              >
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
      )}
    </>
  );
}
