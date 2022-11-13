export const selectType = (type) => {
    switch (type) {
        case 'error':
            return 'danger';
        case 'success':
            return 'success';
        default:
            return 'info';
    }
};
