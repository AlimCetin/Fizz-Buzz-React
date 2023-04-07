import React from "react";
import ReactDOM from "react-dom";

class FrizzBuzz extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Actions />
      </div>
    );
  }
}

const Header = () => (
  <div>
    <h1>React Fizz Buzz</h1>
    <p>
      Sayı 3 e tam bölünüyorsa "Fizz", 5 tam bölünüyorsa "Buzz", 3 ile 5 tam
      bölünüyorsa "FizzBuzz" yazacak. Eğer bu şartlara uymuyorsa sayının kendisi
      yazılacak.
    </p>
  </div>
);

class Actions extends React.Component {
  state = {
    count: 1,
  };
  //sayıyı 1  arttır
  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };
  //sayıyı 1 azalt
  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  // listele
  Listele = (count) => {
    let liste = [];
    for (let i = 1; i <= count; i++)
      liste.push(
        <li key={i}>
          {i % 15 === 0
            ? "FizzBuzz"
            : i % 3 === 0
            ? "Fizz"
            : i % 5 === 0
            ? "Buzz"
            : i}
        </li>
      );
    return liste;
  };
  render() {
    return (
      <div>
        <h2>
          {this.state.count % 15 === 0
            ? "FizzBuzz"
            : this.state.count % 3 === 0
            ? "Fizz"
            : this.state.count % 5 === 0
            ? "Buzz"
            : this.state.count}
        </h2>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        <ul>{this.Listele(this.state.count)}</ul>
      </div>
    );
  }
}

ReactDOM.render(<FrizzBuzz />, document.getElementById("app"));
