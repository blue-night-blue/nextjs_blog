const Page = ({ 
  params,
}: {
  params: {blogId:string, userId:string, categoryId:string},
}) => {
  console.log(params);
  return <div className="m-4 font-bold">Blog ID: {params.blogId}<br></br>User ID: {params.userId}<br></br>Category ID: {params.categoryId}</div>;
};

export default Page;