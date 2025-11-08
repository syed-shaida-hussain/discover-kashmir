'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { EventIcons } from '@/components/eventIcons/EventIcons';
import styles from './singlePage.module.css';

const SingleBlogPage = () => {
  const params = useParams();
  const { id } = params;

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const postRes = await fetch(`/api/posts/${id}`);
        const postData = await postRes.json();
        setPost(postData.post);

        const userRes = await fetch(`/api/user/me`);
        const userData = await userRes.json();
        setUser(userData.user);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

if (loading) {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.bigSkeleton}></div>
    </div>
  );
}


  return (
    <div className={styles.container}>
      <EventIcons user={user} post={post} />
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Author : @{post.authorName}</span>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={`/${post.image.split("/")[2]}`}
            alt="post image"
            className={styles.image}
            fill
            quality={100}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.value }}
          />
          {post.video && (
            <div>
              <iframe
                className={styles.video}
                src={`https://www.youtube.com/embed/${post.video.split("=")[1].split("&")[0]}?autoplay=0&showinfo=0`}
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
