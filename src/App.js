import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components (3)
import Navigation from './components/Navigation'; // navigation
import Products from './components/Products'; // route
import ShoppingCart from './components/ShoppingCart'; // route

function App() {
	// state properties
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
