import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  Select } from '../../../components/index';
import { StyledWrapper, HeadWrapper, TailWrapper } from './UpdateDemand.styles';

export function UpdateDemand() {
  const [itemList, setItemList] = useState([]);
  const [receiverList, setReceiverList] = useState([]);

  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState('');

  const { id } = useParams();

  useEffect(() => {
    Axios.get('/api/get/item')
      .then(res => setItemList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('/api/get/receiver')
      .then(res => setReceiverList(res.data))
      .catch(err => console.error(err));
  }, []);

  const updateDemandData = (id) => {
    Axios.patch(`/api/update/demand/${id}`, {
      id: id,
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
        <Title>Perbaharui Data</Title>
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
          <Link to="/report">
            <RegularButton>Batal</RegularButton>
          </Link>
          <Link to="/report">
            <SuggestedButton onClick={() => {updateDemandData(id)}}>Selesai</SuggestedButton>
          </Link>
        </TailWrapper>
      </StyledWrapper>
    </Wrapper>
  );
}
