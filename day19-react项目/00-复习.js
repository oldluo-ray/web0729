/*


   适配

    vw适配: 计算比例(设计值和设计稿的宽度)
    viewport适配: 给width设置为设计稿的宽度
    rem适配: 

        方式一
            1. 计算根标签字体: 
                设备独立像素的宽度 * 100 / 设计稿的宽度
                document.documentElement.clientWidth

            2. 设计值/100rem

        方式二
            1. 计算根标签字体: 
                设备独立像素的宽度 / 10

            2.  设计值 / (设计稿的宽度 / 10) rem


   1px像素问题

        在高清屏上一个px被会多个物理像素渲染,视觉上看起来比较粗

        1. 媒体查询

            缺点: 代码冗余

        2. 修改布局视口的宽度

            1. 正常rem布局
            2. 1px不参与适配
            3. 根据当前像素比,修改布局视口,让布局视口变大
            4. 修改根标签的字体大小,等比变大



   移动端事件 

        touchstart

        touchend

        touchmove

        事件对象: 

            三个属性可以获取触点
            touches  伪数组  整个屏幕的触点对象
            changedTouches 伪数组 改变的触点对象 一般配合touchend获取离开的触点信息
            targetTouches 伪数组 元素上的触点对象







*/
