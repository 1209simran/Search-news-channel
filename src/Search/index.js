import React, { Component } from "react";
import { Input, Card, CardBody, CardTitle } from "mdbreact";

import "./style.css";

import newsList from "./news.json";

class App extends Component {
  state = {
    search: ""
  };

  renderNews = news => {
    const { search } = this.state;

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <a href={news.url}>
              <CardTitle title={news.name}>
                {news.name.substring(0, 15)}
                {news.name.length > 15 && "..."}
              </CardTitle>
            </a>
            <h5>
              {news.description.substring(0, 60)}
              {news.description.length > 60 && "..."}
            </h5>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredNews = newsList.filter(news => {
      return news.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <center>
                <h1
                  style={{
                    marginTop: "30px",
                    color: "rgb(174, 238, 235)",
                    fontFamily: "Droid Serif",
                    fontWeight: "200"
                  }}
                >
                  List Of Channels
                </h1>
              </center>
            </div>
            <div className="col search">
              <Input label="Search" icon="search" onChange={this.onchange} />
            </div>
            <div className="col" />
          </div>
          <div className="row">
            {filteredNews.map(news => {
              return this.renderNews(news);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
