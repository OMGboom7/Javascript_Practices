import { useState } from 'react'

function ListGroup() {
  const items = [
    "N4AOn8G",
    "g2XS",
    "6HP5mt",
    "qMuI",
    "2ndK2Rx",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className='list-group'>
        {items.map((item, index) =>
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>)}
      </ul>
    </>
  )
}

export default ListGroup;
