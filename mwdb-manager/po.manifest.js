(function (root, data) {
    if (typeof cockpit === 'object' && cockpit.locale) {
        cockpit.locale(data);
    }
}(this, {}));
