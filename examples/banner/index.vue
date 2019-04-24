<template>
  <div>
    <dn-banner :data="data"></dn-banner>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      data: {
        0: [
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0422/20190422143413-5011-73868.jpg',
            title: 'S2全新赛季将至《火影忍者OL-忍者新世代》',
            url: 'https://www.tgbus.com/news/41136'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0422/20190422142116-4876-32543.jpg',
            title: '回到古代谈恋爱《遇见逆水寒》今日删档限号开测',
            url: 'https://www.tgbus.com/news/41133'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0420/20190420170820-1325-63897.jpg',
            title: 'R星前员工简历泄露《GTA 6》或已在制作过程中',
            url: 'https://www.tgbus.com/news/41068'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0420/20190420113020-5633-36223.jpg',
            title: '《海贼王：寻秘世界》公布DLC角色“索隆”预告片',
            url: 'https://www.tgbus.com/news/41060'
          }
        ],
        1: [
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0419/20190419201824-1924-29674.png',
            title: '电玩天堂第282期 PS5的进化怎么评价？',
            url: 'https://www.tgbus.com/news/41044'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0419/20190419195655-4688-93226.jpg',
            title: '国家新闻出版广电总局公告确认版号申报正式重启',
            url: 'https://www.tgbus.com/news/41043'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0419/20190419133429-6515-72882.jpg',
            title: '2019《守望先锋》线下PVE挑战赛 4月30日战火重燃',
            url: 'https://www.tgbus.com/news/40988'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0419/20190419110937-4418-38579.jpg',
            title: '《新樱花大战》首波游戏资讯 灵子战斗机介绍',
            url: 'https://www.tgbus.com/news/40966'
          }
        ],
        2: [
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0419/20190419011638-5684-63866.jpg',
            title: 'PS5首席架构师：次世代主机定价会很有吸引力',
            url: 'https://www.tgbus.com/news/40936'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0419/20190419142811-4366-15749.png',
            title: '腾讯代理Switch？任天堂国行蓝海市场即将破冰',
            url: 'https://www.tgbus.com/news/40928'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0418/20190418174823-8632-30945.jpg',
            title: '令人抓狂的《火车峡谷2》又来了，而且难度超乎想象',
            url: 'https://www.tgbus.com/news/40907'
          },
          { pic: 'https://img2.tgbus.com/i/720_414/cms3.0/2019/0418/20190418171728-3110-21024.jpg',
            title: '腾讯将代理国行NS主机 和《超级马力欧兄弟U》',
            url: 'https://www.tgbus.com/news/40904'
          }
        ]
      }
    }
  }
}
</script>
