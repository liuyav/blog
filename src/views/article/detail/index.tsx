import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const ArticleDetail = (props: Props) => {
  const params = useParams();

  return <div>ArticleDetail，id为：{params.id}</div>;
};

export default ArticleDetail;
