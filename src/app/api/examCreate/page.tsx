'use client';
import './page.css';
import { useRecoilValue } from 'recoil';
import { examDataStore } from '../../../../recoil/store';

export default function ExamCreate() {
  const examData = useRecoilValue(examDataStore);

  return (
    <div>
      {examData ? (
        <pre>{JSON.stringify(examData, null, 2)}</pre>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}
