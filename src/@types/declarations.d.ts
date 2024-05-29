// For CSS
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// For LESS
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import React = require('react');

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.md' {
  const value: string;
  export default value;
}

declare const IS_PROD: boolean;
declare const IS_DEV: boolean;
declare const IS_DEV_SERVER: boolean;
