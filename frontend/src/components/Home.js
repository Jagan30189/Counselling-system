import React from 'react';
import Hello from './Hello';
import Message from './Message';
import Counter from './Counter';
import ProductList from './ProductList';
import TodoList from './TodoList';
import DataFetch from './Datapage';

const Home = () => {
  const products = [
    { id: 1, name: 'Watch', price: 100 },
    { id: 2, name: 'Mobile', price: 500 },
    { id: 3, name: 'Laptop', price: 1000 },
  ];

  const todos = [
    { id: 1, title: 'Complete Login page', completed: false },
    { id: 2, title: 'Complete Signup Page', completed: false },
    { id: 3, title: 'Complete Signin page', completed: false },
  ];


  return (
    <div>
      <Hello name="Jagan" />
      <Message />
      <Counter />

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <ProductList products={products} />
        </div>
        <div style={{ flex: 1 }}>
          <TodoList todos={todos} />
        </div>
      </div>
      <DataFetch/>
    </div>
  );
};

export default Home;