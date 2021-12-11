import a from 'indefinite';

export const handleHandshake = (handshakeData, setFruits, setFlowers, setAnimals, setDecorations, setPlayers) => {
    if (handshakeData.fruits) {
      setFruits(handshakeData.fruits);
    } 
    if (handshakeData.flowers) {
      setFlowers(handshakeData.flowers);
    }
    if (handshakeData.animals) {
      setAnimals(handshakeData.animals);
    } 
    if (handshakeData.decorations) {
      setDecorations(handshakeData.decorations);
    }
    if (handshakeData.playersOnline) {
      setPlayers(handshakeData.playersOnline);
    }
}

export const handleUpdate = (updateData, setFruits, setFlowers, setDecorations, setAnimals, setPlayers, setLog) => {
    let msg = "";
    if (updateData.playersOnline) {
        setPlayers(updateData.playersOnline);
        if (updateData.action === 0) {
          msg = updateData.nickname + " left the Garden!";
        } else if (updateData.action === 1) {
          msg = updateData.nickname + " joined the Garden!";
        }
    } else {
    if (updateData.action) {
    let verb = getVerb(updateData);
    msg = updateData.nickname + " " + verb + " " + a(updateData.name);
    }
    if (updateData.type === "FRUIT") {
        setFruits(fruits => {
          let found = fruits.findIndex(curr => curr.entityId === updateData.entityId);
          if (found === -1) {
            return fruits.concat(updateData);
          } else {
            const newArray = [...fruits];
            newArray[found] = updateData;
            return newArray;
          }
        });
    } else if (updateData.type === "FLOWER") {
      setFlowers(flowers => {
        let found = flowers.findIndex(curr => curr.entityId === updateData.entityId);
        if (found === -1) {
          return flowers.concat(updateData);
        } else {
          const newArray = [...flowers];
          newArray[found] = updateData;
          return newArray;
        }
      });
    }  else if (updateData.type === "ANIMAL") {
      setAnimals(animals => {
        let found = animals.findIndex(curr => curr.entityId === updateData.entityId);
        if (found === -1) {
          return animals.concat(updateData);
        } else {
          const newArray = [...animals];
          newArray[found] = updateData;
          return newArray;
        }
      });
    }  else if (updateData.type === "DECORATION") {
      setDecorations(decorations => {
        let found = decorations.findIndex(curr => curr.entityId === updateData.entityId);
        if (found === -1) {
          return decorations.concat(updateData);
        } else {
          const newArray = [...decorations];
          newArray[found] = updateData;
          return newArray;
        }
      });
    }
    }
    if (msg) {
    setLog(log => {
      const msgs = [...log];
      msgs.push(new Date().toTimeString().split(" ")[0].substring(0, 5) + " " + msg);
      if (log.length > 50) {
        return msgs.slice(Math.max(msgs.length - 75, 0));
      }
      return msgs;
    });
    var chatHistory = document.getElementById("logDiv");
    chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  }

  export const handleDeletion = (updateData, setFruits, setFlowers, setDecorations, setAnimals) => {
    if (updateData.type === "FRUIT") {
        setFruits(fruits => {
          console.log(fruits);
          return fruits.filter((fruit) => (fruit.entityId !== updateData.entityId));
        });
    } else if (updateData.type === "FLOWER") {
      setFlowers(flowers => {
        let found = flowers.findIndex(curr => curr.entityId === updateData.entityId);
        if (found === -1) {
          return flowers.concat(updateData);
        } else {
          const newArray = [...flowers];
          newArray[found] = updateData;
          return newArray;
        }
      });
    }  else if (updateData.type === "ANIMAL") {
      setAnimals(animals => {
        let found = animals.findIndex(curr => curr.entityId === updateData.entityId);
        if (found === -1) {
          return animals.concat(updateData);
        } else {
          const newArray = [...animals];
          newArray[found] = updateData;
          return newArray;
        }
      });
    }  else if (updateData.type === "DECORATION") {
      setDecorations(decorations => {
        let found = decorations.findIndex(curr => curr.entityId === updateData.entityId);
        if (found === -1) {
          return decorations.concat(updateData);
        } else {
          const newArray = [...decorations];
          newArray[found] = updateData;
          return newArray;
        }
      });
    }
  }

  function getVerb(updateData) {
    let verb = "";
    switch (updateData.action) {
      case "STAND_UP":
        verb = "left";
        break;
      case "SIT_DOWN":
        verb = "sat on";
        break;
      case "HARVEST":
        verb = "harvested";
        break;
      case "WATER":
        verb = "watered";
        break;
      case "PET":
        verb = "petted";
        break;
      case "POLLINATE":
        verb = "pollinated";
        break;
      case "CLEAN":
        verb = "cleaned";
        break;
      case "FEED":
        verb = "fed";
        break;
      default:
        verb = updateData.action.toLowerCase();
    }
    return verb;
  }