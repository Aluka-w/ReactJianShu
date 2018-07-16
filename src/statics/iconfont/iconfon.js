import { injectGlobal } from "styled-components";
injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1531365118252'); /* IE9*/
    src: url('./iconfont.eot?t=1531365118252#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1531365118252') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1531365118252#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`