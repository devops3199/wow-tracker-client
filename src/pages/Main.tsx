import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { wowDB } from 'shared/firebase';
import { BarChart } from 'components/components';
import { useAuth } from 'contexts/AuthProvider';
import moment from 'moment';
import { Strategy } from 'passport-bnet';

export default function Main() {
    const options = ['플레이 시간', '던전 횟수', '레이드 횟수'];
    const [record, setRecord] = useState<any>([]);
    const [filter, setFilter] = useState<string>('플레이 시간');
    const { currentUser } = useAuth();
    const [dateFrom, setDateFrom] = useState<string>(moment().startOf("week").format("YYYY-MM-DD"));
    const [dateTo, setDateTo] = useState<string>(moment().endOf("week").format("YYYY-MM-DD"));

    function handleChange(e : React.ChangeEvent<HTMLSelectElement>) {
      setFilter(e.target.value);
    }

    useEffect(() => {
      wowDB.where('uid', '==', currentUser.uid).orderBy('date','asc').startAt(dateFrom).endAt(dateTo).get().then((docs) => {
        const list:any = [];
        docs.forEach((doc) => {
          list.push({...doc.data(), id : doc.id});
        })
        setRecord(list);
      }).catch((err) => console.log(err, "Error"));
    }, [dateFrom, dateTo, currentUser.uid]);

    return (
      <MainContainer>
        <DateContainer>
          <DateSelector>
            <label htmlFor="from">From</label>
            <input type="date" id="from" value={dateFrom} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDateFrom(e.target.value)} />
          </DateSelector>
          <DateSelector>
            <label htmlFor="to">To</label>
            <input type="date" id="to" value={dateTo} onChange={(e : React.ChangeEvent<HTMLInputElement>) => setDateTo(e.target.value)} />
          </DateSelector>
        </DateContainer>
        <FilterContainer>
          <select onChange={handleChange}>
            {options.map((option, index) => {
              return (<option value={option} key={index}>
                {option}
              </option>);
            })}
          </select>
        </FilterContainer>
        {record.length === 0 ? (<DataNone><span>데이터가 없습니다.</span></DataNone>) : (<BarChart RecordsArr={record} title={filter} />)}
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