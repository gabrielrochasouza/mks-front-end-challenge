import Home from "../pages/index";
import "@testing-library/jest-dom";
import {  render, screen, waitFor } from "@testing-library/react";
import Header from "../components/header";
import { Provider } from "react-redux";
import { store } from "../store";
import Products from "../components/products";
import { api } from "../services";
import Footer from "../components/footer";
import {act} from '@testing-library/react'

describe("Shop test", () => {
  it("renders Header component", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders sidecart component", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("sideCartTitle")).toBeInTheDocument();
    expect(screen.getByTestId("sideCartClose")).toBeInTheDocument();
    expect(screen.getByTestId("sideCartTotal")).toBeInTheDocument();
    expect(screen.getByTestId("sideCartCheckout")).toBeInTheDocument();
  });

  it("renders Skeleton component", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
      expect(screen.getByTestId("skeleton-list")).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });


  it("tests product component", async() => {
    await act(async()=>{
      render(
        <Provider store={store}>
          <Products />
        </Provider>
      )
    })
    await waitFor(()=>screen.getByTestId('list-products'))
    expect(screen.getByTestId("add1")).toBeInTheDocument();
    expect(screen.getByTestId("add2")).toBeInTheDocument();
    expect(screen.getByTestId("add3")).toBeInTheDocument();
    expect(screen.getByTestId("add4")).toBeInTheDocument();
    expect(screen.getByTestId("add5")).toBeInTheDocument();
    expect(screen.getByTestId("add6")).toBeInTheDocument();
    expect(screen.getByTestId("add7")).toBeInTheDocument();
    expect(screen.getByTestId("add8")).toBeInTheDocument();
    expect(screen.getByTestId("list-products")).toBeInTheDocument();
  });


  it("tests add and remove products", async() => {
    await act(async()=>{
      render(
        <Provider store={store}>
          <Header/>
          <Products />
        </Provider>
      )
    })
    const list = await waitFor(()=>screen.getByTestId('list-products'))
    const addButton1 = screen.getByTestId("add1")
    const addButton2 = screen.getByTestId("add2")
    expect(addButton1).toBeInTheDocument();
    expect(addButton2).toBeInTheDocument();
    addButton1.click()
    addButton1.click()
    addButton2.click()
    await waitFor(()=>{screen.getByTestId('cart-card1')})
    await waitFor(()=>{screen.getByTestId('cart-card2')})
    expect(screen.getByTestId("totalQuantity")).toHaveTextContent('3');
    expect(screen.getByTestId("totalPrice")).toHaveTextContent('R$11200.00');
    const cartCardRemove = await waitFor(()=>{screen.getByTestId('cart-card1')})
    screen.getByTestId('cart-card-remove-one2').click()
    await waitFor(()=>{screen.getByTestId('cart-card2')})
    expect(screen.getByTestId("totalQuantity")).toHaveTextContent('2');
    screen.getByTestId('cart-card-close1').click()
    await waitFor(()=>{screen.getByTestId('cart-card1')})
    expect(screen.getByTestId("totalQuantity")).toHaveTextContent('0');
    expect(screen.getByTestId("totalPrice")).toHaveTextContent('R$0,00');
  });


});



