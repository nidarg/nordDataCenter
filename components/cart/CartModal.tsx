'use client';
import { useCartContext } from '@/utils/context/CartContext';
import { FaTimes } from 'react-icons/fa';
import { CartItem } from './cart-item/CartItem';
import { Button } from '../ui/button';
import Link from 'next/link';

interface CartModalProps {
  onClose: () => void;
}
const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cart } = useCartContext();

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-background  p-5 rounded-lg relative'>
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-600'
        >
          <FaTimes size={20} />
        </button>
        <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
        
        {cart.length > 0 ? (
          <>
          <ul className='space-y-4'>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </ul>
          <Button
         asChild
         onClick={onClose}
          className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition mt-4"
        >
          <Link href='/checkout'> Checkout</Link>
         
        </Button>
          </>
          
        ) : (
          <p className='text-gray-200'>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
