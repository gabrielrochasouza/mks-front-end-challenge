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
    const promise = api.get("products?page=1&rows=20&sortBy=id&orderBy=DESC")
    return promise.then(async res=>{
      const add1 = await screen.findByTestId("add1")
      const add2 = await screen.findByTestId("add2")
      const add3 = await screen.findByTestId("add3")
      const add4 = await screen.findByTestId("add4")
      const listProducts = await screen.findByTestId("list-products")
      expect(add1).toBeInTheDocument();
      expect(add2).toBeInTheDocument();
      expect(add3).toBeInTheDocument();
      expect(add4).toBeInTheDocument();
      expect(listProducts).toBeInTheDocument();
    })
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
    const list = await waitFor( ()=>screen.findByTestId('list-products'))
    const addButton1 = await screen.findByTestId("add1")
    const addButton2 = await screen.findByTestId("add2")
    expect(addButton1).toBeInTheDocument();
    expect(addButton2).toBeInTheDocument();
    addButton1.click()
    addButton1.click()
    addButton2.click()


    await waitFor(()=>{screen.findByTestId('cart-card1')})
    await waitFor(()=>{screen.findByTestId('cart-card2')})

    const totalQuantity1 = await screen.findByTestId("totalQuantity")
    expect(totalQuantity1).toHaveTextContent('3');

    const totalPrice = await screen.findByTestId("totalPrice")
    expect(totalPrice).toHaveTextContent('R$11200.00');

    const cartCardRemove = await waitFor(()=>{screen.findByTestId('cart-card1')})

    const btnRemove = await screen.findByTestId('cart-card-remove-one2')
    btnRemove.click()
    await waitFor(()=>{screen.findByTestId('cart-card2')})

    const totalQuantity2 = await screen.findByTestId("totalQuantity")
    expect(totalQuantity2).toHaveTextContent('2');

    const btnRemove2 = await screen.findByTestId('cart-card-close1')
    btnRemove2.click()
    await waitFor(()=>{screen.findByTestId('cart-card1')})

    const totalQuantity3 = await screen.findByTestId("totalQuantity")
    expect(totalQuantity3).toHaveTextContent('0');

    const totalPrice2 = await screen.findByTestId("totalPrice")
    expect(totalPrice2).toHaveTextContent('R$0,00');
  });


});



