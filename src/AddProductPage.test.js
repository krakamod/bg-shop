import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddProductPage from './AddProductPage';

describe('AddProductPage', () => {
  test('renders AddProductPage component', () => {
    render(<AddProductPage />);
    expect(screen.getByText('Add New Product')).toBeInTheDocument();
  });

  test('validates required fields', () => {
    render(<AddProductPage />);
    fireEvent.click(screen.getByText('Save as Draft'));
    expect(screen.getByText('Product title is required')).toBeInTheDocument();
    expect(screen.getByText('Product description is required')).toBeInTheDocument();
    expect(screen.getByText('Category is required')).toBeInTheDocument();
    expect(screen.getByText('Price is required')).toBeInTheDocument();
    expect(screen.getByText('Stock quantity is required')).toBeInTheDocument();
    expect(screen.getByText('SKU is required')).toBeInTheDocument();
    expect(screen.getByText('Shipping information is required')).toBeInTheDocument();
  });

  test('displays feedback message on successful product save', async () => {
    render(<AddProductPage />);
    fireEvent.change(screen.getByLabelText('Product Title:'), { target: { value: 'Test Product' } });
    fireEvent.change(screen.getByLabelText('Product Description:'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Category:'), { target: { value: 'strategy' } });
    fireEvent.change(screen.getByLabelText('Price:'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Stock Quantity:'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('SKU:'), { target: { value: 'TESTSKU' } });
    fireEvent.change(screen.getByLabelText('Shipping Information:'), { target: { value: 'Test Shipping Info' } });
    fireEvent.click(screen.getByText('Save as Draft'));
    expect(await screen.findByText('Product saved successfully')).toBeInTheDocument();
  });

  test('displays feedback message on failed product save', async () => {
    render(<AddProductPage />);
    fireEvent.change(screen.getByLabelText('Product Title:'), { target: { value: 'Test Product' } });
    fireEvent.change(screen.getByLabelText('Product Description:'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Category:'), { target: { value: 'strategy' } });
    fireEvent.change(screen.getByLabelText('Price:'), { target: { value: '10' } });
    fireEvent.change(screen.getByLabelText('Stock Quantity:'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('SKU:'), { target: { value: 'TESTSKU' } });
    fireEvent.change(screen.getByLabelText('Shipping Information:'), { target: { value: 'Test Shipping Info' } });
    fireEvent.click(screen.getByText('Save as Draft'));
    expect(await screen.findByText('Failed to save product')).toBeInTheDocument();
  });
});
