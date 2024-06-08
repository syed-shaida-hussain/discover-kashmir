// import AddPostForm from '@/components/addPostForm/AddPostForm';
import dynamic from 'next/dynamic';
const AddPostForm = dynamic(() => import("@/components/addPostForm/AddPostForm"), {
  ssr: false,
});
  const WritePage = () => {
  return (
    <AddPostForm />
  )
}

export default WritePage