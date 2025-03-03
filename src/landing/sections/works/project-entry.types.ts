import { PropsWithChildren } from 'react';

export type ProjectEntryProps = PropsWithChildren<{
  align: 'left' | 'right';
  imgSrc: string;
  title: string;
  skills: string[];
}>;
