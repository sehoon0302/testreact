export default function Popup({ list, setIsOpen, titleNo }) {
  //console.log(props)
  return (
    <>
      <section className="popup">
        {list[titleNo]}
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          닫기
        </button>
      </section>
    </>
  );
}
