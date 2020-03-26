/**
 * 首頁-健身計劃
 *
 * @url /home/plan
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    code: 0,
    msg: 'OK',
    data: {
      list: [
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/services-1.jpg',
          title: 'Exercise Program',
          content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/services-2.jpg',
          title: 'Nutrition Plans',
          content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/services-3.jpg',
          title: 'Diet Program',
          content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/services-1.jpg',
          title: 'Exercise Program',
          content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/services-2.jpg',
          title: 'Nutrition Plans',
          content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
          url: './',
        },
        {
          img: 'https://colorlib.com/preview/theme/healthcoach/images/services-3.jpg',
          title: 'Diet Program',
          content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
          url: './',
        }
      ]
    }
  };
};
