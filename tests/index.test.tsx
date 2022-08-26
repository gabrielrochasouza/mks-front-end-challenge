import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/header";
import { Provider } from "react-redux";
import { store } from "../store";
import Products from "../components/products";
import { api } from "../services";
import Footer from "../components/footer";

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

  it("renders Products component", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    setTimeout(() => {
      expect(screen.getByTestId("img-figure")).toBeInTheDocument();
      expect(screen.getByTestId("info")).toBeInTheDocument();
      expect(screen.getByTestId("desc")).toBeInTheDocument();
      expect(screen.getByTestId("add")).toBeInTheDocument();
    }, 2500);
  });

  it("renders Footer component", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("tests product is added", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    setTimeout(() => {
      const addButton = screen.getByTestId("add8")
      addButton.click()
      const total = screen.getByTestId("totalQuantity")
      expect(addButton).toBeInTheDocument()
      expect(total).toBeInTheDocument()
      expect(total).toBeGreaterThan(0);
    }, 2000);
  });


});



