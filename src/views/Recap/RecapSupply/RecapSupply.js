import React, { useState, useRef } from 'react';
import Axios from 'axios';
import ReactToPrint from 'react-to-print';
import {
  Wrapper,
  Label,
  Span,
  Input,
  Table,
  TableHead,
  TableBody,
  TRow,
  THead,
  TCell,
  TableWrapper,
  RegularButton
} from '../../../components/index';
import {
  HeadWrapper,
  ButtonWrapper,
  PrintWrapper,
  HeadPrintWrapper,
  TitleStart,
  TitleEnd
} from './RecapSupply.styles';

export function RecapSupply() {
  const [supplyList, setSupplyList] = useState([]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  let componentRef = useRef();

  const searchDate = () => {
    Axios.post('http://localhost:3080/api/filter/supplied', {
      startDate: startDate,
      endDate: endDate,
    })
      .then(res => setSupplyList(res.data))
      .catch(err => console.error(err));
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <Label>
          <Span>Dari</Span>
          <Input
            type="date"
            onChange={e => setStartDate(e.target.value)}
          />
        </Label>
        <Label>
          <Span>Sampai</Span>
          <Input
            type="date"
            onChange={e => setEndDate(e.target.value)}
          />
        </Label>
        <ButtonWrapper>
          <RegularButton onClick={searchDate}>Cari</RegularButton>
        </ButtonWrapper>
        <ButtonWrapper>
          <ReactToPrint
            trigger={() => <RegularButton>Cetak</RegularButton>}
            content={() => componentRef}
          />
        </ButtonWrapper>
      </HeadWrapper>
      <br />
      <div style={{ display: 'none' }}>
        <PrintWrapper ref={(el) => (componentRef = el)}>
          <HeadPrintWrapper>
            <TitleStart>
              <h1>CV. Indosari</h1>
              <p>
                Jl. Raya Sapan No. 82B Desa Teggalluar <br />
                Bojongsoang, BANDUNG 40287
              </p>
            </TitleStart>
            <TitleEnd>
              <p>Telp. (022) 87108461</p>
            </TitleEnd>
          </HeadPrintWrapper>
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
                {supplyList.map((val) => {
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
        </PrintWrapper>
      </div>
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
            {supplyList.map((val) => {
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
