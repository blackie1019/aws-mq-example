# aws-mq-example
AWS MQ sample code with nodejs

## Setup Steps ##

1. 啟用 AWS MQ 服務並設定好 Security Group InBound 與 Outbound port
2. 更改專案內的 ActiveMQ 的 MQTT 設定，這邊注意官方給的 mqtt+ssl 需要改成 mqtts
3. 安裝 MQTT.js ，如果是本專案請直接 npm 安裝即可

    npm install

4. 啟用訂閱者

    node subscriber.js

5. 啟用發佈者

    node publisher.js