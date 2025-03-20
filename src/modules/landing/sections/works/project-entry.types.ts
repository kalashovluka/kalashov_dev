import type { PropsWithChildren } from "preact/compat";

export type ProjectEntryProps = PropsWithChildren<{
  align: 'left' | 'right';
  imgSrc: string;
  title: string;
  skills: string[];
  link: string;
}>;
