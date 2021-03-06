// @ts-ignore
import wx from 'weixin-js-sdk'
import { getWxConfigInfo } from '@/api'

/**
 * 设置微信配置
 */
export function wxConfig() {
  const url = window.location.href.split('#')[0]
  getWxConfigInfo({
    url,
    jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
    openTagList: ['wx-open-launch-app']
  }).then(res => {
    const { nonceStr, signature, timestamp } = res.data
    wx.config({
      appId: 'wxc32d1bb65f9912fb',
      nonceStr,
      signature,
      timestamp,
      debug: true,
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
      openTagList: ['wx-open-launch-app']
    })
    wx.ready(() => {
      console.log('ready')
    })
    wx.error((err: any) => {
      console.log(err)
    })
  })
}

// 分享
export function wxShare(title: string, desc: string, link: string, imgUrl: string) {
  wx.ready(function() {
    wx.updateAppMessageShareData({
      title, // 分享标题
      desc, // 分享描述
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })
    wx.updateTimelineShareData({
      title, // 分享标题
      link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl, // 分享图标
      success: function () {
        // 设置成功
      }
    })
  })
}