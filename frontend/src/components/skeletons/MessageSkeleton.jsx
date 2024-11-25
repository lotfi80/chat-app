const MessageSkeleton = () => {
  return (
    <>
      <div className=" flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-40"></div>
        </div>
      </div>
      <div className="flex gap 3 items-center justify-end">
            <div className="flex flex-col gap-1">
                  <div className="skeleton h-4 w-40"></div>
            </div>
            <div className="skeleton h-10 w-10"></div>

      </div>
    </>
  );
};

export default MessageSkeleton;

// const MessageSkeleton = () => {
//   return (
//     <>
//     <div className="flex w-52 flex-col gap-4">
//   <div className="skeleton h-32 w-full"></div>
//   <div className="skeleton h-4 w-28"></div>
//   <div className="skeleton h-4 w-full"></div>
//   <div className="skeleton h-4 w-full"></div>
// </div>

//     </>
//   )
// }

// export default MessageSkeleton
