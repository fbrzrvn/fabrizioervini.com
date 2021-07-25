import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    textSecondary: string;
    primary: string;
    navbarBg: string;
    navbarLink: string;
    footer: string;
  }
}
