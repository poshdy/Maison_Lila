export type ZoneColumn = {
  id: string;
  name: string;
  createdAt: string;
  fees: string;
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
  place: "TOP" | "BOTTOM";
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
  user: {
    name: string;
    email: string;
  };
  orderSummary: {
    id: string;
    paymentMethod: string;
    Subtotal: string;
    DeliveryFee: string;
    Discount: string;
    OrderTotal: number;
  };
  orderStatus: string;
  zone: ZoneColumn;
  OrderItems: {
    quantity: string;
    product: ProductColmun;
  }[];
  streetName: string;
  apartmentNo: string;
  BuildingNo: string;
  Floor: string;
  createdAt: string;
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

export type CategoryColumn = {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  subCategory: {
    id: string;
    name: string;
    parentId: string;
  }[];

  createdAt: string;
};
export type SubCatColumn = {
  id: string;
  name: string;
  parent: {
    name: string;
    id: string;
  };
  createdAt: string;
};

export type CouponColumn = {
  id: string;
  name: string;
  amount: number;
  decription: string;
  expiration: string;
  valid: boolean;
  Minimum: number;
  countUsed: number;
  createdAt: string;
  maxUsage: number;
};
export type ProductColmun = {
  id: string;
  name: string;
  price: string;
  stock: string;
  createdAt: string;
  UpdatedBy: {
    adminName: string;
  };
  SoldOut: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  salePrice: string;
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
    zone: ZoneColumn;
    apartmentNo: string;
    city: string;
  };
  orderStatus: string;
  comment: null | string;
  paymentMethod: string;
  orderTotal: string;
  createdAt: string;
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
