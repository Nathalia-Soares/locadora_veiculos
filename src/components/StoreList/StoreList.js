// src/components/StoreList.js
import React from 'react';
import StoreCard from './../StoreCard/StoreCard';
import Gendai from './../../assets/gendai.png';
import Subway from './../../assets/subway.jpg';
import Ragazzo from './../../assets/ragazzo.jpg';
import McDonalds from './../../assets/mc donalds.jpg';
import Giraffas from './../../assets/giraffas.png';
import Habibs from './../../assets/habibs.png';
import ChinaInBox from './../../assets/china in box.png';
import BurguerKing from './../../assets/burguer king.webp';
import Kfc from './../../assets/kfc.avif';
import PizzaHut from './../../assets/pizza hut.jpg';
import Spoleto from './../../assets/spoleto.jpg';
import Acai from './../../assets/acai.png';
import './StoreList.css';

const stores = [
  {
    name: "Gendai",
    type: "Japonesa",
    distance: "0.7",
    deliveryTime: "65-75",
    fee: "Grátis",
    image: Gendai
  },
  {
    name: "Subway",
    type: "Lanches",
    distance: "0.9",
    deliveryTime: "90-100",
    fee: "R$ 5,00",
    image: Subway
  },
  {
    name: "Ragazzo",
    type: "Italiana",
    distance: "1.2",
    deliveryTime: "50-70",
    fee: "R$ 7,00",
    image: Ragazzo
  },
  {
    name: "Mc Donalds",
    type: "Lanches",
    distance: "0.5",
    deliveryTime: "50-65",
    fee: "R$ 2,00",
    image: McDonalds
  },
  {
    name: "Giraffas",
    type: "Lanches",
    distance: "1.8",
    deliveryTime: "80-100",
    fee: "R$ 10,00",
    image: Giraffas
  },
  {
    name: "Habib's",
    type: "Arabe",
    distance: "0.2",
    deliveryTime: "45-70",
    fee: "R$ 5,00",
    image: Habibs
  },
  {
    name: "China in Box",
    type: "Japonesa",
    distance: "2.9",
    deliveryTime: "90-120",
    fee: "R$ 8,00",
    image: ChinaInBox
  },
  {
    name: "Burguer King",
    type: "Lanches",
    distance: "1.4",
    deliveryTime: "50-80",
    fee: "R$ 4,00",
    image: BurguerKing
  },
  {
    name: "KFC",
    type: "Lanches",
    distance: "0.6",
    deliveryTime: "80-100",
    fee: "R$ 12,00",
    image: Kfc
  },
  {
    name: "Pizza Hut",
    type: "Pizzas",
    distance: "3.6",
    deliveryTime: "100-120",
    fee: "R$ 15,00",
    image: PizzaHut
  },
  {
    name: "Spoleto",
    type: "Italiana",
    distance: "2.0",
    deliveryTime: "75-95",
    fee: "R$ 5,00",
    image: Spoleto
  },
  {
    name: "Açaí",
    type: "Sobremesas",
    distance: "1.1",
    deliveryTime: "25-40",
    fee: "R$ 2,00",
    image: Acai
  },
];

const StoreList = () => {
  return (
    <div className="store-list">
      {stores.map((store, index) => (
        <StoreCard key={index} store={store} />
      ))}
    </div>
  );
};

export default StoreList;
