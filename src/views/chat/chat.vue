<template>
  <v-ons-page class="chat" :class="emoticon || fileShow ? 'chatEmoticon' : ''">
    <v-ons-toolbar>
      <div class="left" @click="$router.back(-1)">
        <v-ons-toolbar-button
          icon="chevron-left"
          style="color: #2a2a2a"
        ></v-ons-toolbar-button>
      </div>

      <div class="center" style="font-size: 14px;font-weight: bold">
        聊天界面
      </div>
      <div class="right" @click="particulars()">
        <v-ons-icon
          icon="ion-more"
          style="font-size: 22px;padding-right: 10px"
        ></v-ons-icon>
      </div>
    </v-ons-toolbar>

    <div class="chat-message">
      <!-- 上拉加载历史消息 -->
      <v-ons-pull-hook :action="loadItem" @changestate="state = $event.state">
        <ons-progress-circular indeterminate></ons-progress-circular>
      </v-ons-pull-hook>

      <!-- 消息渲染列表 -->
      <ul>
        <li v-for="(item, index) in chatList" :key="index">
          <p>
            <span v-if="item.time">{{ item.time }}</span>
          </p>
          <div class="main outer" :class="item.position ? 'self' : ''">
            <img class="avatar" width="30" height="30" :src="item.img" alt="" />
            <div
              class="text"
              v-html="
                item.content.replace(/\[[\u4E00-\u9FA5]{1,3}\]/gi, emotion)
              "
            ></div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部模块 -->
    <v-ons-bottom-toolbar :style="emoticon || fileShow ? 'height: 170px' : ''">
      <div class="outer">
        <div class="chat-bottomLeft">
          <!--<v-ons-icon icon="ion-aperture" style="font-size: 22px"></v-ons-icon>-->
          <!--<i style="font-size: 40px" class="fa-ic-Voice"></i>-->
        </div>
        <div class="chat-bottomCenter">
          <v-ons-input
            class="chat-bottomCenter_input"
            v-model="input"
            @focus="changeColor"
            @keyup.enter="submit"
            floatv-model="name"
          >
          </v-ons-input>
        </div>
        <div class="chat-bottomRight">
          <i
            style="font-size: 26px"
            @click="openEmoticon()"
            :style="emoticon ? 'color: #00D00B' : ''"
            class="fa-ic-Expression"
          ></i>
          <i
            style="font-size: 26px"
            @click="openFile()"
            :style="fileShow ? 'color: #00D00B' : ''"
            class="fa-ic-AddTo"
          ></i>
        </div>
      </div>

      <!-- 表情包 -->
      <v-ons-carousel
        fullscreen
        swipeable
        auto-scroll
        overscrollable
        v-if="emoticon"
        :index.sync="carouselIndex"
      >
        <v-ons-carousel-item v-for="(j, k) in list" :key="k">
          <div v-for="(i, index) in j" :key="index">
            <div
              style="text-align: center; font-size: 30px; color: #fff;;padding-top: 5px"
              v-for="(item, index1) in i"
              :key="index1"
            >
              <ly-emotion
                v-for="(val, index2) in item"
                :key="index2"
                @click.native="clickHandler(val)"
                >{{ val }}</ly-emotion
              >
            </div>
          </div>
        </v-ons-carousel-item>
      </v-ons-carousel>
      <div :style="dots" v-if="emoticon">
        <span
          :index="dotIndex - 1"
          v-for="dotIndex in Object.keys(list).length"
          :key="dotIndex"
          style="cursor: pointer"
          @click="carouselIndex = dotIndex - 1"
        >
          {{ carouselIndex === dotIndex - 1 ? "\u25CF" : "\u25CB" }}
        </span>
      </div>

      <!-- 文件 -->
      <v-ons-carousel
        fullscreen
        swipeable
        auto-scroll
        overscrollable
        v-if="fileShow"
        class="chat-file"
        :index.sync="fileIndex"
      >
        <v-ons-carousel-item v-for="(j, k) in fileList" :key="k">
          <div v-for="(i, index) in j" :key="index">
            <div
              style="text-align: center; font-size: 30px; color: #fff"
              class="outer"
              v-for="(item, index1) in i"
              :key="index1"
            >
              <div
                v-for="(val, index2) in item"
                :key="index2"
                class="chat-file_left"
              >
                <i :class="val.icon"></i>
                <!--<div class="chat-file_left&#45;&#45;div"></div>-->
                <p>{{ val.name }}</p>
              </div>
            </div>
          </div>
        </v-ons-carousel-item>
      </v-ons-carousel>
    </v-ons-bottom-toolbar>
  </v-ons-page>
