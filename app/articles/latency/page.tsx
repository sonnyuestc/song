import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { FrameCadenceFigure, LatencyChainFigure } from "../PrincipleFigures";

export const metadata: Metadata = {
  title: "图传延迟从哪里来？｜ZYRO 技术科普",
  description: "从链路、相机、编码到显示，拆解实时视频系统的端到端延迟。",
};

export default function LatencyArticle() {
  return (
    <ArticleShell
      category="链路科普"
      title="2 ms、35 ms 与一帧画面：图传延迟到底从哪里来？"
      deck="“链路延迟低”不等于“眼睛看到的画面一定快”。真正影响操控感受的是从光线进入相机，到画面出现在屏幕上的全部时间。"
      date="2026.07.13"
      readingTime="约 8 分钟"
    >
      <p className="article-lead">延迟不是一个孤立的数字，而是一帧画面沿整条系统链路累积出来的结果。ZYRO Link 资料中的“典型往返延迟低至 2 ms”与 ZYRO Cam 的“端到端图像延迟低至 35 ms”，测量边界并不相同，不能直接横向比较。</p>

      <h2>先把一帧画面的旅程拆开</h2>
      <p>实时画面通常依次经过五段：相机曝光与读出、图像处理、编码、无线传输、接收端解码与显示。可以用一个简单的加法来理解：</p>
      <div className="formula">T<sub>总</sub> = T<sub>相机</sub> + T<sub>处理</sub> + T<sub>编码</sub> + T<sub>链路</sub> + T<sub>解码显示</sub></div>
      <LatencyChainFigure />
      <p>ZYRO Link 的 2 ms 是网络往返时间的典型值，说明无线数据链路本身响应很快；它不包含相机曝光、H.265 编码和显示器刷新。ZYRO Cam 标注的 35 ms 更接近模拟视频链路的图像路径表现，其中已经包含更多成像环节。</p>

      <h2>帧率决定了最低等待颗粒度</h2>
      <p>视频以帧为单位更新。30 fps 的单帧周期约为 33.3 ms，60 fps 约为 16.7 ms，90 fps 约为 11.1 ms。即使无线链路只花 2 ms，某个处理环节若必须等满一帧，端到端结果仍会增加一个帧周期。</p>
      <FrameCadenceFigure />
      <table>
        <thead><tr><th>视频模式</th><th>单帧周期</th><th>更适合的任务</th></tr></thead>
        <tbody>
          <tr><td>4K30</td><td>约 33.3 ms</td><td>强调细节的观察与记录</td></tr>
          <tr><td>1080p60</td><td>约 16.7 ms</td><td>清晰度与实时性的平衡</td></tr>
          <tr><td>1080p90</td><td>约 11.1 ms</td><td>高速 FPV 与快速操控反馈</td></tr>
        </tbody>
      </table>
      <p>ZYRO Air 支持 4K30 到 1080P90。高帧率模式的价值不仅是“更流畅”，还意味着画面采样和刷新更频繁，降低等待下一帧的平均时间。</p>

      <figure className="article-product"><img src="/products/air.jpg" alt="ZYRO Air 空中图传" /><figcaption>ZYRO Air：相机、H.265 编码和无线传输的一体化空中端。</figcaption></figure>

      <h2>数字与模拟链路，各自把时间花在哪里？</h2>
      <div className="comparison-grid">
        <section><span>数字图传</span><h3>画质、效率与抗干扰</h3><p>数字链路通常需要编码和解码。H.265 能以更低码率提供更高画质，但缓冲策略、编码结构和接收端性能都会影响延迟。优势是分辨率高、链路管理能力强，并可同时承载数据。</p></section>
        <section><span>模拟图传</span><h3>路径短、反馈直接</h3><p>模拟链路无需复杂的视频压缩，路径更直接，适合极度重视操控反馈的场景。代价是画质、抗干扰能力和频谱效率通常不及现代数字方案。</p></section>
      </div>

      <h2>怎样做一次有意义的延迟测试</h2>
      <ol>
        <li><strong>明确测量边界：</strong>是只测网络 RTT，还是测“镜头到屏幕”。</li>
        <li><strong>锁定视频模式：</strong>记录分辨率、帧率、编码格式和码率，避免不同设置混测。</li>
        <li><strong>使用同一时间基准：</strong>让相机同时拍摄计时器与接收屏幕，再逐帧计算差值。</li>
        <li><strong>报告分布而非单次最低值：</strong>至少给出平均值、95% 分位和最差值，抖动往往比最低延迟更影响操控。</li>
      </ol>

      <div className="takeaway"><b>选型结论</b><p>高速 FPV 优先关注完整端到端延迟与抖动；巡检、热成像和多路回传还要同时权衡清晰度、码率、覆盖和抗干扰。不要仅凭一个“ms”数字决定整套系统。</p></div>
    </ArticleShell>
  );
}
