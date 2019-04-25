<template>
  <div class="dn-banner">
    <div class="container dn-banner-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <div class="swiper-content dn-banner-img" :class="'dn-banner-img-' + bIndex" v-for="(bItem, bIndex) in data[index]" :key="bIndex">
            <a class="dn-banner-link" :href="bItem.url" target="_blank">
              <div class="dn-banner-scale">
                <img :src="bItem.pic"/>
                <p class="dn-banner-title">
                  <span>{{bItem.title}}</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'DnBanner',
  componentName: 'DnBanner',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      required: false
    },
    autoplay: {
      type: Object,
      default: () => {
        return {
          disableOnInteraction: false,
          autoplay: true,
          delay: 5000
        }
      },
      required: false
    }
  },
  data () {
    return {
      swiper: {}
    }
  },
  mounted () {
    /* eslint-disable no-new */
    this.swiper = new Swiper('.dn-banner-container', {
      pagination: this.pagination,
      autoplay: this.autoplay
    })
    /* eslint-enable no-new */
  }
}
</script>
<style lang="less" scoped>
.dn-banner{
  position: relative;
  width: 100%;
  padding: 40px 32px 40px 32px;
  background: #242833;
  margin: 0 auto;
  .dn-banner-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    @media screen and (min-width: 1920px){
      width: 1840px!important;
    }
  }
  .swiper-content{
    display: block;
    overflow: hidden;
    position: relative;
    &.dn-banner-img{
      display: inline-block;
      position: relative;
      &:after {
        padding-top: 56.25%;
        content: '';
        display: block;
      }
    }
    &.dn-banner-img-0{
      width: 20%;
      a {
        padding-top: 8px;
        p {
          height: 88px;
          font-size: 20px;
          line-height: 28px;
          span {
            max-height: 56px;
            word-break: break-all;
          }
        }
      }
    }
    &.dn-banner-img-1{
      width: 20%;
      position: absolute;
      left: 0px;
      a {
        padding-bottom: 8px;
        p {
          height: 88px;
          font-size: 20px;
          line-height: 28px;
          span {
            max-height: 56px;
            word-break: break-all;
          }
        }
      }
    }
    &.dn-banner-img-2{
      width: 40%;
      a{
        width: 100%;
        p {
          height: 88px;
          font-size: 20px;
          line-height: 28px;
          span {
            font-size: 28px;
            line-height: 30px;
            max-height: 60px;
            word-break: break-all;
          }
        }
      }
    }
    &.dn-banner-img-3{
      width: 40%;
      a{
        width: 100%;
        p {
          height: 88px;
          font-size: 20px;
          line-height: 28px;
          span {
            font-size: 28px;
            line-height: 30px;
            max-height: 60px;
            word-break: break-all;
          }
        }
      }
    }
  }
  .dn-banner-link {
    position: absolute;
    top: 0;
    display: block;
    padding: 0 8px;
    bottom: 0;
    div {
      position: relative;
      bottom: 3px;
      height: 100%;
      &:hover {
        transition: box-shadow 0.2s ease-in-out;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
      }
      &:active {
        transition: box-shadow 0.2s ease-in-out;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      }
    }
  }
  .dn-banner-scale{
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: all .7s ease 0s;
      transform-origin: center;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .dn-banner-title{
    background: rgba(0,14,52,.6);
    position: absolute;
    bottom: 0;
    left: 0px;
    color: #fff;
    right: 0px;
    font-weight: bold;
    margin: 0;
    @media screen and (min-width: 1440px){
      height: 48px;
      font-size: 28px;
      line-height: 30px;
      span {
        max-height: 30px;
      }
    }
    @media screen and (max-width: 1439px) {
      height: 36px;
      font-size: 18px;
      line-height: 20px;
      span {
        max-height: 20px;
      }
    }
    span {
      word-break: break-all;
      padding: 0 16px;
      display: block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      overflow: hidden;
    }
  }
  .swiper-pagination{
    position: absolute;
    bottom: 24px!important;
  }
  .swiper-scrollbar-banner {
    position: absolute;
    left: 155px;
    bottom: 16px;
    z-index: 50;
    width: 128px;
    background: #323848;
  }
}
</style>
