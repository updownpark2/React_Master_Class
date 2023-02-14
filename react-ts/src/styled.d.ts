import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}

//DefaultTheme는 기본적으로 props.theme의 인터페이스로 사용됩니다.
//기본적으로 DefaultTheme 인터페이스는 비어 있으므로 확장해야 합니다.
