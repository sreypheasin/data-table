import NavBar from '@/components/NavBar'
import ProductsTable from '@/components/ProductsTable';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export default function Home() {
  return(
    <>
      <NavBar/>
      <ProductsTable/>
    </>
  )
}
