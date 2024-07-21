import { Button } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { useReducer } from 'react';
import HouseholdChorcesist from './HouseholdChorcesist';
//1. initialState value
const initialState = 0;

// 2. define actions
const UP_ACTION = 'UP';
const DOWN_ACTION = 'DOWN';

// 3. reducer
const reducer = (state, action) => {
    //. state === initalState
    console.log('Recuder is running....');
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            return state;
    }
};

function Jobs() {
    // khi component chạy thì useReducer nhận reducer chưa gọi đến, nhận giá trị khởi tạo trả về
    // state === initialState: là phần tử đầu tiên
    // dispatch là một function, thực hiện một action

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div style={{ height: '3000px' }}>
            <h1>useReducer</h1>
            <p>{state}</p>
            <button
                style={{
                    padding: 4,
                    border: '1px solid #333',
                    color: 'white',
                    backgroundColor: 'yellowgreen',
                }}
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <HouseholdChorcesist />
        </div>
    );
}

export default Jobs;
