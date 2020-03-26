/**
 * 首頁-大圖輪播
 *
 * @url /home/banner
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    code: 0,
    msg: 'OK',
    data: {
      list: [
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/bg_1.jpg',
          title: 'Welcome to Health Coach',
          content: 'Get in shape faster, live your happy life',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/bg_2.jpg',
          title: 'A Fresh approach to healthy life',
          content: 'Unlock your potential with good nutrition',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/bg_3.jpg',
          title: 'Welcome Health Coach',
          content: 'You can transform health through habit change',
          url: './',
        }
      ]
    }
  };
};
