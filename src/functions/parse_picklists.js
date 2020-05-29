// Accepts an array of picklists, returning a structured object literal

function parse_picklists(picklistData) {
    console.log(picklistData)
    let locationData, styleData, sizeData, i=0;

    // Parse the data for each type of picklist
    while (i < picklistData.length) {
        if (picklistData[i].list_name === "size") {
            sizeData = picklistData[i].list_values;
        } else if (picklistData[i].list_name === "style") {
            styleData = picklistData[i].list_values;
        } else if (picklistData[i].list_name === "location") {
            locationData = picklistData[i].list_values;
        }
        i += 1;
    }

    return {
        'location': locationData,
        'size': sizeData,
        'style': styleData
    }
}

export default parse_picklists();
