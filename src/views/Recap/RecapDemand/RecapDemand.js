import React, { useState } from 'react';
import Axios from 'axios';
import { Wrapper, Label, Span,
  Input, Table, TableHead,
  TableBody, TRow, THead,
  TCell, TableWrapper, RegularButton } from '../../../components/index';
import { HeadWrapper, ButtonWrapper } from './RecapDemand.styles';

export function RecapDemand() {
  const [demandList, setDemandList] = useState([]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const searchDate = () => {
    Axios.post('http://localhost:3080/api/filter/demanded', {
      startDate: startDate,
      endDate: endDate,
    })
      .then(res => setDemandList(res.data))
      .catch(err => console.error(err));
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <Label>
          <Span>Dari</Span>
          <Input type="date" onChange={e => setStartDate(e.target.value)}/>
        </Label>
        <Label>
          <Span>Sampai</Span>
          <Input type="date" onChange={e => setEndDate(e.target.value)}/>
        </Label>
        <ButtonWrapper>
          <RegularButton onClick={searchDate}>Cari</RegularButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <RegularButton>Cetak</RegularButton>
        </ButtonWrapper>
      </HeadWrapper>
      <br />
      <TableWrapper>
        <Table>
          <TableHead>
            <TRow>
              <THead>Tanggal</THead>
              <THead>Kode</THead>
              <THead>Nama Barang</THead>
              <THead>Jumlah</THead>
            </TRow>
          </TableHead>
          <TableBody>
            {demandList.map((val) => {
              return (
                <TRow key={val.id}>
                  <TCell>{val.dates}</TCell>
                  <TCell>{val.id}</TCell>
                  <TCell>{val.name}</TCell>
                  <TCell>{val.amount}</TCell>
                </TRow>
              )})}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}
