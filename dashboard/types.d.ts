export type ZoneColumn = {
  id: string;
  name: string;
  createdAt: string;
  fees: number;
};

export type AnounColumn = {
  id: string;
  text: string;
  createdAt: string;
  published: boolean;
};

export type BannerColumn = {
  id: string;
  text: string;
  title: string;
  image: string;
  location: "TOP" | "BOTTOM";
  createdAt: string;
  published: boolean;
};
export type BottomImageColumn = {
  id: string;
  text: string;
  title: string;
  image: string;
  createdAt: string;
  published: boolean;
};
export type SliderColumn = {
  id: string;
  name: string;
  place: string;
  published: boolean;
  content: {
    id: string;
    sliderId: string;
    image: string;
    text: string;
    title: string;
  }[];
  createdAt: string;
  published: boolean;
};
export type SliderContentColumn = {
  id: string;
  slider: SliderColumn;
  image: string;
  title: string;
  text: string;
  createdAt: string;
};
export type AdminsColumn = {
  id: string;
  email: string;
  name: string;
  role: string;
};
export type SalesColumn = {
  id: string;
  price: string;
  product: ProductColmun;
  Revenue: string;
  soldAt: string;
  createdAt: string;
  quantitySold: string;
};
export type OrderColumn = {
  id: string;
  userId: string;
  addressId: string;
  phoneNumber: string;
  comment: string | null;
  createdAt: string;
  updatedAt: string;
  orderStatus: string;
  orderSummaryId: string;
  OrderItems: OrderItems[];
  OrderSummary: {
    id: string;
    paymentMethod: string;
    Subtotal: number;
    DeliveryFee: number;
    Discount: number;
    OrderTotal: number;
  };
  user: {
    email: string;
    id: string;
    name: string;
  };
  Address: {
    BuildingNo: string;
    apartmentNo: string;
    Floor: string;
    streetName: string;
    zone: ZoneColumn;
  };
};

export type CustomizedOrderColumn = {
  id: string;
  name: string;
  email: string;
  image: string;
  message: string;
  phone: string;
  createdAt: string;
};
export type ReviewColumn = {
  id: string;
  user: {
    name: string;
    email: string;
  };
  published: boolean;
  content: string;
  rating: string;
  product: {
    name: string;
    id: string;
    image: {
      id: string;
      url: string;
    }[];
  };
  createdAt: string;
};

export type ZoneOrderCount = {
  orderCount: number;
  zoneName: string;
};

export type CategoryColumn = {
  _count: {
    products: number;
  };
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  subCategory?: { id: string; name: string };
  Category: {
    id: string;
    name: string;
  }[];

  createdAt: string;
};

export type CouponColumn = {
  id: string;
  couponCode: string;
  couponData: {
    limit: number;
    expiration: string;
    valid: boolean;
    countUsed: number;
  };
  discountAmount: number;
  minimumAmount: number;
  createdAt: string;
};
export type ProductColmun = {
  id: string;
  name: string;
  price: number;
  productInventory: {
    stock: number;
    soldOut: boolean;
  };
  productAttribute: {
    bestSeller: boolean;
    newArrival: boolean;
    recommended: boolean;
  };
  createdAt: string;
  salePrice: number;
  image: {
    url: string;
    id: string;
    productId: string;
  }[];
  category: {
    name: string;
  };
};

export interface ContextI {
  logIn: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<void>;
}

export type OrderDeatils = {
  id: string;
  userId: string;
  addressId: string;
  phoneNumber: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  orderStatus: string;
  orderSummaryId: string;
  OrderItems: OrderItems[];
  OrderSummary: {
    id: string;
    paymentMethod: string;
    Subtotal: number;
    DeliveryFee: number | number;
    Discount: number;
    OrderTotal: number;
  };
  user: {
    email: string;
    id: string;
    name: string;
  };
  Address: {
    BuildingNo: string;
    apartmentNo: string;
    Floor: string;
    streetName: string;
    zone: ZoneColumn;
  };
};

export type OrderItems = {
  quantity: number;
  Product: {
    name: string;
    price: string;
    image: {
      url: string;
    }[];
  };
};

export type ContactColumn = {
  id: string;
  email: string;

  facebook: string;
  instagram: string;
  phone: string;
  tiktok: string;
};
