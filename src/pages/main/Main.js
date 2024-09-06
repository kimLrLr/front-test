import styled from "styled-components";
import { List } from "../../components/List";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

const ListWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftList = styled.div``;
const ListSpaceGround = styled.div`
  width: 20%;
`;
const RightList = styled.div``;

export const Main = () => {
  // useState로 list 데이터 받아오는데
  // 이거 conListData에 비동기처리 ajax get요청 해주고
  // 리스트값 setListData에 넣어줌.
  // 이걸 useEffect써서 렌더링 될 때 한 번만 시켜주고
  // listData에 들어있는 각각 사용자와 전문가 글의 title만 빼서
  // map돌려서 넣어주면 될듯함

  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true); //데이터 다 받아온 경우에 false넣어서 로딩화면 생성

  const conListData = async () => {
    try {
      const response = await fetch("http://localhost:8080/list"); //집가서 확인
      const data = await response.json();
      setListData(data);
      console.log(data); //값확인해보고
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    conListData();
  }, []);

  // 이까지하면 listData에 값 들어와져야하는데 지금 테스트를 못해보니 집가서 확인!

  if (loading) {
    return <Loading />;
  }

  return (
    <ListWrap>
      <LeftList>
        {/* {listData.map((data) => ( */}
        <List usertype="사용자" inputdata="listData에서 받아온 사용자title" />
        {/* ))} */}
      </LeftList>
      <ListSpaceGround />
      <RightList>
        <List usertype="전문가" inputdata="listData에서 받아온 전문가name" />
      </RightList>
    </ListWrap>
  );
};
