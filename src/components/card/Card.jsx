"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

export const Card = ({ post }) => {
  if (!post) return null;

  const imgSource = post?.image?.split("/")[2] || "placeholder.jpg";
  const truncatedValue =
    post?.value?.length > 400
      ? post.value.substring(0, 400) + " ..."
      : post?.value;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={`/${imgSource}`}
          className={styles.postImg}
          alt={post?.title || "Post image"}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2024</span>
          <span className={styles.date}>Author: @{post?.authorName}</span>
        </div>

        <h1>{post?.title}</h1>

        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: truncatedValue }}
        />

        <Link
          href={`/blogs/${post._id}`}
          className={styles.link}
          prefetch={true}
          scroll={true}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};
