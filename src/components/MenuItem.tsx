interface MenuItemProps {
  itemName: string;
  itemPrice: string;
  perKilo?: boolean;
}

function MenuItem({ itemName, itemPrice, perKilo = false }: MenuItemProps) {
  return (
    <div className="flex justify-between items-baseline gap-5">
      <p className="text-xl text-center font-serif font-[600]">{ itemName }</p>
      <span className="flex-1 border-b border-dotted border-accent opacity-50" />
      <h1 className="text-xl font-[600] font-serif italic">{ itemPrice } €{ perKilo ? ' / kg' : '' }</h1>
    </div>
  );
}

export default MenuItem;
