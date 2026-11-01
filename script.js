(function () {
    /* Open a dialog when any part of a card (or its "View Details" button) is clicked. */
    document.querySelectorAll('.card[data-open]').forEach(function (c) {
        c.addEventListener('click', function () {
            var d = document.getElementById(c.dataset.open);
            d.showModal();
            var v = d.querySelector('video'); if (v) v.play();
        });
    });
    /* Close a dialog with the ✕ button or by clicking the backdrop (Escape is built in). */
    document.querySelectorAll('dialog').forEach(function (d) {
        d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('[data-close]')) d.close() });
    });
    /* Toggle between light and dark themes. */
    var root = document.documentElement;
    document.getElementById('theme').addEventListener('click', function () {
        var light = root.getAttribute('data-theme') === 'light' || (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: light)').matches);
        root.setAttribute('data-theme', light ? 'dark' : 'light');
    });
    /* Đóng popup (bằng ✕, Esc hoặc bấm nền) thì dừng video, tránh nghe tiếng khi popup đã ẩn */
    document.querySelectorAll('dialog').forEach(function (d) {
        d.addEventListener('close', function () {
            d.querySelectorAll('video').forEach(function (v) { v.pause() });
        });
    });
})();