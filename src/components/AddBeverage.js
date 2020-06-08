import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import AddBeverageForm from './AddBeverageForm';
import Popover from 'react-bootstrap/Popover';

// import Tooltip from 'react-bootstrap/Tooltip';

class AddBeverage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const addForm =
            <Popover id="add-beverage-popover">
                <Popover.Title as="h3">Add New Beverage</Popover.Title>
                <Popover.Content>
                    <AddBeverageForm beverageList={this.props.beverageList}
                                     picklistData={this.props.picklistData}
                                     updateBeverageList={this.props.updateBeverageList}/>
                </Popover.Content>
            </Popover>;

        return (
            <div className="add-beverage">
                <OverlayTrigger id="add-beverage-overlay-form"
                                placement="left"
                                trigger="click"
                                rootClose={true}
                                overlay={addForm}>
                    <img src="./icons/button_plus.png"
                         alt="Add Beverage"
                         className="add-button-floating"/>
                </OverlayTrigger>
            </div>
        )
    }
}

AddBeverage.defaultProps = {
    beverageList: [],
    picklistData: []
}

export default AddBeverage;
