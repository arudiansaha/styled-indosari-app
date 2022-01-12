import React, { useState, useEffect } from 'react';
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
  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Barang Masuk</Title>
        <RegularButton>Tambah</RegularButton>
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
            <TRow>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>
                  <RegularButton>Ubah</RegularButton>
                  <DestructiveButton>Hapus</DestructiveButton>
              </TCell>
            </TRow>
          </TableBody>
        </Table>
      </TableWrapper>
      <br />
      <HeadWrapper>
        <Title>Barang Keluar</Title>
        <RegularButton>Tambah</RegularButton>
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
            <TRow>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>
                  <RegularButton>Ubah</RegularButton>
                  <DestructiveButton>Hapus</DestructiveButton>
              </TCell>
            </TRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}
