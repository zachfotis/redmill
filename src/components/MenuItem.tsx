interface MenuItemProps {
  itemName: string;
  itemPrice: string;
  perKilo?: boolean;
  isPromoted?: boolean;
}

function MenuItem({ itemName, itemPrice, perKilo = false, isPromoted = false }: MenuItemProps) {
  return (
    <div className="flex justify-between items-baseline gap-5">
      <h2 className={`text-left font-serif font-[600] ${isPromoted ? 'text-lg lg:text-2xl' : 'text-base lg:text-xl'}`}>{ itemName }</h2>
      <span className="flex-1 border-b border-dotted border-accent opacity-50" />
      <h3 className="text-base lg:text-xl font-[600] whitespace-nowrap font-serif italic">{ itemPrice } €{ perKilo ? ' / kg' : '' }</h3>
    </div>
  );
}

export default MenuItem;
