import React from 'react';
import './styles/add_beverage_form.css';

class AddBeverageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log("AddBev form submitted");
    }

    render() {
        return (
            <div>
                Hello?
            </div>
        )
    }
}

AddBeverageForm.defaultProps = {
    this: "that",
    beerList: [],
    picklistData: []
}

export default AddBeverageForm;
