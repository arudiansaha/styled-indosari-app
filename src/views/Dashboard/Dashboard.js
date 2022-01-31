import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import {
  Wrapper,
  Title,
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  THead,
  TRow,
  TCell
} from '../../components/index';
import {
  StyledText,
  BoxWrapper,
  HeadWrapper,
  Box
} from './Dashboard.styles';

export function Dashboard() {
  const [itemList, setItemList] = useState([]);
  const [supplyList, setSupplyList] = useState([]);
  const [demandList, setDemandList] = useState([]);
  const [totalList, setTotalList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/total/supply')
      .then(res => setSupplyList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/total/demand')
      .then(res => setDemandList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/total')
      .then(res => setTotalList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/total/all')
      .then(res => setItemList(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Transaksi</Title>
      </HeadWrapper>
      <BoxWrapper>
        <Box>
          <Title>Total Masuk</Title>
          {supplyList.map((val) => {
            return (
              <StyledText key={val.totalAmount}>{val.totalAmount}</StyledText>
            )})}
          <p>(30 Hari terakhir)</p>
        </Box>
        <Box>
          <Title>Total Keluar</Title>
          {demandList.map((val) => {
            return (
              <StyledText key={val.totalAmount}>{val.totalAmount}</StyledText>
            )})}
          <p>(30 Hari terakhir)</p>
        </Box>
        <Box>
          <Title>Barang Tersedia</Title>
          {totalList.map((val) => {
            return (
              <StyledText key={val.totalSum}>{val.totalSum}</StyledText>
            )})}
        </Box>
      </BoxWrapper>
      <br />
     <TableWrapper>
        <Table>
          <TableHead>
            <TRow>
              <THead>Kode</THead>
              <THead>Nama Barang</THead>
              <THead>Jumlah (masuk)</THead>
              <THead>Jumlah (keluar)</THead>
              <THead>Stok</THead>
            </TRow>
          </TableHead>
          <TableBody>
            {itemList.map((val) => {
              return (
                <TRow key={val.id}>
                  <TCell>{val.id}</TCell>
                  <TCell>{val.name}</TCell>
                  <TCell>{val.itemIn}</TCell>
                  <TCell>{val.itemOut}</TCell>
                  <TCell>{val.total}</TCell>
                </TRow>
              )})}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}
