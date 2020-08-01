const newBeverageDefaults = {
    beverage_id: "",
    producer: "",
    name: "",
    style: "",
    specific_style: "",
    aging_potential: 2,
    trade_value: 2,
    qty_total: 0,
    date_added: 0,
    last_modified: 0,
    vintages: [
        {
            bottle_date: (new Date()).getFullYear().toString() + "-01-01",
            batch: "",
            size: "750 mL",
            for_trade: false,
            untappd: "",
            note: "",
            display_order: 0,
            locations: [
                {
                    name: "Home",
                    qty: 0,
                    qty_cold: 0,
                    note: "",
                    display_order: 0
                }
            ]
        }
    ],
};

export default newBeverageDefaults;
