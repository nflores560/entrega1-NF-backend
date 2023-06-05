
class ProductManager{
    constructor() {
        this.products = [];
        //Defino el constructor products
    }


// Método para retornar el arreglo de productos
getProducts = () => {
    return this.products;
}

// Parámetros para almacenar los productos

addProduct = (title, description, price, thumbnail,code,stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: [] //products con array vacío
    }

    if (this.products.length === 0){
        product.id = 1
    } else {
        product.id = this.products [this.products.length-1 ].id + 1
    }

    this.products.push(product)  //pusheo el producto
}


getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product => product.id === idProduct); 

    if (productIndex === -1){
        console.log("Not found");
        return;
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log ("El producto se agregó correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const gestionadorProductos = new ProductManager ();
gestionadorProductos.addProduct ('Cuadro perritos', 'blanco y negro', 1000, 'sin imagen', 'ad143', 20 );
gestionadorProductos.addProduct ('Florero 3d', 'plateado', 750, 'sin imagen', 'ad144', 10 );
gestionadorProductos.addProduct ('Maceta floreada', 'colores', 550, 'sin imagen', 'ad145', 40 );
gestionadorProductos.addProduct ('Portallaves', 'pallets', 1200, 'sin imagen', 'ad146', 12 );
gestionadorProductos.addProduct ('Difusor', 'vidrio', 2000, 'sin imagen', 'ad147', 10 );
gestionadorProductos.addProduct ('Adorno gatito', 'dorado', 600, 'sin imagen', 'ad148', 30 );


gestionadorProductos.getProductById(1);
gestionadorProductos.getProductById(2);
gestionadorProductos.getProductById(3);
gestionadorProductos.getProductById(4);
gestionadorProductos.getProductById(5);
gestionadorProductos.getProductById(6);


console.log(gestionadorProductos.getProducts());


