function Header(props) {
  return (
    <header>{props.header}</header>
  );
}

function Post(props) {
  return (
    <div className="post-container">
      <h2 className="post-title">{props.title}</h2>
      <div className="post-info">
        <div className="post-img">
          <img src={props.src} alt=""/>
        </div>
        <div className="post-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod explicabo nisi, natus, ut nostrum fugiat doloribus earum rem alias inventore dignissimos cumque ab placeat sit fugit, ad asperiores rerum.</p>    
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'My Personal Blog',
      blogs: [
        { title: 'Title 1', src:'img/100x100.png', text:'xx'},
        { title: 'Title 2', src:'img/100x100.png', text:'yy'},
        { title: 'Title 3', src:'img/100x100.png', text:'zz'}
      ]
    }
  }

  render() {
    return (
      <div>
        <Header header={this.state.headerText} />
        <Post
          title={this.state.blogs[0].title}
          src={this.state.blogs[0].src}
          text={this.state.blogs[0].text}
        />
        <Post
          title={this.state.blogs[1].title}
          src={this.state.blogs[1].src}
          text={this.state.blogs[1].text}
        />
        <Post
          title={this.state.blogs[2].title}
          src={this.state.blogs[2].src}
          text={this.state.blogs[2].text}
        />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);