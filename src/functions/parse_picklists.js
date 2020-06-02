// Accepts an array of picklists, returning a structured object literal by default
// Alternatively, returns only the picklist values for the requested list

function parse_picklists(picklistData, listName = "") {
    // Ensure we receive data to parse
    if (typeof (picklistData) !== typeof ([]) || picklistData.length === 0) {
        console.log("picklistData is empty");
        return {};
    }

    let i = 0, output = {};

    // Parse the data for each type of picklist
    while (i < picklistData.length) {
        if (picklistData[i].list_name === listName) {
            // Found data for the requested list
            return picklistData[i].list_values
        } else {
            // Add this to the output object literal
            output = Object.assign(output, {
                [picklistData[i].list_name]: picklistData[i].list_values
            })
        }
        i += 1;
    }

    return output;
}

export default parse_picklists;
