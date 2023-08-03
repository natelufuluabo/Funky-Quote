import { atom } from "recoil";

export const backgroundImageUrlAtom = atom({
    key: 'imageUrl',
    default: ''
});

export const currentPathNameAtom = atom({
  key: 'currentPathName',
  default: ''
});