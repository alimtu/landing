import { theme } from 'antd';

const { defaultAlgorithm, defaultSeed } = theme;

export const antdTheme = {
  algorithm: defaultAlgorithm,
  token: {
    fontFamily:
      'IRANSansX, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    borderRadius: 8,
    colorPrimary: '#244a9a',
  },
  components: {
    Typography: {
      fontFamily: 'IRANSansX',
    },
    Button: {
      fontFamily: 'IRANSansX',
    },
    Input: {
      fontFamily: 'IRANSansX',
    },
    Select: {
      fontFamily: 'IRANSansX',
    },
    Modal: {
      fontFamily: 'IRANSansX',
    },
    Menu: {
      fontFamily: 'IRANSansX',
    },
    Table: {
      fontFamily: 'IRANSansX',
    },
  },
};
