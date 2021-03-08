import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // handleIncrement = (product) => {
  //   // console.log("increment clicked", this);
  //   // this.state.count++;
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous props", prevProps);
    console.log("Previous State", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  render() {
    // console.log("props", this.props);
    // console.log(this.props);
    return (
      // <React.Fragment>
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* {this.props.children} */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //   onClick={this.doHandleIncrement}
          // onClick={() => this.handleIncrement({ id: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
      // </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-uppercase badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    // return count === 0 ? <h1 className="text-capitalize">Zero</h1> : count;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
