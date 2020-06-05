import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        products: [],
    }
    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs });
    }
    render() {
        return (
            <div className="product-list">
              {this.state.products.map(product => (
                  <h2> key={product._id}>{product.title}</h2>
              ))}  
            </div>
        )
    }
}