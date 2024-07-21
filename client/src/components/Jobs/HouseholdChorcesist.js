import { Button } from '@mui/material';
import { useReducer, useRef } from 'react';

// 1. define initial Value
const initialState = {
    job: '',
    jobs: [],
};

// 2. define constant action
const CREATE_JOB = 'CREATE_JOB';
const ADD_JOB = 'ADD_JOB';
const CLEAR_JOB = 'CLEAR_JOB';

const setJob = (payload) => {
    return {
        type: CREATE_JOB,
        payload: payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload: payload,
    };
};

const removeJob = (payload) => {
    return {
        type: CLEAR_JOB,
        payload: payload,
    };
};

//3. REDUCER
const reducer = (state, action) => {
    switch (action.type) {
        case CREATE_JOB:
            return {
                ...state,
                job: action.payload,
            };

        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };

        case CLEAR_JOB:
            const updatedJobsList = state.jobs.filter((job, index) => index !== action.payload);
            return {
                ...state,
                jobs: updatedJobsList,
            };

        default:
            return state;
    }
};

// 4. dispatch

export default function HouseholdChorcesist() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef();
    const { job, jobs } = state;
    console.log(state);

    const handleAddJobs = (job) => {
        dispatch(addJob(job));
        dispatch(setJob('')); // clear
        console.log('state after adding jobs: ', state);

        inputRef.current.focus(); // auto focus on input
    };

    return (
        <div style={{ marginTop: 28 }}>
            <h1>Household List:</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder="Creat jobs..."
                style={{ padding: 4, fontSize: '16px' }}
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <Button variant="contained" onClick={() => handleAddJobs(job)}>
                Add
            </Button>
            <ul style={{ padding: 16 }}>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job} <span onClick={() => dispatch(removeJob(index))}>&times;</span>{' '}
                    </li>
                ))}
            </ul>
        </div>
    );
}
