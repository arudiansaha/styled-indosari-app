import React from 'react';
import { Wrapper, Title, RegularButton, TableWrapper, Table, TableHead, TableBody, THead, TRow, TCell } from '../../components/index';
import { HeadWrapper } from './Dashboard.styles';

export function Dashboard() {
  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Dashboard</Title>
        <RegularButton>Tambah</RegularButton>
      </HeadWrapper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TRow>
              <THead>Tanggal</THead>
              <THead>Kode</THead>
              <THead>Nama Barang</THead>
              <THead>Stok</THead>
            </TRow>
          </TableHead>
          <TableBody>
            <TRow>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
              <TCell>First</TCell>
            </TRow>
          </TableBody>
        </Table>
      </TableWrapper>
    </Wrapper>
  );
}
