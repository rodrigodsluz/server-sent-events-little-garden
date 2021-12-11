

export default function getAction(itemState, clickType) {

    switch (itemState.type) {
        case "APPLE":
            if (clickType === "primary") {
                return "WATER"
            } else {
                return "HARVEST";
            }
            
        default:
            break;
    }

}