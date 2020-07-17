const newBeverageDefaults = {
    beverage_id: "",
    name: "",
    producer: "",
    year: (new Date()).getFullYear(),
    size: "375 mL",
    location: "Home",
    batch: "",
    bottle_date: "",
    qty: 0,
    qty_cold: 0,
    style: "",
    specific_style: "",
    for_trade: true,
    trade_value: 2,
    aging_potential: 2,
    untappd: "",
    note: ""
};

export default newBeverageDefaults;
