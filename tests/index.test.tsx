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
    const list = await waitFor(()=>screen.getByTestId('list-products'))
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


  it("tests product is added", async() => {
    await act(async()=>{
      render(
        <Provider store={store}>
          <Header/>
          <Products />
        </Provider>
      )
    })
    const list = await waitFor(()=>screen.getByTestId('list-products'))
    const addButton = screen.getByTestId("add1")
    expect(addButton).toBeInTheDocument();
    addButton.click()
    const cartList = await waitFor(()=>{screen.getByTestId('cart-card')})
    expect(screen.getByTestId("totalQuantity")).toHaveTextContent('1');
  });


});



