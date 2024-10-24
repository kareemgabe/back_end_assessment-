
export class CreateProductDto {
  name: string;
  description?: string;
  price: number;
  stock: number;
  vendor: string; // Vendor ID as a string
}

  