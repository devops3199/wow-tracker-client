import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { wowDB } from 'shared/firebase';
import { BarLineChart } from 'components/components';
import { useAuth } from 'contexts/AuthProvider';

export default function Main() {
    const options = ['플레이 시간', '던전 횟수', '레이드 횟수'];
    const [record, setRecord] = useState<any>([]);
    const [filter, setFilter] = useState<string>('플레이 시간');
    const { currentUser } = useAuth();

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
