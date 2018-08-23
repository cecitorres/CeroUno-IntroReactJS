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

let app = (
  <React.Fragment>
    <Header header="My Personal Blog" />
    <Post title="Title 1" src="img/100x100.png" />
    <Post title="Title 2" src="img/100x100.png" />
    <Post title="Title 3" src="img/100x100.png" />
  </React.Fragment>
);

ReactDOM.render(
  app,
  document.getElementById('app')
);