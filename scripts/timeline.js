new Vue({
    el: '#timeline',
    data: {
        items: [
            {
                time: "2003年2月",
                title: "誕生した",
                content: "生まれました。"
            },
            {
                time: "2009年4月",
                title: "小学校に入学",
                content:
                    `小学校で毎週パソコンの授業をする先生が居た・父親がIT系企業勤務だったこともあり、プログラミングに興味を持ち始める。<br>
                                    HTML・Scratchなどを触り始める。`
            },
            {
                time: "2003年2月",
                title: "誕生した",
                content:
                    `PC部では独学でUnity(C#)やMinecraft開発(Java)を行なっていた。<br><span style="color: gray">中3の1月にITパスポートを取得。</span>`
            },
            {
                time: "2018年4月",
                title: "高校に入学",
                content:
                    `アルバイトを始めたため部活には入らなかったが、独学にてスキル向上を目指した。
                        <br>感染症流行に伴う自粛期間には、本格的にJava・Kotlinを用いた開発(Minecraftのプラグイン・チャットツールのBot作成)をしていた。
                        <br>ここで初めてプログラミングを通して報酬を頂くことができた。
                        <br><span style="color: gray">高2秋に基本情報処理技術者試験に一発合格。<br>高3冬にJavaSilverSE11に一発合格。</span>`
            },
            {
                time: "2020年4月",
                title: "進路決定",
                content:
                    `プログラミングの知識があり、報酬を頂けていたこともあったことから、進路をエンジニアへと決定。
                        <br>プログラミングに専念したいため、大学ではなく専門学校への進学を決める。`
            },
            {
                time: "2021年4月",
                title: "専門学校に入学",
                content:
                    `座学でIT業界の基礎知識を身につけている。実技科目に関しては簡単なものもあり、その際はこっそりと個人開発を進めている。
                        <br> IT業界に携わりたい思いから、子供向けプログラミングスクールにてアルバイトを始める。
                        <br><span style="color: gray">1年次春に応用情報技術者試験を受験予定。</span>`
            },
            {
                time: "2025年3月",
                title: "4年制課程卒業予定",
                content: ""
            },
            {
                time: "将来",
                title: "これからについて",
                content:
                    `エンジニアになる意思は変わらないので、インターン等を通して就職活動をしていきたいと強く思っている。
                        <br> 現在最も得意な言語はKotlinなので、Android開発を学習して、Androidエンジニアになろうかと考え中。
                        <br> 応用情報技術者試験が終了次第本格的に初めて行きたい。`
            }
        ]
    }
})