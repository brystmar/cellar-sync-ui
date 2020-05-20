function toggle_value_icons(current_value) {
    // Cycle through values 3 --> 2 --> 1 --> 3
    if (current_value === 1) {
        return 3;
    } else if (current_value === 2) {
        return 1;
    } else {
        return 2;
    }
}

export default toggle_value_icons;
