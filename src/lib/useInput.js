import {useState} from 'react';

const useInput = (initialValue) =>{
    const [value, setValue] = useState(initialValue);   // useState를 사용하여 상태 값과 그 값을 바꿔주는 함수를 선언했습니다.

    // input 값이 변경되었을 때 실행시켜줄 함수입니다. 
    const onChange = e =>{
        // Destructing Assignment
        const { target : {value} } = e;
        setValue(value);
    }
    // 상태 값, 그 값을 바꿔주는 함수, input 값이 변경되었을 때 실행시켜줄 함수를 반환
    return [value, setValue, onChange];
}

export default useInput; 