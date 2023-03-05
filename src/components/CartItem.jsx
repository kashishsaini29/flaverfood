import React,{useState, useEffect} from 'react'
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { fetchCart } from '../utils/fetchLocalStorageData';
let items =[];

const CartItem = ({item,setFlag,flag}) => {
  const [qty, setqty] = useState(item.qty);
   const [items, setitems] = useState([])   
  const [{cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };
 useEffect(() =>{
  setitems(cartItems);
 }, [qty]);

  const updateQty =(action,id) =>{
    if(action === "add"){
      setqty(qty +1);
     cartItems.map(item => {
      if(item.id ===id){
        item.qty +=1;
        setFlag(flag + 1);
      }
     });
     cartDispatch();
    }
    else{
      if(qty ==1){
        setitems(cartItems.filter((item) => item.id !== id))
        cartDispatch();
      }else{
        setqty(qty - 1);
        cartItems.map(item => {
          if(item.id ===id){
            item.qty -=1;
            setFlag(flag - 1);
          }
         });
         cartDispatch();
      }
    }
  }

  return (
    <div key={item.id} className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
    <img
      src={item ?.imageURL}
      alt=""
      srcset=""
      className="w-20 h-20 max-w-[60px] rounded-full object-contain"
    />
    {/* name section */}

    <div className="flex flex-col gap-2">
      <p className="text-base text-gray-50">{item ?.title}</p>

      <p className="text-sm block text-gray-300 font-semibold">₹{parseFloat( item ?.price)*qty}</p>
    </div>
    {/* button section */}
    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
      <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("remove", item ?.id)}>
        <BiMinus className="text-gray-50" />
      </motion.div>

      <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
        {qty}
      </p>

      <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty("add", item ?.id)}>
        <BiPlus className="text-gray-50" />
      </motion.div>
    </div>
  </div>
  )
}

export default CartItem