import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Wrapper,
  Title,
  RegularButton,
  SuggestedButton,
  FormWrapper,
  Label,
  Span,
  Input,
  Select 
  } from '../../components/index';
import { StyledWrapper, HeadWrapper, TailWrapper } from './Record.styles';

export function Record() {
  const [itemList, setItemList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);
  const [receiverList, setReceiverList] = useState([]);

  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [supplier, setSupplier] = useState('');
  const [receiver, setReceiver] = useState('');

  useEffect(() => {
    Axios.get('/api/get/item')
      .then(res => setItemList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('/api/get/supplier')
      .then(res => setSupplierList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('/api/get/receiver')
      .then(res => setReceiverList(res.data))
      .catch(err => console.error(err));
  }, []);

  const addSupplyData = () => {
    Axios.post('/api/create/supply', {
      date: date,
      name: name,
      amount: amount,
      supplier: supplier,
      itemId: name,
      supplierId: supplier,
    })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  const addDemandData = () => {
    Axios.post('/api/create/demand', {
      date: date,
      name: name,
      amount: amount,
      receiver: receiver,
      itemId: name,
      receiverId: receiver,
    })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Barang Masuk</Title>
      </HeadWrapper>
      <StyledWrapper>
        <FormWrapper>
          <Label>
            <Span>Tanggal</Span>
            <Input type="date" onChange={e => setDate(e.target.value)} />
          </Label>
          <Label>
            <Span>Nama Barang</Span>
            <Select onChange={e => setName(e.target.value)}>
              <option disabled>Pilih Barang</option>
              {itemList.map((val) => {
                return <option key={val.id} value={val.name}>{val.name}</option>
              })}
            </Select>
          </Label>
          <Label>
            <Span>Jumlah</Span>
            <Input type="number" placeholder="0" onChange={e => setAmount(e.target.value)}/>
          </Label>
          <Label>
            <Span>Pemasok</Span>
            <Select onChange={e => setSupplier(e.target.value)}>
              <option disabled>Pilih Pemasok</option>
              {supplierList.map((val) => {
                return <option key={val.id} value={val.name}>{val.name}</option>
              })}
            </Select>
          </Label>
        </FormWrapper>
        <TailWrapper>
          <RegularButton>Reset</RegularButton>
          <SuggestedButton onClick={addSupplyData}>Selesai</SuggestedButton>
        </TailWrapper>
      </StyledWrapper>
      <br />
      <HeadWrapper>
        <Title>Barang Keluar</Title>
      </HeadWrapper>
      <StyledWrapper>
        <FormWrapper>
          <Label>
            <Span>Tanggal</Span>
            <Input type="date" onChange={e => setDate(e.target.value)} />
          </Label>
          <Label>
            <Span>Nama Barang</Span>
            <Select onChange={e => setName(e.target.value)}>
              <option disabled>Pilih Barang</option>
              {itemList.map((val) => {
                return <option key={val.id} value={val.name}>{val.name}</option>
              })}
            </Select>
          </Label>
          <Label>
            <Span>Jumlah</Span>
            <Input type="number" placeholder="0" onChange={e => setAmount(e.target.value)}/>
          </Label>
          <Label>
            <Span>Penerima</Span>
            <Select onChange={e => setReceiver(e.target.value)}>
              <option disabled>Pilih Penerima</option>
              {receiverList.map((val) => {
                return <option key={val.id} value={val.name}>{val.name}</option>
              })}
            </Select>
          </Label>
        </FormWrapper>
        <TailWrapper>
          <RegularButton>Reset</RegularButton>
          <SuggestedButton onClick={addDemandData}>Selesai</SuggestedButton>
        </TailWrapper>
      </StyledWrapper>
    </Wrapper>
  );
}
