import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { wowDB } from 'shared/firebase';
import { BarLineChart } from 'components/components';
import { useAuth } from 'contexts/AuthProvider';
import moment from 'moment';

export default function Main() {
    const options = ['플레이 시간', '던전 횟수', '레이드 횟수'];
    const [record, setRecord] = useState<any>([]);
    const [filter, setFilter] = useState<string>('플레이 시간');
    const { currentUser } = useAuth();
    const today = moment().format("MMM Do YY"); 

    function handleChange(e : React.ChangeEvent<HTMLSelectElement>) {
      setFilter(e.target.value);
    }

    useEffect(() => {
      wowDB.where('uid', '==', currentUser.uid).orderBy('date','asc').get().then((docs) => {
        const list:any = [];
        docs.forEach((doc) => {
          list.push({...doc.data(), id : doc.id});
        })
        setRecord(list);
      }).catch((err) => console.log(err, "Error"));
    }, []);

    return (
      <MainContainer>
        <DateContainer>
          <Prev>
            Prev
          </Prev>
          <DateList>
            <li>1</li>
            <li>2</li>
            <li>{today}</li>
            <li>4</li>
            <li>5</li>
          </DateList>
          <Next>
            Next
          </Next>
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
        <BarLineChart RecordsArr={record} title={filter} />
      </MainContainer>
    );
};

const MainContainer = styled.div`
  width: 100%;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DateList = styled.ul`
  display: contents;

  & li {
    display: inline;
    margin: 0 1.25rem;
  }
`;

const Prev = styled.div`
  cursor: pointer;
  margin: 0 1.25rem;
`;

const Next = styled.div`
  cursor: pointer;
  margin: 0 1.25rem;
`;
