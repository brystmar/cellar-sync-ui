import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import ExpandedListItem from './list_items/ExpandedListItem';

function BeerDataTable(props) {
    let columns = [
        {
            name: 'Producer',
            selector: 'brewery',
            sortable: true,
            grow: 0.8  // https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            grow: 1.5
        },
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
            hide: 1079,
            maxWidth: '50px',
            grow: 0
        },
        {
            name: 'Location',
            selector: 'location',
            sortable: true,
            hide: 'sm',
            grow: 0.5
        },
        {
            name: 'Size',
            selector: 'size',
            sortable: true,
            hide: 'md',
            maxWidth: '55px',
            grow: 0
        },
        {
            name: 'Qty',
            selector: 'qty',
            sortable: true,
            hide: 'md',
            maxWidth: '25px',
            grow: 0
        }
    ];

    return (
        <div className="datatable-wrapper">
            <DataTableExtensions columns={columns}
                                 data={props.beerList}
                                 filter={true}
                                 filterHidden={true}
                                 export={false}
                                 print={false}>
                <DataTable columns={columns}
                           data={props.beerList}
                           keyField="beer_id"
                           striped={true}
                           dense={true}

                           noHeader={true}
                           subHeader={false}
                           defaultSortField="brewery"

                           expandableRows={true}
                           expandableRowsComponent={<ExpandedListItem/>}
                           expandOnRowClicked={true}
                           expandableRowsHideExpander={true}

                           pagination={true}
                           paginationPerPage={props.paginationPerPage}
                           paginationRowsPerPageOptions={props.paginationRowsPerPageOptions}
                />
            </DataTableExtensions>
        </div>
    )
}

BeerDataTable.defaultProps = {
    userName: "",
    beerList: [],
    paginationPerPage: 20,
    paginationRowsPerPageOptions: [20, 40, 60, 80, 100, 150, 200, 250, 300, 400, 500]
}

export default BeerDataTable;
