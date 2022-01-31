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
  Select
} from '../../../components/index';
import {
  StyledWrapper,
  HeadWrapper,
  TailWrapper
} from './UpdateSupply.styles';

export function UpdateSupply() {
  const [itemList, setItemList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);

  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [supplier, setSupplier] = useState('');

  const { id } = useParams();

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/item')
      .then(res => setItemList(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/supplier')
      .then(res => setSupplierList(res.data))
      .catch(err => console.error(err));
  }, []);

  const updateSupplyData = (id) => {
    Axios.patch(`http://localhost:3080/api/update/supply/${id}`, {
      id: id,
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

  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Perbaharui Data</Title>
      </HeadWrapper>
      <StyledWrapper>
        <FormWrapper>
          <Label>
            <Span>Tanggal</Span>
            <Input
              type="date"
              onChange={e => setDate(e.target.value)}
            />
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
            <Input
              type="number"
              placeholder="0"
              onChange={e => setAmount(e.target.value)}
            />
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
          <Link to="/report">
            <RegularButton>Batal</RegularButton>
          </Link>
          <Link to="/report">
            <SuggestedButton onClick={() => {updateSupplyData(id)}}>Selesai</SuggestedButton>
          </Link>
        </TailWrapper>
      </StyledWrapper>
    </Wrapper>
  );
}
