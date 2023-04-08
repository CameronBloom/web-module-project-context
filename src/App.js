import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components (3)
import Navigation from './components/Navigation'; // navigation
import Products from './components/Products'; // route
import ShoppingCart from './components/ShoppingCart'; // route

// Context
import { ProductContext } from './contexts/ProductContext';

function App() {
	// state properties
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart], item)
	};

	return (
		<ProductContext.Provider value={{ products, cart, setCart }}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products />
					{/* <Products products={products} addItem={addItem} /> */}
				</Route>

				<Route path="/cart">
					<ShoppingCart />
					{/* <ShoppingCart cart={cart} /> */}
				</Route>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
