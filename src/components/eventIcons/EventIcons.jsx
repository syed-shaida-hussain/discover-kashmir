"use client";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import styles from "./eventIcons.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const EventIcons = ({ user, post }) => {
  const router = useRouter();

  const deletePost = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`/api/posts/${post._id}`);
      router.push("/");
    } catch (err) {
      console.error("Failed to delete post:", err.message);
    }
  };

  if (!user || !post) return null;

  return user._id === post.authorId ? (
    <div className={styles.iconContainer}>
      <Link href={`/edit/${post._id}`}>
        <FaEdit className={styles.icon} title="Edit Post" />
      </Link>
      <MdDelete className={styles.icon} onClick={deletePost} title="Delete Post" />
    </div>
  ) : null;
};
