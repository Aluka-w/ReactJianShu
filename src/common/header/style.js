import styled from "styled-components";
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
`;
export const Logo = styled.div`
  float: left;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`;
export const NavWrapper = styled.div`
  over-flow: hidden;
  position: relative;
  height: 56px;
  margin: 0 auto;
  width: 960px;
  padding: 0px 15px;
  border-box: box-sizing;
`;
export const NavItem = styled.div`
  line-height: 26px;
  padding: 15px;
  font-size: 17px;
  color: #969696;
  margin-right: 10px;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`;
export const NavSearchWrapper = styled.div`
  padding-left: 15px;
  margin-right: 10px;
  position: relative;
  float: left;
  .zoom {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    font-width: bold;
    font-size: 20px;
    top: 13px;
    right: 5px;
    &.focused {
      color: #fff;
      background: #969696;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  border-radius: 40px;
  background: #eee;
  font-size: 14px;
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  margin-top: 9px;
  outline: none;
  &::placeholder {
    font-size: 124x;
    color: #969696;
  }
  &.focused {
    width: 340px;
  }
  &.slide-enter {
    width: 240px;
  }
  &.slide-enter-active {
    width: 320px;
    transition: all 0.3s ease-out;
  }
  &.slide-enter-done {
    width: 320px;
  }
  &.slide-exit {
    width: 320px;
  }
  &.slide-exit-active {
    width: 240px;
    transition: all 0.3s ease-out;
  }
  &.slide-exit-done {
    width: 240px;
  }
`;
export const SearchInfoWrapper = styled.div`
  width: 250px;
  z-index: 1;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 4px;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  margin-top: 9px;
  left: 5px;
`;
export const SearchTitle = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  .spin {
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transfor-origin: center center;
    display: block;
    float: left;
  }
`;
export const SearchInfoList = styled.div`
  margin-top: 18px;
  overflow: hidden;
`;
export const SearchInfoItem = styled.span`
  margin-right: 10px;
  margin-bottom: 14px;
  float: left;
  padding: 2px 4px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;
export const Addition = styled.div`
  float: right;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`