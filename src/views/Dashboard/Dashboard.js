import React from 'react';
import {
  Wrapper,
  Title,
  RegularButton,
  TableWrapper,
  Table,
  TableHead,
  TableBody,
  THead,
  TRow,
  TCell,
  Label,
  Span,
  Select } from '../../components/index';
import { StyledText, BoxWrapper, HeadWrapper, Box } from './Dashboard.styles';

export function Dashboard() {
  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Transaksi</Title>
      </HeadWrapper>
      <BoxWrapper>
        <Box>
          <Title>Barang Masuk</Title>
          <StyledText>70</StyledText>
        </Box>
        <Box>
          <Title>Barang Keluar</Title>
          <StyledText>70</StyledText>
        </Box>
        <Box>
          <Title>Total Transaksi</Title>
          <StyledText>70</StyledText>
        </Box>
      </BoxWrapper>
      <br />
      <HeadWrapper>
        <Label>
          <Select>
            <option>7 Hari</option>
            <option>30 Hari</option>
            <option>3 Bulan</option>
            <option>6 Bulan</option>
            <option>1 Tahun</option>
          </Select>
        </Label>
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
