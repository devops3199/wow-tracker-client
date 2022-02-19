import React, { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { BarChart } from 'components';
import moment from 'moment';

type Record = {
  id: number;
  playerId: number;
  beginAt: string;
  endAt: string;
  dungeonCount: number;
  raidCount: number;
  playAt: string;
};

export default function Main() {
    const options = ['플레이 시간', '던전 횟수', '레이드 횟수'];
    const [record, setRecord] = useState<Record[]>([]);
    const [filter, setFilter] = useState('플레이 시간');
    const [dateFrom, setDateFrom] = useState(moment().startOf("week").format("YYYY-MM-DD"));
    const [dateTo, setDateTo] = useState(moment().endOf("week").format("YYYY-MM-DD"));

    useEffect(() => {
      // TODO: get Play
      setRecord([]);
    }, []);

    function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
      setFilter(e.target.value);
    }

    return (
      <MainContainer>
        <DateContainer>
          <DateSelector>
            <label htmlFor="from">From</label>
            <input type="date" id="from" value={dateFrom} onChange={(e: ChangeEvent<HTMLInputElement>) => setDateFrom(e.target.value)} />
          </DateSelector>
          <DateSelector>
            <label htmlFor="to">To</label>
            <input type="date" id="to" value={dateTo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateTo(e.target.value)} />
          </DateSelector>
        </DateContainer>
        <FilterContainer>
          <select onChange={handleSelectChange}>
            {options.map((option, index) => {
              return (
              <option value={option} key={index.toString()}>
                {option}
              </option>);
            })}
          </select>
        </FilterContainer>
        {record.length === 0 ? (<DataNone><span>데이터가 없습니다.</span></DataNone>) : (<BarChart data={record} title={filter} />)}
      </MainContainer>
    );
};

const MainContainer = styled.div`
  width: 100%;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: .5rem 0;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DateSelector = styled.div`
  margin: 0 1rem;

  & label {
    margin: 0 1rem;
  }
`;

const DataNone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 400px;
  border: 1px solid #d2d2d2;
`;