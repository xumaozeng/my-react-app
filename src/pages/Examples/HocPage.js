import { useEffect, useState } from "react";

const DataSource = {};

function CommentList(props) {
  return <div></div>;
}

function BlogPost(props) {
  return <div></div>;
}

// 接收一个组件...
const withSubscription = (WrappedComponent, selectData) => props => {
  // 返回另一个组件

  const [data, setData] = useState(selectData(DataSource, props));
  const handleChange = () => {
    setData(selectData(DataSource, props));
  };

  useEffect(() => {
    DataSource.addChangeListener(handleChange);
    return () => {
      DataSource.removeChangeListener(handleChange);
    };
  });

  return <WrappedComponent data={data} {...props} />;
};

// HOC高阶组件
export const CommentListWithSubscription = withSubscription(
  CommentList,
  DataSource => DataSource.getComments()
);

export const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
