import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import logging from 'shared/logging';
import { wowDB } from 'shared/firebase';

export default function AddData() {
    const date = useRef<HTMLInputElement>(null);
    const begin_time = useRef<HTMLInputElement>(null);
    const end_time = useRef<HTMLInputElement>(null);
    const dun = useRef<HTMLInputElement>(null);
    const raid = useRef<HTMLInputElement>(null);

    function handleAddData(e : React.FormEvent) {
        e.preventDefault();

        const data = {
            date : date.current?.value,
            begin_time : begin_time.current?.value,
            end_time : end_time.current?.value,
            dun : Number(dun.current?.value),
            raid : Number(raid.current?.value)
        };

        wowDB.add({ ...data })
        .then(doc => {
            logging.info(doc);
            alert('등록 완료');
        })
        .catch(err => {
            logging.error(err);
            alert('문제가 있습니다. 다시 시도해주세요.');
        });
    }

    return (
        <AddContainer>
            <AddForm onSubmit={handleAddData}>
                <InputWrapper>
                    <label htmlFor="play">플레이 날짜</label>
                    <input type="date" ref={date} name="play" required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="begin">시작 시간</label>
                    <input type="time" ref={begin_time} name="begin" required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="end">종료 시간</label>
                    <input type="time" ref={end_time} name="end" required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="dun">던전 횟수</label>
                    <input type="number" ref={dun} name="dun" min="0" max="10" required />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="raid">레이드 횟수</label>
                    <input type="number" ref={raid} name="raid" min="0" max="10" required />
                </InputWrapper>
                <ButtonWrapper>
                    <button>
                        기록하기
                    </button>
                </ButtonWrapper>
            </AddForm>
        </AddContainer>
    );
};

const AddContainer = styled.div`
    width: 100%;
`;

const AddForm = styled.form`
    width: 100%;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 600px;
    margin: 1.5rem auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    & button {
        padding: .25rem .75rem;
        background-color: #FFCD4A;
        border: 1px solid #FFCD4A;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
    }
`;