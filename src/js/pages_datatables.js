$(function () {
    // Set Defaults
    $.extend($.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{
            orderable: false,
            width: '100px',
            targets: [5]
        }],
        dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
        language: {
            search: '<span>Filter:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: {
                'first': 'First',
                'last': 'Last',
                'next': '&rarr;',
                'previous': '&larr;'
            }
        },
        drawCallback: function () {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function () {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        }
    });

    // Default datatables
    $(".datatable").DataTable();

    // Pagination
    $('.datatable-pagination').DataTable({
        "pagingType": "simple",
        language: {
            paginate: {
                'next': 'Next &rarr;',
                'previous': '&larr; Previous'
            }
        },
    });

    // Vertical Scroll
    $('.datatable-vscroll').DataTable({
        "scrollY": "200px",
        "scrollCollapse": true,
        "paging": false
    });
});