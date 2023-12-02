(function () {
    // 'use strict'

    // Tooltip and popover demos
    document.querySelectorAll('.tooltip-form')
        .forEach(function (tooltip) {
        new bootstrap.Tooltip(tooltip, {
            selector: '[data-bs-toggle="tooltip"]'
        })
        })

})()