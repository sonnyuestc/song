import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { ThermalResolutionFigure, ThermalSpectrumFigure } from "../PrincipleFigures";

export const metadata: Metadata = {
  title: "热成像为什么能在黑暗中看见？｜ZYRO 技术科普",
  description: "从长波红外、NETD、分辨率和镜头视场四个概念，解释热成像的工作原理与选型方法。",
};

export default function ThermalImagingArticle() {
  return (
    <ArticleShell
      category="热成像基础"
      title="没有可见光，热成像为什么仍能看见？"
      deck="普通相机记录物体反射的可见光，热成像却能在完全黑暗中继续形成画面。它究竟看见了什么？分辨率、NETD 和焦距又分别决定什么？"
      date="2026.07.15"
      readingTime="约 8 分钟"
    >
      <p className="article-lead">热成像不是把夜晚“照亮”，而是把人眼看不见的长波红外辐射转换成图像。ZYRO Thermal Series 使用氧化钒非制冷焦平面探测器，工作波段为 8–14 μm，提供 256×192、384×288 和 640×512 三档分辨率。</p>

      <h2>热成像看的不是颜色，而是辐射差异</h2>
      <p>可见光相机依赖太阳、灯光或补光器。没有光照时，物体几乎没有可见光可以反射，相机自然难以成像。温度高于绝对零度的物体都会发出电磁辐射；在日常温度范围内，很多能量位于人眼不可见的长波红外区域。</p>
      <ThermalSpectrumFigure />
      <p>ZYRO 模组的探测波段是 8–14 μm。探测器接收场景不同位置的红外辐射，红外 ISP 再进行非均匀性校正、亮度与对比度处理，并映射成白热、黑热或其他伪彩画面。画面中的“红、黄、蓝”是显示规则，不是目标本来的颜色。</p>

      <h2>NETD：看出细微温差的能力</h2>
      <p>NETD 的中文常译为“噪声等效温差”。它描述的是温度差异产生的信号与系统噪声相当时，对应的温差量级。数值越低，设备越有机会在低对比场景中分辨细小的热差异。</p>
      <div className="formula">NETD 越低 → 热灵敏度越高 → 低温差场景层次更容易保留</div>
      <p>ZYRO Thermal Series 标注 NETD ≤40 mK，测试条件为 25°C、F/1.0、25 Hz。这里的 40 mK 是约 0.04 K 的温差量级，但它<strong>不是绝对测温精度</strong>。NETD 还会受到镜头 F 数、帧率、环境温度和测量方法影响，因此比较产品时必须同时核对测试条件。</p>

      <h2>红外分辨率：决定画面有多少采样点</h2>
      <p>红外分辨率表示探测器阵列有多少个像元。更多像元意味着同一幅画面可以保留更多空间信息，对远距离小目标、边缘轮廓和后续算法通常更有利。三档 ZYRO 模组均采用 12 μm 像元间距。</p>
      <ThermalResolutionFigure />
      <table>
        <thead><tr><th>型号系列</th><th>红外分辨率</th><th>有效帧率</th><th>无镜头重量</th><th>典型 USB 功耗</th></tr></thead>
        <tbody>
          <tr><td>ZYRO 256</td><td>256×192</td><td>25 / 50 Hz</td><td>&lt;7 g</td><td>&lt;0.35 W</td></tr>
          <tr><td>ZYRO 384</td><td>384×288</td><td>30 / 60 Hz</td><td>&lt;7 g</td><td>&lt;0.42 W</td></tr>
          <tr><td>ZYRO 640</td><td>640×512</td><td>30 / 60 Hz</td><td>&lt;8.6 g</td><td>&lt;0.7 W</td></tr>
        </tbody>
      </table>
      <p>高分辨率并不总是唯一答案。近距离避障、低功耗便携设备和对成本敏感的任务，可能更重视体积、功耗和接口；远距离观察或需要算法识别小目标时，更多像元通常更有价值。</p>

      <figure className="article-product"><img src="/products/thermal.jpg" alt="ZYRO Thermal Series 非制冷红外模组" /><figcaption>ZYRO Thermal Series：21 × 21 × 10.3 mm 无镜头模组，提供 MIPI、DVP、USB2.0 等数字接口。</figcaption></figure>

      <h2>镜头焦距：广角搜索与远距离观察的取舍</h2>
      <p>焦距越短，通常视场越宽，适合大范围搜索；焦距越长，视场越窄，同一目标在画面中占据更多像素，更适合观察远处细节。以 ZYRO 640 为例：</p>
      <table>
        <thead><tr><th>镜头</th><th>视场角</th><th>更典型的用途</th><th>手册中的探测距离估算</th></tr></thead>
        <tbody>
          <tr><td>9.1 mm F/1.0</td><td>48.0° × 38.4°</td><td>广域搜索、近距离态势感知</td><td>约 1.1 km</td></tr>
          <tr><td>25 mm F/1.0</td><td>17.5° × 14.0°</td><td>搜索范围与目标细节的平衡</td><td>约 2.8 km</td></tr>
          <tr><td>55 mm F/1.0</td><td>8.0° × 6.4°</td><td>窄视场远距离观察</td><td>约 6.1 km</td></tr>
        </tbody>
      </table>
      <p>这些距离依据 Johnson 准则和 1.8 × 0.5 × 0.3 m 行人目标估算，只表示特定判据下的“探测”参考，不等于看清身份，也不是现场保证值。天气、目标温差、抖动、对焦和显示算法都会改变实际结果。</p>

      <h2>无挡片算法为什么适合移动平台</h2>
      <p>红外探测器的像元响应并不完全一致，需要非均匀性校正。传统方案可能定期用机械挡片建立参考，校正瞬间画面会短暂停顿。ZYRO Thermal Series 支持无挡片算法校正，目标是减少机械挡片动作造成的中断，让无人机、机器人和移动终端获得更连续的画面。</p>
      <div className="numbered-points">
        <section><b>01</b><h3>先定目标大小</h3><p>明确要发现的是人员、车辆、热点还是细小部件，以及目标在最远距离需要占据多少像素。</p></section>
        <section><b>02</b><h3>再定搜索范围</h3><p>广域搜索优先宽视场，远距离细节优先长焦；不能只比较“最远距离”。</p></section>
        <section><b>03</b><h3>验证整机条件</h3><p>把抖动、窗口材料、镜头 F 数、接口带宽、功耗和环境温度一起纳入测试。</p></section>
      </div>

      <div className="takeaway"><b>选型结论</b><p>热成像能在黑暗中工作，是因为它观察 8–14 μm 长波红外辐射，而不是依赖可见光。选型时应把 NETD、红外分辨率、焦距视场和整机集成条件放在一起判断；任何单一参数都不能独立回答“能不能看清”。</p></div>

      <div className="article-sources">
        <b>资料来源</b>
        <a href="/downloads/zyro-thermal.pdf" target="_blank">ZYRO Thermal Series Product Manual V2.0</a>
        <a href="https://www.flir.com/discover/professional-tools/thermal-camera-specs-you-should-know-before-buying/" target="_blank" rel="noreferrer">FLIR：Thermal Camera Specs You Should Know Before Buying</a>
        <a href="https://oem.flir.com/learn/discover/choosing-the-right-thermal-imager-for-your-integrated-project/" target="_blank" rel="noreferrer">FLIR OEM：Choosing the Right Thermal Imager</a>
      </div>
    </ArticleShell>
  );
}
