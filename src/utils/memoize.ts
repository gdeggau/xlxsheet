import { RecoilState, RecoilValueReadOnly } from "recoil";

type MemoizedContent<
  R extends RecoilState<T> | RecoilValueReadOnly<T>,
  T = unknown
> = {
  [key: string]: R;
};

const memoizedContent: MemoizedContent<any> = {};

export const memoize = <
  R extends RecoilState<T> | RecoilValueReadOnly<T>,
  T = unknown
>(
  cellId: string,
  atomFactory: () => R
): R => {
  if (memoizedContent[cellId]) {
    return memoizedContent[cellId];
  }

  memoizedContent[cellId] = atomFactory();

  return memoizedContent[cellId];
};
