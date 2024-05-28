'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RootPage = () => {
  const router = useRouter()

  useEffect(() => {router.push('/home')},[])
  return (
    <main>
      
    </main>
  );
}
export default RootPage
