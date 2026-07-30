import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "逆光 FPV 为什么看不清｜ZYRO 技术科普",
  description: "从高反差场景、曝光取舍到 WDR 的边界，理解 FPV 画面为什么会在明暗交界处失去细节。",
};

export default function WdrBacklightArticle() {
  return (
    <ArticleShell category="成像基础" title="逆光 FPV 为什么看不清？WDR 解决的是什么问题" deck="当画面里同时有刺眼天空和阴暗树荫，相机必须在“保住亮处”与“看清暗处”之间取舍。WDR 的任务，是尽量把这两端都留在可用范围内。" date="2026.07.30" readingTime="约 6 分钟">
      <p className="article-lead">从室外飞入棚内、迎着落日穿过建筑边缘，或让镜头同时看到天空与地面时，FPV 画面往往会突然变得难读：亮部一片白，阴影里又没有细节。这通常不是传输距离的问题，而是同一帧画面中的明暗差超过了成像系统一次曝光能舒服容纳的范围。</p>

      <h2>先看症状：相机不是“看不见”，而是在做曝光取舍</h2>
      <p>一次曝光会把落到传感器上的光转换为信号。曝光偏向明亮的天空，暗处得到的信号太少，抬亮后容易显出噪声；曝光偏向阴影，天空、反光金属或灯光又可能达到饱和，细节无法恢复。这个从最暗可用细节到最亮不饱和细节的跨度，通常称为动态范围。</p>
      <p>所以，逆光不只是“画面太亮”。真正棘手的是同一构图里的亮度跨度很大，并且飞行中的机体、树枝、车辆和人还在移动。对操作者而言，更重要的判断是：拐点、障碍物、地面纹理和目标轮廓能否同时被读到。</p>

      <h2>WDR 做什么：让亮处与暗处都有更多可用层次</h2>
      <p>广动态范围（WDR）是一类处理高反差场景的能力，不是单一固定算法。有的实现会使用不同曝光的图像来兼顾亮暗区域；有的传感器则能在单次曝光内扩展可记录的信号范围。两种路径的共同目标，都是减少高光一片死白或阴影一片死黑的情况。</p>
      <div className="comparison-grid">
        <section><b>普通曝光取舍</b><h3>顾亮部或顾暗部</h3><p>当反差过大时，操作者常只能选一端：天空保住了，树荫可能看不清；树荫看清了，天空可能过曝。</p></section>
        <section><b>WDR 输出</b><h3>扩大可用画面区间</h3><p>通过传感器读出与图像处理，尽量同时保留亮部和暗部的层次，让轮廓与环境信息更容易辨认。</p></section>
        <section><b>多曝光方案</b><h3>要注意运动变化</h3><p>把不同曝光画面合成可扩展范围；快速运动或闪烁光源下，若处理不当，可能出现重影、边缘或亮度异常。</p></section>
        <section><b>单次曝光方案</b><h3>减少合成时差</h3><p>部分传感器可在一帧内取得更宽范围，能降低由多帧合成引入的运动伪影；实际效果仍取决于整机实现。</p></section>
      </div>

      <figure className="article-product"><img src={sitePath("/products/cam.jpg")} alt="ZYRO Cam 低延迟模拟 FPV 相机产品图" /><figcaption>ZYRO Cam 产品资料标注 Super WDR、超低照度夜视与低至 35 ms 的端到端图像延迟。WDR 主要帮助处理高反差构图；它不等同于夜视能力，也不能替代合适的曝光、镜头清洁和飞行观察。</figcaption></figure>

      <h2>为什么“开了 WDR”仍可能不好看？</h2>
      <ol>
        <li><b>亮部已经饱和。</b>太阳、反光面或车灯附近若超过系统能记录的上限，细节仍会丢失；WDR 只能改善可处理范围，不能从纯白中凭空找回纹理。</li>
        <li><b>阴影信号本来很弱。</b>把暗部提亮也会把噪声一起提起。低照度、镜头污渍和不合适的增益设置，都会让阴影看起来发灰或有颗粒。</li>
        <li><b>场景在运动。</b>多曝光合成的系统面对快速横移、旋转桨叶或频闪光源，可能出现重影、边缘变化或闪烁。不同相机的算法与工作方式不同，不能仅凭“WDR”标签推断表现。</li>
        <li><b>图传和显示仍是后续环节。</b>相机输出更易读的画面，不代表链路完全不受带宽、干扰、接收端显示亮度或护目镜设置影响。</li>
      </ol>

      <h2>给 FPV 操作者的实用检查</h2>
      <table><thead><tr><th>遇到的画面</th><th>先判断什么</th><th>可尝试的动作</th></tr></thead><tbody>
        <tr><td>迎着天空，地面变黑</td><td>是否是高反差，而非链路掉帧</td><td>开启或调整 WDR，检查曝光补偿与画面模式。</td></tr>
        <tr><td>树荫提亮后颗粒明显</td><td>暗部信号与增益是否不足</td><td>清洁镜头，检查低照度、增益与环境照明；不要只靠后期提亮。</td></tr>
        <tr><td>高速移动时边缘异常</td><td>是否有多帧合成或频闪影响</td><td>换到实际飞行轨迹复测，并记录光源与相机模式。</td></tr>
        <tr><td>画面明暗正常但仍难看清</td><td>显示端亮度、镜头视场和链路状态</td><td>分别检查护目镜/显示器、镜头角度及图传链路。</td></tr>
      </tbody></table>

      <div className="takeaway"><b>现场结论</b><p>把 WDR 看作“扩大高反差场景可读性”的工具更准确：它帮助同时保留更多亮部与暗部线索，但不承诺消除过曝、噪声、运动伪影或后级链路问题。用最常见的逆光进出、明暗交界和真实飞行速度测试，才能判断它是否真正提高了任务画面的可用性。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-cam.pdf")} target="_blank" rel="noreferrer">ZYRO Cam Product Brief：Super WDR、低照度与延迟标注</a><a href="https://www.sony-semicon.com/en/technology/security/index.html" target="_blank" rel="noreferrer">Sony Semiconductor Solutions：STARVIS / HDR 技术说明</a><a href="https://www.sony-semicon.com/en/news/2021/2021062901.html" target="_blank" rel="noreferrer">Sony Semiconductor Solutions：单次曝光与多曝光 HDR 的差异</a></div>
    </ArticleShell>
  );
}
