import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}
const endpoint = "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=YRlozqGaCoEDl7GIZNkANHuyouRyPAwS";
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      articles:[]
    };
  }
  async componentDidMount() {
    let result = await fetch(endpoint);

    let data = await result.json();
    console.log('here');
    this.setState({ articles: data.results });
  }
  renderArticles() {
    return this.state.articles.map(function(article, index) {
      console.log(article);
      return (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{article.title}</h5>
            <p class="card-text">{article.abstract}</p>
            <span class="flex-column">
                <small class="text-muted flex-left">
                  {article.byline}&emsp;
                </small>
                <small class="text-muted flex-right">
                  {article.published_date}
                </small>
              </span>

          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
         <Header />
        <div class="card-group">{this.renderArticles()}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
