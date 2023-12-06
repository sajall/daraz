import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import './CreateProduct.css'

export function CreateProduct(){
    let dispatch = useDispatch();
let {register , handleSubmit } = useForm();
const createProdct = (data)=>{
console.log(data);
data.src = URL.createObjectURL(data.file[0]);
dispatch({
    type:"ADD-NEW-PRODUCT",
    payload:data
})
toast.success("product added successfully!");
}

return (
    <div id="myForm">
    <form action="" onSubmit={handleSubmit(createProdct)}  >
        <input {...register('category')} type="text" placeholder="enter category"/>
        <input {...register('price')} type="text" placeholder="enter price" />
        <input {...register('id')} type="number"  placeholder="enter id"/>
        <input {...register('file')} type="file" placeholder="" />
    <button>Create</button>
    </form>
    </div>
)
}