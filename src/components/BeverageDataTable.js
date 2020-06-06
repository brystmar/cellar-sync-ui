import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import beverageDataTableColumns from './BeverageDataTableColumns';
import ListItemTemplate from './ListItemTemplate';

function BeverageDataTable(props) {
    return (
        <>
            <DataTableExtensions columns={beverageDataTableColumns}
                                 data={props.beverageList}
                                 filter={true}
                                 filterHidden={true}
                                 export={false}
                                 print={false}>
                <DataTable columns={beverageDataTableColumns}
                           data={props.beverageList}
                           keyField="beverage_id"
                           striped={true}
                           dense={true}

                           noHeader={true}
                           subHeader={false}
                           defaultSortField="producer"

                           expandableRows={true}
                           expandableRowsComponent={
                               <ListItemTemplate updateBeverageList={props.updateBeverageList}
                                                 picklistData={props.picklistData}/>
                           }
                           expandOnRowClicked={true}
                           expandableRowsHideExpander={true}

                           pagination={true}
                           paginationPerPage={props.paginationPerPage}
                           paginationRowsPerPageOptions={props.paginationRowsPerPageOptions}
                />
            </DataTableExtensions>
        </>
    )
}

BeverageDataTable.defaultProps = {
    userName: "",
    beverageList: [],
    picklistData: [],
    paginationPerPage: 40,
    paginationRowsPerPageOptions: [20, 40, 60, 80, 100, 150, 200, 250, 300, 400, 500]
}

export default BeverageDataTable;
