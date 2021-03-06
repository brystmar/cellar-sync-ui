import React from 'react';
import AddBeverageForm from './AddBeverageForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
            <div className="add-beverage-container">
                <OverlayTrigger id="add-beverage-overlay-form"
                                placement="left"
                                trigger="click"
                                overlay={addForm}>
                    <div className="floating-button-container">
                        <img src="./icons/button_plus.png"
                             alt="Add Beverage"
                             className="btn-add-floating"/>
                    </div>
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
