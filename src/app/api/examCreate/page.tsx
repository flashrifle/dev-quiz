'use client';
import './page.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExamCreate() {
  const [data, setData] = useState<string>(''); // 텍스트 데이터를 저장할 상태

  useEffect(() => {
    // API 요청을 통해 데이터 가져오기
    // axios.post('http://localhost:3001/api/examCreate')
    //     .then((res) => {
    //       setData(res.data);  // 응답 데이터를 상태에 저장
    //     })
    //     .catch((err) => {
    //       console.error('Error fetching exam data:', err);
    //     });
    const result = localStorage.getItem('exam');
    if (result) {
      try {
        const parsedResult = JSON.parse(result); // localStorage 데이터를 객체로 변환
        setData(parsedResult); // 변환된 데이터를 상태에 저장
      } catch (error) {
        console.error('Error parsing JSON', error);
      }
    } else {
      console.log('데이터 없음', result);
    }
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
