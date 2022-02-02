export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description:
      'Ele tem uma das melhores telas do mercado ou seja grande e com uma otima resolução',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Umas das melhores cameras que você pode encontrar no mercado',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Uma opição mais barata porem sem perda de qualidade ',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
