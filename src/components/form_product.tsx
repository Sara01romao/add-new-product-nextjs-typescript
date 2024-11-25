import Link from "next/link";

export default function FormProduct(){

    return(
        <form>
             
            <div className="flex flex-col mb-4 gap-2 ">
                <label htmlFor="image">Image</label>
                <input  type="file" name="image" id="image"  />
            </div>

            <div className="flex flex-col mb-4 gap-2">
                <label htmlFor="title">Title</label>
                <input className="border-2 rounded h-9 px-3" type="text" name="title" id='title' />
            </div>

            <div className="flex items-center mb-4 gap-4 justify-center">
                <div  className="flex flex-col gap-1">
                    <label htmlFor="price">Price</label>
                    <input className="border-2 rounded h-9 px-3" type="text" name="price" id='price' />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category">Category</label>
                    <select className="border-2 rounded h-9 px-3" name="category" id="category">
                        <option value="">Selecionar</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                    </select>
                </div>

            </div>

            <div className="flex flex-col mb-4 gap-1">
                <label htmlFor="description"> Description</label>
                <textarea className="border-2 rounded h-9 px-3 py-1" name="description" id='description' rows={8} />
            </div>

            
            <div className="flex items-center justify-between gap-5">
                 <Link href="/" className="inline-block w-28 rounded-lg  px-5 py-2 text-sm font-medium border-2 border-gray-400 text-center">Cancel</Link>
                 

                <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-2 border-2 border-blue-500 text-sm font-medium text-white"
                >
                    Save Product
                </button>
            </div>
       
        </form>
    )
}