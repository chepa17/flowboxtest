import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import { Context } from './context/store';

const mockedContext = {images: [{id: 'testId', description: 'testDescription', url: 'testUrl'}]}



describe('Manner buttons test', function () {
  it('should render first state', () => {
    render(<Context.Provider value={mockedContext}><App /></Context.Provider>)
    const linkElement = screen.getByTestId('Grid');
    expect(linkElement).toBeInTheDocument();
  })

  it('should react on List button', () => {
    render(<Context.Provider value={mockedContext}><App /></Context.Provider>)
    const button = screen.getByTestId('ListButton');
    fireEvent.click(button)
    const linkElement = screen.getByTestId('List');
    expect(linkElement).toBeInTheDocument();
  })

  it('should react on Cards button', () => {
    render(<Context.Provider value={mockedContext}><App /></Context.Provider>)
    const button = screen.getByTestId('CardsButton');
    fireEvent.click(button)
    const linkElement = screen.getByTestId('Cards');
    expect(linkElement).toBeInTheDocument();
  })

  it('should react on Carousel button', () => {
    render(<Context.Provider value={mockedContext}><App /></Context.Provider>)
    const button = screen.getByTestId('CarouselButton');
    fireEvent.click(button)
    const linkElement = screen.getByTestId('Carousel');
    expect(linkElement).toBeInTheDocument();
  })

  it('should react on Grid button', () => {
    render(<Context.Provider value={mockedContext}><App /></Context.Provider>)
    const button = screen.getByTestId('GridButton');
    fireEvent.click(button)
    const linkElement = screen.getByTestId('Grid');
    expect(linkElement).toBeInTheDocument();
  })
});