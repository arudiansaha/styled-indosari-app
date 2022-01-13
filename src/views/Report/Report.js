import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {
  Wrapper,
  Title,
  RegularButton,
  DestructiveButton,
  TableWrapper, Table,
  TableHead,
  TableBody,
  THead,
  TRow,
  TCell } from '../../components/index';
import { HeadWrapper } from './Report.styles';

export function Report() {
  const [supplyList, setSupplyList] = useState([]);
  const [demandList, setDemandList] = useState([]);

  useEffect(() => {
    Axios.get('/api/get/supply')
      .then(res => setSupplyList(res.data))
      .catch(err => console.error(err));
  }, []);

  const delSupplyData = (id) => {
    Axios.delete(`/api/delete/supply/${id}`)
      .then(() => {
        setSupplyList(supplyList.filter(val => val.id !== id));
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    Axios.get('/api/get/demand')
      .then(res => setDemandList(res.data))
      .catch(err => console.error(err));
  }, []);

  const delDemandData = (id) => {
    Axios.delete(`/api/delete/demand/${id}`)
      .then(() => {
        setDemandList(demandList.filter(val => val.id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Barang Masuk</Title>
        <RegularButton>Cetak</RegularButton>
      </HeadWrapper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TRow>
              <THead>Tanggal</THead>
              <THead>Kode</THead>
              <THead>Nama Barang</THead>
              <THead>Jumlah</THead>
              <THead>Pemasok</THead>
              <THead>Aksi</THead>
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
                  <TCell>{val.supplier}</TCell>
                  <TCell>
                      <Link to={`/update/supply/${val.id}`}>
                        <RegularButton>Ubah</RegularButton>
                      </Link>
                      <DestructiveButton onClick={() => {delSupplyData(val.id)}}>Hapus</DestructiveButton>
                  </TCell>
                </TRow>
              )})}
          </TableBody>
        </Table>
      </TableWrapper>
      <br />
      <HeadWrapper>
        <Title>Barang Keluar</Title>
        <RegularButton>Cetak</RegularButton>
      </HeadWrapper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TRow>
              <THead>Tanggal</THead>
              <THead>Kode</THead>
              <THead>Nama Barang</THead>
              <THead>Jumlah</THead>
              <THead>Penerima</THead>
              <THead>Aksi</THead>
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
                  <TCell>{val.receiver}</TCell>
                  <TCell>
                      <Link to={`/update/demand/${val.id}`}>
                        <RegularButton>Ubah</RegularButton>
                      </Link>
                      <DestructiveButton onClick={() => {delDemandData(val.id)}}>Hapus</DestructiveButton>
                  </TCell>
                </TRow>
              )})}
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}
