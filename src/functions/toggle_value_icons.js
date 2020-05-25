function toggle_value_icons(current_value) {
    // Cycle through values 3 --> 2 --> 1 --> 3
    if (current_value === 1) {
        return 3;
    } else if (current_value === 2) {
        return 1;
    } else if (current_value === 3) {
        return 2;
    } else {
        console.log("Error matching current_value in toggle_value_icons.js");
        console.log(current_value + ", type: " + typeof(current_value));
    }
}

export default toggle_value_icons;
