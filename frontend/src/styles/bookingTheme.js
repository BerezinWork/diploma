/** @type {import('antd').ThemeConfig} */
const bookingTheme = {
    token: {
        colorPrimary: 'var(--booking-primary-color)',
        colorInfo: 'var(--booking-info-color)',
        colorText: 'var(--booking-text-color)',
        colorTextHeading: 'var(--booking-text-color)',
        colorLink: 'var(--booking-primary-color)',
        colorBgHeader: 'var(--booking-header-bg)',

        fontFamily: 'var(--booking-font-family), sans-serif',

        borderRadius: 8,
        controlHeight: 52,
        lineWidth: 0,
        colorPrimaryHover: 'transparent',
    },
    components: {
        Select: {
            colorBgContainer: 'var(--booking-header-bg)',
            colorText: 'var(--booking-info-color)',
            colorTextPlaceholder: 'var(--booking-info-color)',
        },
        Input: {
            colorBgContainer: 'var(--booking-header-bg)',
            colorText: 'var(--booking-info-color)',
            colorTextPlaceholder: 'var(--booking-info-color)',
        }
    },
}

export default bookingTheme;
