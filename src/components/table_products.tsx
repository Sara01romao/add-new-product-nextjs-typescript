'use client'

import { useEffect, useState } from "react";

type ProductType ={
    id: number;
    title: string;
    price: number;
    description:string;
    category: string;
    image: string;
  }

export default function TableProducts(){
     
    const [products, setProducts] =  useState<ProductType[]>([]);

    useEffect(() =>{
     async function getProducts(){
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await response.json() as ProductType[];
        console.log(data)

        setProducts(data)
      }

      getProducts()

    },[])
  
    return(
       
        <table className="table-fixed">
        <thead>
          <tr className="border-b">
            <th className="text-justify p-2">Name</th>
            <th className="text-justify">Category</th>
            <th className="text-justify">Action</th>
            
          </tr>
        </thead>
        <tbody>
          
          {products.map(product => 
            <tr key={product.id} className="border-b">
              <td className="w-56 p-1">{product.title}...</td>
              <td className="w-40">{product.category}...</td>
              <td>
                <div className="flex gap-4">
                  <button className="flex items-start text-red-600">Remove</button>
                  <button className="flex items-start text-green-600">Edit</button>

                </div>
              </td>
            </tr>
          )}

         

        </tbody>
      </table>

    )
}