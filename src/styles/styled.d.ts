import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    shadow: string;
    colors: {
      input: string;
      bg: string;
      element: string;
      text: string;
    };

    sizes: {
      mediumScreenSize: string;
    };
  }
}
