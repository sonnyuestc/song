import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { ThroughputHeadroomFigure, VideoDataFlowFigure } from "../PrincipleFigures";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "分辨率、帧率和码率有什么区别？｜ZYRO 技术科普",
  description: "从像素、帧周期、H.265 压缩和链路余量，解释高清视频回传为什么不能只看分辨率。",
};

export default function VideoBitrateArticle() {
  return (
    <ArticleShell
      category="视频传输基础"
      title="4K、90 fps 与 Mbps：高清视频回传为什么不能只看分辨率？"
      deck="分辨率决定一帧有多少像素，帧率决定画面多久更新一次，码率才直接决定视频要占用多少链路资源。把三个概念混在一起，选型很容易失真。"
      date="2026.07.23"
      readingTime="约 7 分钟"
    >
      <p className="article-lead">ZYRO Air 支持 3840 × 2160 @ 30 fps 和 1920 × 1080 @ 90 fps，并默认采用 H.265 编码。两种模式分别强调空间细节和运动流畅度，但仅凭“4K”或“90 fps”仍无法判断实际需要多少无线吞吐。</p>

      <h2>先把三个常被混用的参数拆开</h2>
      <VideoDataFlowFigure />
      <div className="comparison-grid">
        <section><b>分辨率</b><h3>一帧有多少采样点</h3><p>4K 画面比 1080p 包含更多像素，更有利于保留远处纹理和后续裁切，但每帧需要处理的原始信息也更多。</p></section>
        <section><b>帧率</b><h3>一秒更新多少次</h3><p>90 fps 的帧周期约 11.1 ms，30 fps 约 33.3 ms。高帧率更适合快速运动和操控反馈，但会增加编码与传输压力。</p></section>
        <section><b>码率</b><h3>压缩后每秒多少比特</h3><p>码率直接占用链路吞吐。它受画面运动、纹理、噪声、编码器设置和目标画质共同影响，并非由分辨率单独决定。</p></section>
      </div>

      <h2>为什么未经压缩的视频如此庞大？</h2>
      <p>用一个便于理解的估算：若 1080p60 视频每个像素暂按 24 bit 表示，完全不压缩时的数据量约为：</p>
      <div className="formula">1920 × 1080 × 24 bit × 60 fps ≈ 2.99 Gbit/s</div>
      <p>这还没有计入接口封装等额外数据。无线链路通常无法直接承载这样的原始视频，因此需要编码器删除人眼不敏感的信息，并利用同一帧内部以及相邻帧之间的重复内容来压缩数据。</p>

      <h2>H.265 做的是“更聪明地表达”，不是让数据消失</h2>
      <p>ITU-T H.265 是面向高效视频压缩的编码标准。编码器可以把相似区域、运动预测和空间结构用更紧凑的方式表达；但压缩强度越高，越可能牺牲细节，编码计算量和缓冲策略也会影响延迟。</p>
      <p>静止、光线充足的巡检画面通常比高速飞行、树叶密集或低照度噪声较多的画面更容易压缩。即使分辨率、帧率和编码格式完全相同，后一类场景的瞬时码率仍可能更高，或者在限定码率下出现更多细节损失。</p>

      <figure className="article-product"><img src={sitePath("/products/air.jpg")} alt="ZYRO Air 一体化数字高清图传产品" /><figcaption>ZYRO Air 将相机、H.265 编码和无线传输集成在约 30 g 的空中端内，支持 4K30 与 1080P90 两种不同取向的视频模式。</figcaption></figure>

      <h2>“最高 100 Mbps”为什么不能等同于“能稳定跑满 100 Mbps”？</h2>
      <p>ZYRO Link 产品资料给出的实测自适应吞吐最高为 100 Mbps。这里的“最高”描述特定条件下的链路能力，不是任意距离、干扰和安装状态下都能持续获得的净视频带宽。</p>
      <ThroughputHeadroomFigure />
      <p>无线速率会随信号质量变化。距离增加、机体遮挡、天线极化不匹配或同频干扰，都可能触发更稳健但更低速的调制方式，并增加重传。多路视频共用链路时，还要把每路峰值码率相加，而不是只比较平均值。</p>

      <h2>怎样为任务选择更合理的视频模式？</h2>
      <div className="numbered-points">
        <section><b>01</b><h3>先看任务需要</h3><p>远距离巡检和取证更重视空间细节，可优先评估 4K；高速 FPV 和快速操控更重视时间细节，可优先评估高帧率。</p></section>
        <section><b>02</b><h3>测峰值，不只看平均</h3><p>用真实运动、纹理和低照度场景测试码率，记录峰值、丢包和画质变化，并同时观察端到端延迟。</p></section>
        <section><b>03</b><h3>用最差链路复测</h3><p>在任务最远距离、典型姿态和真实干扰环境中验证，确保下降后的有效吞吐仍高于业务峰值。</p></section>
      </div>

      <table>
        <thead><tr><th>任务重点</th><th>优先关注</th><th>同时验证</th></tr></thead>
        <tbody>
          <tr><td>远距离细节、放大取证</td><td>分辨率、镜头与编码画质</td><td>码率峰值、存储与解码能力</td></tr>
          <tr><td>高速运动、低延迟操控</td><td>帧率、端到端延迟与抖动</td><td>快速运动下的画质和链路余量</td></tr>
          <tr><td>多路视频同时回传</td><td>总峰值码率与调度策略</td><td>协议开销、中继占用和控制数据</td></tr>
        </tbody>
      </table>

      <div className="takeaway"><b>选型结论</b><p>4K、90 fps 和 H.265 回答的是不同问题。先按任务确定空间细节与运动流畅度，再用真实场景测出编码后峰值码率，最后用最差工况下的可持续有效吞吐验证链路余量。</p></div>

      <div className="article-sources">
        <b>资料来源</b>
        <a href={sitePath("/downloads/zyro-air.pdf")} target="_blank">ZYRO Air Product Brief</a>
        <a href={sitePath("/downloads/zyro-link.pdf")} target="_blank">ZYRO Link Product Brief</a>
        <a href="https://www.itu.int/rec/T-REC-H.265-202601-P/en" target="_blank" rel="noreferrer">ITU-T Recommendation H.265：High efficiency video coding</a>
      </div>
    </ArticleShell>
  );
}
