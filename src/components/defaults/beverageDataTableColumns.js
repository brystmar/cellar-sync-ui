const beverageDataTableColumns = [
        {
            name: 'Producer',
            selector: 'producer',
            sortable: true,
            minWidth: '185px',
            grow: 1
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
            minWidth: '225px',
            grow: 1.4
        },
        {
            name: 'Year',
            selector: 'year',
            sortable: true,
            hide: 'sm',
            maxWidth: '50px',
            grow: 0
        },
        {
            name: 'Location',
            selector: 'location',
            sortable: true,
            hide: 'sm',
            grow: 0
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

export default beverageDataTableColumns;
