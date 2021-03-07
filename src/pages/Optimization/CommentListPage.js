import { Component } from "react";

class CommentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        commentList: [
          {
            id: 0,
            author: "小明",
            body: "这是小明写的文章"
          },
          {
            id: 1,
            author: "小红",
            body: "这是小红写的文章"
          }
        ]
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  render() {
    // console.log("render");
    const { commentList } = this.state;
    return (
      <div>
        <h3>CommentListPage</h3>
        {commentList.map(item => (
          <Comment key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

class Comment extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { author, body } = this.props.data;
    const { author: newAuthor, body: newBody } = nextProps.data;
    if (author === newAuthor && body === newBody) {
      return false; // 如果不执行这里，将会多次render
    }
    return true;
  }
  render() {
    console.log("commentList render");
    const { author, body } = this.props.data;
    return (
      <div className="border">
        <p>{author}</p>
        <p>{body}</p>
      </div>
    );
  }
}

export default CommentListPage;
