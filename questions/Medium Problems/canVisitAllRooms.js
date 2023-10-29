const canVisitAllRooms = (rooms) => {
  const stackBasedApproach = () => {
    let visitedRooms = new Array(rooms.length).fill(false);
    let stack = [rooms[0]];
    visitedRooms[0] = true;
    while (stack.length) {
      let stackRoom = stack.pop();
      for (let index = 0; index < stackRoom.length; index++) {
        const roomKey = stackRoom[index];
        if (visitedRooms[roomKey]) continue;
        visitedRooms[roomKey] = true;
        stack.push(rooms[roomKey]); // send new room after key found to stack
      }
    }
    return visitedRooms.every((room) => room);
  };

  //console.log(stackBasedApproach());

  const setApproach = () => {
    let set = new Set();
    let stack = [rooms[0]];
    while (stack.length) {
      let stackRoom = stack.pop();
      for (let index = 0; index < stackRoom.length; index++) {
        if (set.has(stackRoom[index])) continue; // otherwise rooms will be infinitely added to set
        set.add(stackRoom[index]);
        stack.push(rooms[stackRoom[index]]);
      }
    }
    for (let index = 1; index < rooms.length; index++) {
      if (!set.has(index)) return false;
    }
    return true;
  };
};

//console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
