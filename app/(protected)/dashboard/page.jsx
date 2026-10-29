"use client";

import Counter from "@/components/Counter";
import PostList from "@/components/PostList";
import React, { useEffect, useEffectEvent, useState } from "react";

const Dashboard = () => {
  // const [count, setCount] = useState(0);
  const [posts , setPosts] =useState([])
  const [isLoading, setIsloading] = useState(true);

  // const handleIncrement =()=>{
  //   setCount(count + 1);
  // }  

  // const handleDecrement= ()=>{
  //   if(count>0) {
  //     setCount(count - 1);
  //   } 
  // }
  
//How to fetch data from an endpoint using useEffect
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.log("error fetching post", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchpost();
  }, []);
  if(isLoading){
    return <div>Loading.......</div>
  }
  return (
    <div>
      {/* <Counter
      count ={count}
      onIncrement ={handleIncrement}
      onDecrement={handleDecrement}
      /> */}

      <PostList posts={posts} />
    </div>
  );
};

export default Dashboard;
