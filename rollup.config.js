/*
 * @Author: ltsg xiaoshumin@agora.io
 * @Date: 2022-11-16 18:31:38
 * @LastEditors: ltsg xiaoshumin@agora.io
 * @LastEditTime: 2022-11-16 20:33:32
 * @FilePath: /webrtc-internals-safari/rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  input: "src/index.js",
  output: [
    {
      file: `dist/index.js`,
      format: "umd",
    },
  ],
};
