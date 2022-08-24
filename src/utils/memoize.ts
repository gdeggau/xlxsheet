import { RecoilState } from "recoil";

type MemoizedContent = {
  [key: string]: RecoilState<string>;
};

const memoizedContent: MemoizedContent = {};

export const memoize = (
  cellId: string,
  atomFactory: () => RecoilState<string>
) => {
  if (memoizedContent[cellId]) {
    return memoizedContent[cellId];
  }

  memoizedContent[cellId] = atomFactory();

  return memoizedContent[cellId];
};
