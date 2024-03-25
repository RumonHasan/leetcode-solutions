const findMinSum = (A) => {
  const worksButHorrible = () => {
    const array = A.sort();
    const ans_array = new Array(array.length).fill(0);
    for (let i in ans_array) {
      ans_array[i] = Number(i) + 1;
    }
    let check = false;
    // first check
    let stack = [];
    for (let i = 0; i < ans_array.length; i++) {
      if (!array.includes(ans_array[i])) {
        return ans_array[i];
      } else {
        stack.push(ans_array[i]);
      }
    }
    stack.sort();
    if (!check) {
      return stack[stack.length - 1] + 1;
    }
  };
};

//console.log(findMinSum([1, 2, 3]));

const interview = () => {
  function Solution({ menuConfig }) {
    const [modMenuConfig, setModMenuConfig] = useState(
      menuConfig.map((item) => {
        return {
          ...item,
          id: item.title.toLowerCase(),
          state: false,
        };
      })
    );
    // function for toggling expand id
    const expandMenu = (expandId) => {
      setModMenuConfig((prevMenuConfig) =>
        prevMenuConfig.map((item) => {
          if (item.id == expandId) {
            return {
              ...item,
              state: !item.state,
            };
          } else {
            return item;
          }
        })
      );
    };
    return (
      <div className="menu-wrapper">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {modMenuConfig?.map((menuItem) => {
            const { title, subItems, state, id } = menuItem;
            const checkSubitems = subItems !== undefined ? true : false;
            return (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                  <span>{title}</span>
                  {checkSubitems && (
                    <button onClick={() => expandMenu(id)}>
                      {state ? 'Hide' : 'Expand'}
                    </button>
                  )}
                </div>
                {state && (
                  <ul style={{ color: 'black' }}>
                    {subItems?.map((itemSub) => {
                      return <li>{itemSub}</li>;
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

import React, { useState } from 'react';

function Solution({ menuConfig }) {
  const [modMenuConfig, setModMenuConfig] = useState(
    menuConfig.map((item) => {
      return {
        ...item,
        id: item.title.toLowerCase(),
        state: false,
      };
    })
  );

  const expandMenu = (expandId) => {
    setModMenuConfig((prevMenuConfig) =>
      prevMenuConfig.map((item) => {
        if (item.id === expandId) {
          return {
            ...item,
            state: !item.state,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="menu-wrapper">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {modMenuConfig?.map((menuItem) => {
          const { title, subItems, state, id } = menuItem;
          const checkSubitems = subItems !== undefined && subItems.length > 0;

          return (
            <div key={id} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex' }}>
                <span>{title}</span>
                {checkSubitems && (
                  <button
                    data-test-id={`button-${id}`}
                    onClick={() => expandMenu(id)}
                  >
                    {state ? 'Hide' : 'Expand'}
                  </button>
                )}
              </div>
              {state && (
                <ul data-test-id={`ul-${id}`} style={{ color: 'black' }}>
                  {subItems?.map((itemSub) => (
                    <li
                      key={`li-${id}-${itemSub.toLowerCase()}`}
                      data-test-id={`li-${id}-${itemSub.toLowerCase()}`}
                    >
                      {itemSub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Solution;
