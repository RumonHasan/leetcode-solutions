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
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
