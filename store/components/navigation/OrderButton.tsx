"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@/public/one.png";
import { useRouter } from 'next/navigation';
type Props = {}

const OrderButton = (props: Props) => {
  const router = useRouter()
  return (
    <div onClick={()=>router.push('/shop')} className="w-[60px] cursor-pointer aspect-square group  relative bottom-6 flex items-center justify-center flex-col">
    <Image fill sizes="100vh, 100vw" className="transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-10px]" src={logo} alt="" />
    <span className="hidden group-hover:flex absolute bottom-[-20px] font-light text-sm transition-all duration-500 ease-in-out">Order</span>
  </div>
  )
}

export default OrderButton