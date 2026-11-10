import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  productName: string;
  image: string;
  quantity: number;
  packaging?: string;
  unit?: string;
  price?: number;
  currency?: string;
  isWholesale: boolean;
}

interface CartState {
  items: CartItem[];
  customerType: 'retail' | 'wholesale';
  notes: string;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  updatePackaging: (productId: string, packaging: string) => void;
  setCustomerType: (type: 'retail' | 'wholesale') => void;
  setNotes: (notes: string) => void;
  clear: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      customerType: 'retail',
      notes: '',
      addItem: (item) =>
        set((state) => {
          const exists = state.items.find((i) => i.productId === item.productId);
          if (exists) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (productId) =>
        set((state) => ({ items: state.items.filter((i) => i.productId !== productId) })),
      updateQuantity: (productId, qty) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity: Math.max(1, qty) } : i
          ),
        })),
      updatePackaging: (productId, packaging) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, packaging } : i
          ),
        })),
      setCustomerType: (type) => set({ customerType: type }),
      setNotes: (notes) => set({ notes }),
      clear: () => set({ items: [], notes: '' }),
    }),
    { name: 'iran-select-cart' }
  )
);
