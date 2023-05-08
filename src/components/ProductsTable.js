import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

export default function ProductsTable() {
    const [products,setProducts] = useState([])
    const [fetching, setIsFetching] = useState(true)
    const [search, setSearch] = useState("")
    useEffect(()=>{
        const getProducts= async ()=>{
            const res = await fetch ('https://fakestoreapi.com/products')
            const data = await res.json();
            setProducts(data)
            setIsFetching(false)
        }
        getProducts()
    },[]);
    console.log(products)

    const columns = [
        {
            name: 'Products Name',
            selector: row => row.title,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Photo',
            selector: row => <img width={80} height={105} src={row.image}/>
        },
        {
            name: 'Action',
            selector: row => <div className='d-flex gap-2'>
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        },
    ];
    function handleSearch(e){
        setSearch(e.target.value)
    }
    function filterProducts(products, search) {
        return products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
      }
    
  return (
    <div className='container '>
        <h3 className='mt-4'>Products Collection - Table</h3>
        <div className='shadow-sm mt-4 mb-5'>
            <form style={{width:'300px'}} className='p-4'>
                <input onChange={handleSearch} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
            </form>
            <DataTable
                title='Products List'
                columns={columns}
                data={filterProducts(products, search)}
                pagination
            />
        </div>
    </div>
  )
}
