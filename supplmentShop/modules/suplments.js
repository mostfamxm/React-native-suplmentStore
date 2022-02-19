class Suplment {
    static idGenerator = 1;
  
    constructor(
      categoryIds,
      title,
      price,  
      imageUrl,
      description,
      sizes,
    ) {
      this.id = Product.idGenerator++;
      this.categoryIds = categoryIds;
      this.title = title;
      this.price = price;
      this.imageUrl = imageUrl;
      this.description = description;
      this.sizes = sizes;
    }
  
  }
  
  
  export default Suplment;