</template>

<script>
import LyEmotion from "./Emotion";
import { EMOTION_LIST } from "../../assets/js/emoticon";
export default {
  name: "chat",
  components: { LyEmotion },
  data() {
    return {
      ChatState: 1, // 1私聊，2群聊
      input: "",
      chatList: [
        {
          position: 0,
          time: "2019/03/20 下午2:46:22",
          img: "https://placekitten.com/g/40/40",
          content:
            "下午好下午好下午[睡]好[酷啊]下午好下午好下午好下午好下[酷]午好下午好"
        },
        {
          position: 0,
          img: "https://placekitten.com/g/40/40",
          content: "下午好下午好下午好下午好下午好下午好下午好下午好下午好"
        },
        {
          position: 0,
          img: "https://placekitten.com/g/40/43",
          content: "下午好下午好下午好[发呆]下午好"
        },
        {
          position: 1,
          time: "2019/03/20 下午2:46:22",
          img: "https://placekitten.com/g/40/40",
          content:
            "[奋斗][奋斗][奋斗][左太极][右太极]下午好下午好下午好下午好下午好下午好下午好下午好下午好"
        },
        {
          position: 1,
          time: "2019/03/20 下午2:46:22",
          img: "https://placekitten.com/g/40/40",
          content:
            "[亲亲]下午好下午好下午好下午好下午好下午好下午好下午好下午好"
        },
        {
          position: 0,
          time: "2019/03/20 下午2:46:22",
          img: "https://placekitten.com/g/40/40",
          content:
            "下午好下午好下午好下午好下午好下午好下午好下午好下午好[微笑]"
        }
      ],
      list: [],
      fileList: [
        {
          list: [
            [
              {
                icon: "fa-ic-Photo",
                name: "照片"
              },
              {
                icon: "fa-ic-Camera",
                name: "拍摄"
              },
              {
                icon: "fa-ic-VisualPhone",
                name: "语音通话"
              },
              {
                icon: "fa-ic-Position",
                name: "位置"
              },
              {
                icon: "fa-ic-Redenvelopes",
                name: "红包"
              },
              {
                icon: "fa-ic-Microphone",
                name: "语音输入"
              },
              {
                icon: "fa-ic-Collection",
                name: "收藏"
              },
              {
                icon: "fa-ic-Business",
                name: "个人名片"
              }
            ]
          ]
        },
        {
          list: [
            [
              {
                icon: "fa-ic-File",
                name: "相册"
              },
              {
                icon: "fa-ic-Coupon",
                name: "相册"
              }
            ]
          ]
        }
      ],
      carouselIndex: 0,
      fileIndex: 0,
      dots: {
        textAlign: "center",
        fontSize: "12px",
        color: "#2a2a2a",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
      },
      emoticon: true,
      fileShow: false,
      state: "initial"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  created() {
    this.list = EMOTION_LIST.list;
    console.log(EMOTION_LIST);
  },
  watch: {
    chatList() {
      // 当数据有变化，滚动条保持在最底部
      this.$nextTick(() => {
        let ele = document.getElementsByClassName("page__content")[1];
        ele.scrollTop = ele.scrollHeight;
      });
    }
  },
  methods: {
    particulars() {
      if (this.ChatState === 1)
        this.$router.push({ name: "FriendParticulars" });
      else this.$router.push({ name: "GroupParticulars" });
    },
    loadItem(done) {
      setTimeout(() => {
        done();
      }, 3000);
    },
    submit() {
      // 模拟发送聊天数据
      if (this.input) {
        let tt = {};
        tt.content = this.input;
        tt.img = "https://placekitten.com/g/40/40";
        tt.time = this.$helps.getEastDate();
        // 1自己，0对方
        tt.position = Math.round(Math.random());
        this.chatList.push(tt);
        this.input = "";
      }
    },
    openEmoticon() {
      this.fileShow = false;
      this.emoticon ? (this.emoticon = false) : (this.emoticon = true);
    },
    // 将匹配结果替换表情图片
    emotion(res) {
      let word = res.replace(/\[|\]/gi, "");
      const list = EMOTION_LIST.contrastList;
      const staticList = EMOTION_LIST.staticList;
      let index = list.indexOf(word);
      //  <img width="22px" src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" style="vertical-align: bottom">
      if (index !== -1) {
        return `<em style="background-position: ${staticList[index].x} ${
          staticList[index].y
        }"></em>`;
      } else {
        return `[${word}]`;
      }
    },
    openFile() {
      this.carouselIndex = 0;
      this.emoticon = false;
      this.fileShow ? (this.fileShow = false) : (this.fileShow = true);
    },
    clickHandler(i) {
      if (i === "删除") {
        const list = EMOTION_LIST.contrastList;
        let tt = this.input.substr(-4);
        let word = tt.replace(/\[|\]/gi, "");

        if (list.indexOf(word) !== -1)
          this.input = this.input.slice(0, this.deleteLen(word.length));
        else this.input = this.input.substring(0, this.input.length - 1);
        return;
      }
      let emotion = `[${i}]`;
      this.input += emotion;
    },
    deleteLen(len) {
      console.log("len", len);
      if (len === 1) return -3;
      else if (len === 2) return -4;
      else return -5;
    },
    changeColor() {
      this.emoticon = false;
      this.fileShow = false;
    }
  }
};
</script>

<style scoped lang="scss">
.chat {
  /deep/ .page__content {
    background-color: #f5f5f5 !important;
  }
  @at-root #{&}-message {
    padding: 10px 15px;
    overflow: scroll;
    background-color: #f5f5f5;
    ul {
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 15px;
        left: 0;
        position: relative;
        display: block;
        p {
          margin: 10px 0;
          text-align: center;
          span {
            display: inline-block;
            padding: 0 5px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dadada;
          }
        }
        .avatar {
          float: left;
          margin: 0 10px 0 0;
          border-radius: 3px;
          background: #fff;
        }
        .text {
          display: inline-block;
          position: relative;
          max-width: calc(100% - 70px);
          min-height: 22px;
          line-height: 20px;
          font-size: 14px;
          padding: 6px 10px;
          text-align: left;
          word-break: break-all;
          background-color: #fff;
          color: #000;
          border-radius: 4px;
          box-shadow: 0 1px 7px -5px #000;
          /deep/ em {
            display: inline-block;
            width: 26px;
            height: 26px;
            background: url("../../assets/img/emotion/emotion.png") no-repeat;
            background-size: 1900%;
            vertical-align: bottom;
          }
        }
        .text:before {
          content: " ";
          position: absolute;
          top: 9px;
          right: 100%;
          border: 6px solid transparent;
          border-right-color: #fff;
        }
        .self {
          text-align: right;
          .avatar {
            float: right;
            margin: 0 0 0 10px;
          }
          .text {
            background-color: #9eea6a;
          }
          .text:before {
            right: inherit;
            left: 100%;
            border-right-color: transparent;
            border-left-color: #9eea6a;
          }
        }
      }
    }
  }
  .bottom-bar {
    padding: 4px;
    background-color: #ececec;
  }
  @at-root #{&}-bottomLeft {
    float: left;
    padding: 6px;
  }
  @at-root #{&}-bottomCenter {
    padding: 2px 0;
    width: 65%;
    margin-left: 10px;
    float: left;
    @at-root #{&}_input {
      background-color: white;
      padding: 0 4px;
      width: 100%;
      caret-color: #9eea6a;
    }
  }
  @at-root #{&}-bottomRight {
    float: right;
    padding: 4px;
    i {
      margin: 0 4px;
    }
  }

  @at-root #{&}-file {
    @at-root #{&}_left {
      float: left;
      width: 25%;
      color: #2a2a2a;
      margin-top: 4px;
      i {
        font-size: 20px;
        padding: 12px 14px;
        display: inline-block;
        background-color: white;
        border-radius: 6px;
      }
      p {
        margin: 0;
        font-size: 12px;
      }
    }
  }
}
.chatEmoticon /deep/.page__content {
  bottom: 170px !important;
}
.outer:after {
  clear: both;
  content: ".";
  display: block;
  width: 0;
  height: 0;
  zoom: 1;
  visibility: hidden;
}
</style>
