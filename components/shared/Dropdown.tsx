import React, { startTransition, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Category, { ICategory } from '@/lib/database/models/category.model'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from '../ui/input'
  
  
type  DrowpdownProps={
    value?:string
    onChangeHandeler?:(value:string)=> void
}

const Dropdown = ({ value,onChangeHandeler}:DrowpdownProps) => {
    const[categories,setCategories]=useState<ICategory[]>([

    ])
const [newCategory,setNewCategory] =useState('');

const handleAddCategory=()=>{
    
}
  return (

    
    <Select onValueChange={onChangeHandeler} defaultValue={value}>
    <SelectTrigger className="select-field " >
      <SelectValue placeholder="Category" />
    </SelectTrigger>
    <SelectContent>
      {categories.length>0 && categories.map((category)=>
    <SelectItem key={category._id} value={category._id} 
    className='select-item p-regular-14'>
        {category.name}
    </SelectItem>)}
    <AlertDialog>
  <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm pl-3 py-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500'>Open</AlertDialogTrigger>
  <AlertDialogContent className='bg-white'>
    <AlertDialogHeader >
      <AlertDialogTitle>New Category </AlertDialogTitle>
      <AlertDialogDescription>
         <Input type='text' placeholder='Category Name' className='input-field mt-3' onChange={(e)=>
            setNewCategory(e.target.value)
         }/>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=> startTransition(handleAddCategory)}>Add</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </SelectContent>
  </Select>
  
  )
}

export default Dropdown

