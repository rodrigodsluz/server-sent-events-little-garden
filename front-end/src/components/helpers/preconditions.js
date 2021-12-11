

export default function getButtons(itemState, order, id) {
    let type = itemState.type.toUpperCase();
    if (type === "FRUIT") {
        if (order === "PRIMARY") {
            if (itemState.ableToHarvest && !itemState.ableToWater) {
                return {name: "HARVEST", clickable: true};
            } else {
                return {name: 'HARVEST', clickable: false};
            }
        } else {
            return {name: 'WATER', clickable: (itemState.ableToWater)};
        }
    } else if (type === "FLOWER") {
        if (order === "PRIMARY") {
            if (itemState.ableToPollinate && !itemState.ableToWater) {
                return {name: "POLLINATE", clickable: true};
            } else {
                return {name: 'POLLINATE', clickable: false};
            }
        } else {
            return {name: 'WATER', clickable: (itemState.ableToWater)};
        }
    } else if (type === "ANIMAL") {
        if (order === "PRIMARY") {
            if (itemState.ableToPet && !itemState.ableToFeed) {
                return {name: "PET", clickable: true};
            } else {
                return {name: 'PET', clickable: false};
            }
        } else {
            return {name: 'FEED', clickable: (itemState.ableToFeed)};
        }
    } else if (type === "DECORATION") {
        if (order === "PRIMARY") {
            if (itemState.userSatId === "NONE") {
                if (itemState.ableToClean) {
                    return {name: "SIT  DOWN", clickable: false};
                }
                return {name: "SIT  DOWN", clickable: true};
            }
            else if (itemState.userSatId === id) {
                return {name: "STAND UP", clickable: true};
            } else {
                return {name: "SIT  DOWN", clickable: true, mock: true};
            }
        } else {
            return {name: 'CLEAN', clickable: itemState.ableToClean}
        }
    }

}