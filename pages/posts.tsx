import React from "react";
import dayjs from "dayjs";
import styles from "./styles/posts.module.css";

const posts = [
  {
    title: "baler post",
    author: "baler writer",
    content:
      "lorem lorem ipsum ipsum lorem lorem ipsum ipsum lorem lorem ipsum ipsum.lorem lorem ipsum ipsum lorem lorem ipsum ipsum lorem lorem ipsum ipsum",
    createdAt: dayjs().format("DD MMM YYYY"),
  },
  {
    title: "arekta baler post",
    author: "arekta baler writer",
    content:
      "lorem lorem ipsum ipsum lorem lorem ipsum ipsum lorem lorem ipsum ipsum.lorem lorem ipsum ipsum lorem lorem ipsum ipsum lorem lorem ipsum ipsum",
    createdAt: dayjs().format("DD MMM YYYY"),
  },
];

function Posts() {
  return (
    <div className={styles.posts__container}>
      {posts.map((p, index) => {
        return (
          <div key={index} className={styles.post__body}>
            <div className={styles.post__header}>
              <p className={styles.post__title}>{p.title}</p>
              <p className={styles.post__author}>By {p.author}</p>
            </div>
            <div className={styles.post__content}>{p.content}</div>
            <div className={styles.post__date}>Posted at: {p.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
