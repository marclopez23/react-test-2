const List = ({ data, clase }) =>{
  return (
    <ul className={clase}>
      {data.map((item, id) => (
        <li key={id}>
              <a href={item.to}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default List;
