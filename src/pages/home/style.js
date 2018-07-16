import styled from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 30px auto;
  padding: 0 15px;
`;
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 280px;
  margin-right: -20px;
`;
export const TopicWrapper = styled.div`
  margin: 30px 0 0px 0;
  overflow: hidden;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
`;
export const TopicItem = styled.div`
  float: left
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  overflow: hidden;
  .topic-pic {
    width: 32p;
    height: 32px;
    float: left;
  }
`;
export const TopicTitle = styled.div`
  float: right;
  padding: 0 11px 0 6px;
  line-height: 32px;
  font-size: 14px;
`;
export const ListWrapper = styled.div`
  padding: 20px 0px;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const RecommenWrapper = styled.div`
  width: 280px;
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
`;
export const RecommenItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
`;
export const WriteWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0px;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`;