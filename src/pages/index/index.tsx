import React, { PropsWithChildren, useEffect, useState } from "react";
import { View, Icon } from "@tarojs/components";
import { showModal } from "@tarojs/taro";
var Calc = require("../../utils/calc");
import "./index.less";

const Index: React.FC<PropsWithChildren> = () => {
  const [calc, setCalc] = useState<any>({});
  const [tapped, setTapped] = useState<any>({});
  useEffect(() => {
    Calc.reset();
  }, []);

  const showAbout = (e) => {
    showModal({
      title: "关于",
      content:
        "一个简单的计算器 @V1.0，原来的内容已迁移至 https://it-blacklist.github.io",
      showCancel: false,
    });
  };
  const btnClicked = (e) => {
    console.log(e);
    var code = e.target.dataset.op;
    Calc.addOp(code);
    console.log(Calc.getVars());
    setCalc(Calc.getVars());
  };
  const btnTouchStart = (e) => {
    console.log(e);
    var code = e.target.dataset.op;
    var tapped = { [code]: "active" };
    setTapped(tapped);
  };
  const btnTouchEnd = (e) => {
    console.log(e);
    var code = e.target.dataset.op;
    var tapped = {};
    setTapped(tapped);
  };

  return (
    <View className="container">
      <View class="panel-display" style="position: relative;">
        <View>
          <Icon
            id="icon-about"
            type="info"
            size="28"
            color="#aaa"
            onClick={showAbout}
          />
        </View>
        <View id="display-num">{calc.displayNum}</View>
        <View id="display-op">{calc.displayOp}</View>
      </View>
      <View className="panel-btns">
        <View className="btns-rows">
          <View
            id="btn-c"
            className={`btn ${tapped["c"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="c"
          >
            AC
          </View>
          <View
            className={`btn ${tapped["d"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="d"
          >
            DEL
          </View>
          <View
            class={`btn ${tapped["/"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="/"
            style="font-size: 24px;"
          >
            ÷
          </View>
          <View
            className={`btn ${tapped["x"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="x"
          >
            ×
          </View>
        </View>
        <View className="btns-rows">
          <View
            className={`btn ${tapped["7"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="7"
          >
            7
          </View>
          <View
            className={`btn ${tapped["8"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="8"
          >
            8
          </View>
          <View
            className={`btn ${tapped["9"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="9"
          >
            9
          </View>
          <View
            className={`btn ${tapped["-"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="-"
          >
            -
          </View>
        </View>
        <View className="btns-rows">
          <View
            className={`btn ${tapped["4"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="4"
          >
            4
          </View>
          <View
            className={`btn ${tapped["5"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="5"
          >
            5
          </View>
          <View
            className={`btn ${tapped["6"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="6"
          >
            6
          </View>
          <View
            className={`btn ${tapped["+"]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="+"
          >
            +
          </View>
        </View>
        <View id="btns2" className="btns-rows">
          <View id="btns2-left">
            <View className="btns2-left-part">
              <View
                className={`btn ${tapped["1"]}`}
                onClick={btnClicked}
                onTouchstart={btnTouchStart}
                onTouchend={btnTouchEnd}
                data-op="1"
              >
                1
              </View>
              <View
                className={`btn ${tapped["2"]}`}
                onClick={btnClicked}
                onTouchstart={btnTouchStart}
                onTouchend={btnTouchEnd}
                data-op="2"
              >
                2
              </View>
              <View
                className={`"btn ${tapped["3"]}`}
                onClick={btnClicked}
                onTouchstart={btnTouchStart}
                onTouchend={btnTouchEnd}
                data-op="3"
              >
                3
              </View>
            </View>
            <View className="btns2-left-part">
              <View
                className={`btn ${tapped["%"]}`}
                onClick={btnClicked}
                onTouchstart={btnTouchStart}
                onTouchend={btnTouchEnd}
                data-op="%"
              >
                %
              </View>
              <View
                className={`btn ${tapped["0"]}`}
                onClick={btnClicked}
                onTouchstart={btnTouchStart}
                onTouchend={btnTouchEnd}
                data-op="0"
              >
                0
              </View>
              <View
                className={`btn ${tapped["."]}`}
                onClick={btnClicked}
                onTouchstart={btnTouchStart}
                onTouchend={btnTouchEnd}
                data-op="."
              >
                .
              </View>
            </View>
          </View>
          <View
            id="btns2-right"
            className={`btn ${tapped["="]}`}
            onClick={btnClicked}
            onTouchstart={btnTouchStart}
            onTouchend={btnTouchEnd}
            data-op="="
          >
            =
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
