'use client'
type ProductType ={
    id: number;
    title: string;
    price: number;
    description:string;
    category: string;
    image: string;
  }

export default async function TableProducts(){

    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const data = await response.json() as ProductType[];
    console.log(data)

    return(
       
        <table className="table-fixed">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          {data.map(product => 
            <tr key={product.id} className="border-b">
              <td className="w-56 p-1">{product.title}...</td>
              <td className="w-36">{product.category}...</td>
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