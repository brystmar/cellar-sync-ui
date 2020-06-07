const beverageDataTableColumns = [
        {
            name: 'Producer',
            selector: 'producer',
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

export default beverageDataTableColumns;
