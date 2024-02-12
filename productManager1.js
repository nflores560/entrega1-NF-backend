
class ProductManager{
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    // Parámetros para almacenar los productos

    addProduct(title, description, price, thumbnail, code, stock) {
        
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const existingProduct = this.products.find((product) => product.code === code);
         
        if (existingProduct) {
            console.error("Ya existe un producto con el mismo código");
            return;
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        console.log("Producto agregado:", newProduct);
    }

    // Método para retornar el arreglo de productos
    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);

        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
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
gestionadorProductos.addProduct ('Cuadro perritos', 'blanco y negro', 3500, 'sin imagen', 'ad143', 20 );
gestionadorProductos.addProduct ('Florero 3d', 'plateado', 1500, 'sin imagen', 'ad144', 10 );
gestionadorProductos.addProduct ('Maceta floreada', 'colores', 1100, 'sin imagen', 'ad145', 40 );
gestionadorProductos.addProduct ('Portallaves', 'pallets', 3800, 'sin imagen', 'ad146', 12 );
gestionadorProductos.addProduct ('Difusor', 'vidrio', 2750, 'sin imagen', 'ad147', 10 );
gestionadorProductos.addProduct ('Adorno gatito', 'dorado', 1230, 'sin imagen', 'ad148', 30 );


gestionadorProductos.getProductById(1);
gestionadorProductos.getProductById(2);
gestionadorProductos.getProductById(3);
gestionadorProductos.getProductById(4);
gestionadorProductos.getProductById(5);
gestionadorProductos.getProductById(6);


console.log(gestionadorProductos.getProducts());


