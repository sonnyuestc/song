import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { FresnelFigure, LinkBudgetFigure } from "../PrincipleFigures";

export const metadata: Metadata = {
  title: "发射功率不等于传输距离｜ZYRO 技术科普",
  description: "用链路预算理解频率、发射功率、天线增益、接收灵敏度和环境对覆盖距离的共同影响。",
};

export default function LinkBudgetArticle() {
  return (
    <ArticleShell
      category="射频基础"
      title="发射功率不等于传输距离：链路预算的四个关键变量"
      deck="“功率更大，距离就一定更远”只对了一部分。真正决定无线链路能否工作的，是接收端最终还能拿到多少信号余量。"
      date="2026.06.29"
      readingTime="约 8 分钟"
    >
      <p className="article-lead">无线距离从来不是发射功率单独决定的。ZYRO 产品覆盖 3-8.2 GHz，多款设备提供不同功率和天线配置；同样的 dBm 或 W，在不同频率、带宽、天线和环境中，可能得到完全不同的覆盖结果。</p>

      <h2>链路预算是一张“收支表”</h2>
      <p>发射机给出信号功率，天线提供方向性增益；信号在空间传播、线缆和连接器中发生损耗；接收天线再获得一部分增益。简化公式如下：</p>
      <div className="formula">P<sub>接收</sub> = P<sub>发射</sub> + G<sub>发射天线</sub> + G<sub>接收天线</sub> - L<sub>路径</sub> - L<sub>其他</sub></div>
      <LinkBudgetFigure />
      <p>当接收功率高于接收机灵敏度时，链路才有机会稳定工作。两者的差值叫链路余量。工程上必须留出余量，抵抗姿态变化、衰落、干扰、雨雾与安装误差。</p>

      <h2>变量一：发射功率——重要，但收益是对数的</h2>
      <p>功率翻倍只增加约 3 dB。1 W 约为 30 dBm，2 W 约为 33 dBm，3 W 约为 34.8 dBm。把功率从 1 W 提高到 3 W，增加约 4.8 dB，并不是距离自动变成三倍。</p>
      <table>
        <thead><tr><th>功率</th><th>约合 dBm</th><th>相对 1 W 增益</th></tr></thead>
        <tbody><tr><td>25 mW</td><td>14 dBm</td><td>-16 dB</td></tr><tr><td>1 W</td><td>30 dBm</td><td>基准</td></tr><tr><td>2 W</td><td>33 dBm</td><td>+3 dB</td></tr><tr><td>3 W</td><td>34.8 dBm</td><td>+4.8 dB</td></tr></tbody>
      </table>
      <p>ZYRO 3W VTX 系列支持 25 mW、1 W、2 W、3 W 四档，并具备温度保护。高功率需要足够散热且必须先接天线再上电；温度过高时设备会逐级降功率保护射频器件。</p>

      <figure className="article-product"><img src="/products/tx3w.jpg" alt="ZYRO 3W 宽频视频发射模块" /><figcaption>ZYRO 3W VTX 系列覆盖 4.9-6.1、6.1-7.2、7.1-8.2 GHz 三个版本。</figcaption></figure>

      <h2>变量二：频率——越高，空间损耗通常越大</h2>
      <p>在相同距离下，自由空间路径损耗随频率上升而增加。频率从 5 GHz 提高到 8 GHz，理论自由空间损耗约增加 4 dB。更高频段可以提供可用频谱和更小天线等优势，但对遮挡、天线指向和安装细节通常更敏感。</p>
      <FresnelFigure />

      <h2>变量三：天线——把能量送到正确方向</h2>
      <p>全向天线适合移动平台，姿态变化时更容易保持覆盖；定向天线把能量集中到一个方向，可显著提高远距离链路余量。ZYRO Link 的资料同时给出典型全向空地 16 km，以及在定向、低干扰条件下更远的参考能力，差异的关键正是天线与环境。</p>
      <div className="comparison-grid">
        <section><span>空中端</span><h3>覆盖姿态变化</h3><p>重视重量、阻力、极化匹配和机体遮挡。双天线需要保持合理间距，避开电池与碳纤结构。</p></section>
        <section><span>地面端</span><h3>获得方向增益</h3><p>可使用高增益定向天线，但必须保持对准，并验证转台、线缆和连接器带来的额外损耗。</p></section>
      </div>

      <h2>变量四：接收灵敏度、带宽与干扰</h2>
      <p>ZYRO Link 标注最低接收灵敏度为 -92 dBm。灵敏度不是固定不变的魔法数字：调制方式、数据速率与信道带宽都会影响它。降低速率或收窄带宽通常能改善弱信号能力，但会牺牲吞吐。</p>
      <p>真实现场还有同频设备、Wi-Fi、反射多径与非视距遮挡。启动时扫描最佳信道、保持天线视距、合理降低带宽，往往比盲目提高功率更有效。</p>

      <h2>选型前至少记录这 7 项</h2>
      <ol>
        <li>最大任务距离与是否保持视距；</li>
        <li>空中端和地面端天线类型、增益与极化；</li>
        <li>工作频段及当地法规允许的 EIRP；</li>
        <li>视频总码率与必须保证的最低吞吐；</li>
        <li>接收灵敏度对应的速率和带宽条件；</li>
        <li>机体、建筑、树木和地形遮挡；</li>
        <li>期望保留的衰落余量，以及最差姿态下的实测结果。</li>
      </ol>

      <div className="takeaway"><b>选型结论</b><p>远距离链路是系统工程：增加 3 dB 发射功率、增加 3 dB 天线增益或减少 3 dB 线缆损耗，在预算表里具有相同权重；但它们的成本、法规限制和姿态适应性完全不同。</p></div>
    </ArticleShell>
  );
}
