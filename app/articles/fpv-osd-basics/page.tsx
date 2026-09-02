import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "FPV 画面上的字到底从哪来？｜ZYRO 技术科普",
  description: "从电压、电流、飞行模式到返航方向，读懂 FPV OSD 如何把飞控数据叠加到实时画面。",
};

export default function FpvOsdBasicsArticle() {
  return (
    <ArticleShell category="飞行信息" title="FPV 画面上的字到底从哪来？OSD 不是装饰" deck="电压、已用容量、飞行模式和返航方向并不是相机拍到的内容。OSD 把飞控与传感器数据叠加到实时画面，帮助操作者在飞行中更快判断状态。" date="2026.09.02" readingTime="约 6 分钟">
      <p className="article-lead">第一次看 FPV 画面时，很多人会把角落里的数字当成“字幕”。其实它们是一组随飞行状态变化的叠加信息：相机负责看到什么，飞控与传感器负责知道什么，OSD 再把这两类内容放到同一块屏幕上。</p>

      <h2>先分清三层：画面、数据与叠加</h2>
      <p>相机输出的是实时视频；飞控会汇集电池电压、电流、飞行模式等机载数据，GPS、接收机或其他外设接入后还可能提供位置、距离、方向或链路状态。OSD（On-Screen Display，屏幕叠加显示）将可用的数据以图标、数字或提示叠加在视频上，而不是把数据“拍”进镜头里。</p>
      <p>这也解释了为什么同一套相机与图传，换了飞控配置后，屏幕内容可能完全不同。ZYRO C403 Max 产品资料标注支持 Betaflight / INAV OSD；具体能显示哪些字段，仍取决于飞控、传感器、接线和设置是否实际可用。</p>

      <figure className="article-product"><img src={sitePath("/products/fpv-osd-data-path.png")} alt="FPV OSD 四步科普图：数据来源进入飞控，生成 OSD 叠加层，再显示在 FPV 画面上" /><figcaption>从左到右的四步路径：①电池、电流、定位与链路提供数据；②飞控汇集可用数据；③生成电压、容量、模式、返航和信号等 OSD 叠加层；④叠加层显示在 FPV 视频画面上。橙色箭头表示供电相关路径，蓝色箭头表示数据与视频路径；图为原创建意图，并非具体设备接线图。</figcaption></figure>

      <h2>四类最值得先看的信息</h2>
      <div className="comparison-grid">
        <section><b>电压</b><h3>快速发现电池状态变化</h3><p>电压是即时读数，能帮助发现明显下跌或异常压降；它会随负载变化，不能孤立地当作剩余容量百分比。</p></section>
        <section><b>电流与已用容量</b><h3>记录“用了多少”</h3><p>若系统接有并正确校准电流传感器，飞控可计算电流和累计 mAh。传感器未校准时，数值可能偏离真实消耗。</p></section>
        <section><b>飞行模式与告警</b><h3>知道当前控制逻辑</h3><p>ARM、FAILSAFE 或模式名称等提示，让操作者确认当前状态；起飞前应先验证显示与预期一致。</p></section>
        <section><b>位置与返航信息</b><h3>需要可靠定位前提</h3><p>卫星数、返航方向和距起点等信息必须建立在定位模块、定位状态和起点设置有效的前提上，不能把图标当成绝对保证。</p></section>
      </div>

      <h2>为什么不能只看一个数字？</h2>
      <p>OSD 的价值在于交叉判断。电压在大油门时会暂时下沉；已用容量依赖电流测量与校准；返航距离和方向依赖定位质量与起点逻辑；链路字段也只反映它所连接的那一段链路。因此，画面上的数字应该帮助建立判断，不应代替起飞前检查、失控保护设置或安全余量。</p>

      <table><thead><tr><th>看到的情况</th><th>不要立刻得出的结论</th><th>更可靠的处理</th></tr></thead><tbody>
        <tr><td>大油门时电压瞬间下降</td><td>“电池一定已经报废”</td><td>同时看负载、单节电压趋势和飞后充入容量，并检查电池与接头。</td></tr>
        <tr><td>已用 mAh 很少或很大</td><td>“容量表一定准确”</td><td>用充电器的回充量对照，按飞控文档校准电流传感器。</td></tr>
        <tr><td>有返航箭头或距离</td><td>“任何时候都能自动安全返航”</td><td>确认定位状态、起点逻辑、救援模式和飞行环境；先在安全条件下测试。</td></tr>
        <tr><td>画面上没有某字段</td><td>“对应功能不存在或已失效”</td><td>先检查 OSD 布局、协议、端口和传感器是否启用，再判断硬件状态。</td></tr>
      </tbody></table>

      <h2>一个实用的最小布局</h2>
      <ol>
        <li><b>先保留安全相关信息。</b>电池电压、飞行模式与必要告警应放在一眼可见但不遮挡飞行路径的位置。</li>
        <li><b>有测量条件再显示消耗量。</b>使用电流或 mAh 前，确认电流计存在并已校准；同时观察电压，不依赖单一读数。</li>
        <li><b>定位字段先验证再信任。</b>需要返航方向或距离时，确认定位已具备可靠的 3D 定位、起点逻辑符合任务，再起飞。</li>
        <li><b>用真实画面复核可读性。</b>在常用的护目镜或显示器上检查字体、位置与亮度，避免重要提醒压在地平线、准星或高反差背景上。</li>
      </ol>

      <div className="takeaway"><b>现场结论</b><p>OSD 的作用不是让画面信息越多越好，而是把当前任务真正需要的状态放在恰当位置。先建立“数据来自哪里、是否已校准、何时才可信”的习惯，才能让一小块叠加信息成为飞行判断的助力。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-c403-max.pdf")} target="_blank" rel="noreferrer">ZYRO C403 Max Product Brief：Betaflight / INAV OSD 支持说明</a><a href="https://betaflight.com/docs/wiki/app/osd-tab" target="_blank" rel="noreferrer">Betaflight：OSD 叠加飞行信息与遥测数据</a><a href="https://betaflight.com/docs/wiki/guides/current/Battery" target="_blank" rel="noreferrer">Betaflight：电流、电量与电流传感器校准</a><a href="https://www.betaflight.com/docs/wiki/app/gps-tab" target="_blank" rel="noreferrer">Betaflight：GPS、起点与距离信息的前提</a></div>
    </ArticleShell>
  );
}
