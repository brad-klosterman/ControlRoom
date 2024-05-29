/* eslint-disable typescript-sort-keys/string-enum */
export enum Colors {
  BG = 'rgba(7,6,9,1)',
  Base = 'rgba(15,16,22,1)',
  Sidebar = 'rgba(0,0,0,1)',
  Primary = 'rgba(40,167,69,1)',
  Secondary = 'rgba(168,168,168,1)',
  Accent = 'rgba(24,29,38,1)',
  Background = 'rgba(33,33,33,1)',
  Toolbar = 'rgba(17,17,17,1)',
  Success = '#51b141',
  Warning = 'rgba(229,185,98,1)',
  Error = 'rgba(166,23,36,1)',
  Info = '#2351E4',
}

export type ShadeRange =
  | 'none'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export default Colors;
