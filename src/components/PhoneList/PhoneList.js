import React from "react";
import PhoneItem from "../PhoneItem/PhoneItem";
import styled from "styled-components";

const PhoneWrapper = styled.div`
    display : flex;
    flex-direction : column;
    padding-bottom : 50px;
`;

const PhoneList = ({list, deleteItem}) =>{
    return(
        <PhoneWrapper>
            {Object.values(list).map(item=>{
                return <PhoneItem {...item} key = {item.id} onClick={deleteItem}/>;
            })}
        </PhoneWrapper >
    );
};

export default PhoneList;

// Object.values(list)를 통해 Json 데이터의 value 값으로만 이루어져 있는 배열을 만듭니다.

// map 함수를 통해 데이터의 갯수만큼 PhoneItem컴포넌트를 만듭니다.

// 데이터 값을 props로 전달해줍니다.

// 여기서 넘어간 props는 id, name, phone 