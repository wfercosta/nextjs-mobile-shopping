type CustomerType = {
  zipcode: string;
  city: string;
  address: string;
  loyalty: {
    points: string;
    cashback: string;
  };
};

type PdpType = {
  name: string;
  image: {
    url: string;
    alt: string;
  };
};

type OfferType = {
  seller: string;
  price: string;
  installments: {
    times: string;
    value: string;
  };
  shipping: {
    value: string;
    date: string;
  };
};

export type { CustomerType, PdpType, OfferType };
