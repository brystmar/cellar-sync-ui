import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import ListItemTemplate from './ListItemTemplate';
import beverageDataTableColumns from './defaults/beverageDataTableColumns';

function BeverageDataTable(props) {
    // TODO: Get these 3rd party components to re-render when bevList changes
    //  https://github.com/jbetancur/react-data-table-component#header
    return (
        <DataTableExtensions columns={beverageDataTableColumns}
                             data={props.beverageList}
                             filter={true}
                             filterHidden={true}
                             export={false}
                             key={props.dtKey}
                             print={false}>
            <DataTable columns={beverageDataTableColumns}
                       data={props.beverageList}
                       keyField="beverage_id"
                       key={props.dtKey}
                       striped={true}
                       dense={true}

                       noHeader={true}
                       subHeader={false}
                       defaultSortField="producer"

                       expandableRows={true}
                       expandableRowsComponent={
                           <ListItemTemplate updateBeverageList={props.updateBeverageList}
                                             deleteBeverage={props.deleteBeverage}
                                             picklistData={props.picklistData}/>}
                       expandOnRowClicked={true}
                       expandableRowsHideExpander={true}

                       pagination={true}
                       paginationPerPage={props.paginationPerPage}
                       paginationRowsPerPageOptions={props.paginationRowsPerPageOptions}/>
        </DataTableExtensions>
    )
}

BeverageDataTable.defaultProps = {
    userName: "",
    beverageList: [],
    picklistData: [],
    dtKey: 0,
    paginationPerPage: 50,
    paginationRowsPerPageOptions: [25, 50, 75, 100, 200, 350, 500]
}

export default BeverageDataTable;
