export default function Listli({ list, setIsOpen, setTitleNo, i, delList }) {
  return (
    <li
      onClick={() => {
        setIsOpen(true);
        setTitleNo(i);
      }}>
      <p>{list}</p>
      <i
        className="fa-solid fa-trash-can"
        onClick={(e) => {
          e.stopPropagation();
          delList(i);
        }}></i>
    </li>
  );
}
