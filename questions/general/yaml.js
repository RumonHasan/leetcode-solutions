const checkYaml = () => {
  let currentVersion = {
    app_name: 'my_app',
    version: '1.0.0',
    database: {
      host: 'localhost',
      name: 'my_db',
      username: 'bharath',
      password: 'my_password',
    },
  };
  let newVersion = {
    app_name: 'my_app',
    version: '1.1.0',
    database: {
      host: 'localhostBharath',
      port: 4000,
      name: 'my_db',
      username: 'my_user',
      password: 'my_password',
      pool_size: 10,
    },
  };

  // take everything from the current version to newversion but dont access new stuff using yaml conversion

  for (let [key, value] of Object.entries(newVersion)) {
    if (key in currentVersion) {
      if (typeof currentVersion[key] === 'object') {
        let newVersionSub = newVersion[key];
        let currentVersionSub = currentVersion[key];
        for (let [key, value] of Object.entries(newVersionSub)) {
          if (key in currentVersionSub) {
            currentVersionSub[key] = newVersionSub[key];
          }
        }
        currentVersion[key] = currentVersionSub;
      } else {
        currentVersion[key] = value;
      }
    }
  }
  console.log(currentVersion);
};

const jsonObject = [
  {
    label: 'Send Survey',
    status: 'success',
    root: true,
    icon: 'list',
    id: 1,
    children: [
      {
        label: 'Delay',
        type: 'delay',
        status: 'success',
        icon: 'clock',
        active: false,
        id: 2,
        children: [
          {
            label: 'Email',
            type: 'email',
            status: 'success',
            icon: 'email',
            active: false,
            id: 3,
            children: [
              {
                label: 'Condition',
                type: 'condition',
                status: 'success',
                icon: 'condition',
                active: false,
                id: 4,
                children: [
                  {
                    label: 'true',
                    icon: 'check',
                    type: 'condition-option',
                    id: 5,
                    children: [
                      {
                        label: 'Contact Exit',
                        icon: 'contact-exit',
                        leaf: true,
                      },
                    ],
                  },
                  {
                    label: 'false',
                    icon: 'close',
                    type: 'condition-option',
                    children: [
                      {
                        label: 'Contact Exit',
                        icon: 'contact-exit',
                        leaf: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// const removeChildNodes = (jsonObject, deletionId) => {
//   let previousId = '';
//   function findById(obj, id) {
//     if (obj.id === id) {
//       return obj;
//     }
//     if (obj.children) {
//       for (var i = 0; i < obj.children.length; i++) {
//         const result = findById(obj.children[i], id);
//         if (result) {
//           return result;
//         }
//       }
//     }
//     return null;
//   }
//   let extractedChild = findById(jsonObject, deletionId).children;
//   const reAttachChildren = (mainObject, extractedChildren, precedingId) => {
//     if (mainObject.id === precedingId) {
//       return mainObject;
//     }
//     if (mainObject.children) {
//       for (let index = 0; index < mainObject.children.length; index++) {
//         const result = reAttachChildren(
//           mainObject.children[index],
//           extractedChildren,
//           precedingId
//         );
//         if (result) {
//           let precedingIdChild = result.children;
//           precedingIdChild = extractedChildren;
//           result.children = precedingIdChild;
//           console.log(result);
//           return result;
//         }
//       }
//     }
//   };
//   const result = reAttachChildren(jsonObject, extractedChild, deletionId - 1);
//   console.log(result);
//   return jsonObject;
// };

// const newObject = removeChildNodes(jsonObject, 2);
// console.log(newObject);

// function deleteAndAttachChildren(obj, parentId, idToDelete) {
//   // if the id is found then perform the deletion
//   if (obj.id === parentId && obj.children) {
//     let indexToDelete = null;
//     for (var i = 0; i < obj.children.length; i++) {
//       if (obj.children[i].id === idToDelete) {
//         indexToDelete = i;
//       }
//     }
//     if (indexToDelete !== null) {
//       let deletedChildren = obj.children.splice(indexToDelete, 1)[0].children;
//       if (deletedChildren) {
//         obj.children = obj.children.concat(deletedChildren);
//       }
//     }
//   } else if (obj.children) {
//     for (var i = 0; i < obj.children.length; i++) {
//       deleteAndAttachChildren(obj.children[i], parentId, idToDelete);
//     }
//   }
//   return obj;
// }

// var modifiedObj = deleteAndAttachChildren(jsonObject, 'hello', 'bye');
// console.log(modifiedObj);

// function removeChildWithId(node, idToRemove) {
//   if (!node.children) {
//     return;
//   }
//   let newNode = null;
//   for (let i = 0; i < node.children.length; i++) {
//     const child = node.children[i];
//     const deletedChildChildren = child.children;
//     if (child.id === idToRemove) {
//       node.children.splice(i, 1);
//       if (deletedChildChildren) {
//         node.children.splice(i, 0, ...deletedChildChildren);
//       }
//       return;
//     }
//     removeChildWithId(child, idToRemove);
//   }
// }
// console.log(removeChildWithId(jsonObject, 3));
function deleteNodeAndAddChildren(node) {
  if (node.id === 4) {
    const index = node.parent.children.findIndex(
      (child) => child.id === node.id
    );
    if (index !== -1) {
      node.parent.children.splice(index, 1);
      node.parent.children[0].children.push(...node.children);
    }
  } else {
    node.children = node.children.map((child) =>
      deleteNodeAndAddChildren(child)
    );
  }
  return node;
}

// function removeChildrenWithId(array, idToRemove) {
//   for (let i = 0; i < array.length; i++) {
//     const obj = array[i];
//     2;

//     if (obj.children) {
//       removeChildrenWithId(obj.children, idToRemove);
//     }

//     // remove child object with matching id
//     for (let j = 0; j < obj.children.length; j++) {
//       const child = obj.children[j];

//       if (child.id === idToRemove) {
//         obj.children.splice(j, 1);

//         // append child object's children to parent object's children array
//         if (child.children) {
//           obj.children.splice(j, 0, ...child.children);
//         }

//         j--;
//       }
//     }
//   }
// }

// console.log(removeChildrenWithId(jsonObject, 3));

function deleteObjectById(objArr, idToDelete) {
  for (let i = 0; i < objArr.length; i++) {
    const obj = objArr[i];
    if (obj.id === idToDelete) {
      const children = obj.children;
      objArr.splice(i, 1);
      if (children) {
        objArr.splice(i, 0, ...children);
      }
      return objArr;
    } else if (obj.children) {
      const updatedChildren = deleteObjectById(obj.children, idToDelete);
      if (updatedChildren) {
        obj.children = updatedChildren;
        return objArr;
      }
    }
  }
  return null;
}

const updatedJsonObject = deleteObjectById(jsonObject, 2);
console.log(updatedJsonObject);
