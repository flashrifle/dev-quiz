'use client';
import { atom, RecoilRoot } from 'recoil';

export const examDataStore = atom({
  key: 'examDataState',
  default: {},
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
