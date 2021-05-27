import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from 'contexts/AuthProvider';
import { wowDB } from 'shared/firebase';
import { BarLineChart } from 'components/components';

export default function Main() {
    const { currentUser } = useAuth();
    const [record, setRecord] = useState<any>([]);

    useEffect(() => {
      wowDB.orderBy('date','asc').get().then((docs) => {
        const list:any = [];
        docs.forEach((doc) => {
          list.push({...doc.data(), id : doc.id});
        })
        setRecord(list);
      }).catch((err) => console.log(err, "Error"));
    }, []);

    return (
      <MainContainer>
        <h4>내가 플레이 한 시간</h4>
        <BarLineChart RecordsArr={record} title="플레이 시간" />
      </MainContainer>
    );
};

const MainContainer = styled.div`
  width: 100%;
`;
