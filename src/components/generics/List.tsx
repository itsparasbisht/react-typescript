type ListProps<T> = {
  items: T[];
};

export const List = <T extends { fname: string }>({ items }: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return <h3 key={index}>{item.fname}</h3>;
      })}
    </div>
  );
};
