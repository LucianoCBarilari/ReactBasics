const listExample = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 1000
        },
        {
            id: 2,
            name: 'Product 2',
            price: 2000
        },
        {
            id: 3,
            name: 'Product 3',
            price: 3000
        },
    ];
    return (
        <>
            <h6>Example List</h6>
            <ul>
                {products.map(
                    (product) => (
                        <li key={product.id}>{product.name} - {product.price}</li>
                    )
                )}
            </ul>
        </>
    );
}

export default listExample;
