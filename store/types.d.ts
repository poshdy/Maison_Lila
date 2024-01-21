export type slider = {
  id: string;
  name: string;
  place: string;
  published: boolean;
  content: SliderContent[];
};

export type SliderContent = {
  id: string;
  sliderId: string;
  text: string;
  title: string;
  image: string;
};
export type Zone = {
  id: string;
  name: string;
  fees: number;
};
export type Address = {
  id: string ;
  userId: string 
  zone: Zone;
  streetNumber: string;
  Floor: string;
  BuildingNo: string;
  apartmenNo: string;
  city: string;
};

export type Category = {
  id: string;
  name: string;
  imageUrl: string;
  products: any;
  subCategory: SubCategory[];
};

export type Subcategory = {
  id: string;
  name: string;
  parentId: string;
  product: any;
};
export type Product = {
  name: string;
  price: number;
  id: string;
  SoldOut: boolean;
  discountValue: string;
  description: string;
  salePrice: string;
  category: {
    name: string;
    id: string;
  };
  image: {
    id: string;
    url: string;
  }[];
};
export type CartItems = {
  id: string;
  name: string | undefined;
  image: string | undefined;
  quantity: number;
  price: number | undefined;
};

export interface ContextI {
  logIn: (data: { email: string; password: string }) => Promise<any>;
  createAccount: (data: {
    email: string;
    name: string;
    password: string;
  }) => Promise<any>;
  logOut: () => Promise<void>;
}

export type OrderDeatils = {
  user: {
    email: string;
    id: string;
    name: string;
  };
  OrderItems: {
    quantity: number;
    Product: {
      name: string;
      price: string;
      image: {
        url: string;
      }[];
    };
  }[];
  orderSummary: {
    id: string;
    paymentMethod: string;
    Subtotal: string;
    DeliveryFee: string;
    Discount: string;
    OrderTotal: number;
  };

  Address: {
    id: string;
    streetName: string;
    BuildingNo: string;
    Floor: string;
    apartmentNo: string;
    city: string;
  };
  id: string;
  orderStatus: string;
  comment: null | string;
  paymentMethod: string;
  zone: {
    id: string;
    name: string;
  };
  orderTotal: string;
  createdAt: string;
};

export type BottomImage = {
  id: string;
  text: string;
  image: string;
  title: string;
  published: boolean;
};

export type banner = {
  id: string;
  text: string;
  image: string;
  place: string;
  title: string;
  published: boolean;
};

export type Review = {
  id: string;
  user: {
    name: string;
    email: string;
  };
  published: boolean;
  content: string;
  rating: string;
  createdAt: string;
};

export type Anoun = {
  id: string;
  text: string;
};
