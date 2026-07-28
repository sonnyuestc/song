import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "双天线图传不是距离翻倍｜ZYRO 技术科普",
  description: "从多径衰落、空间分集到安装检查，理解双天线图传在真实场景中解决的是什么问题。",
};

export default function AntennaDiversityArticle() {
  return (
    <ArticleShell category="射频基础" title="双天线图传不是距离翻倍：分集接收到底在解决什么？" deck="两根天线的价值通常不是把信号“加倍”，而是让接收端在反射、遮挡和姿态变化时，多一个不处在深衰落中的接收机会。" date="2026.07.28" readingTime="约 6 分钟">
      <p className="article-lead">设备上出现两根或多根天线，很容易让人联想到“更远”。但无线链路里更常见的难题是：某个位置、某个姿态下，反射路径恰好与直达路径抵消，画面突然变差。分集接收试图降低这种单点失效的概率，而不是承诺固定倍数的距离提升。</p>

      <h2>先理解：为什么空旷处也会突然掉信号？</h2>
      <p>无线电波会被地面、墙面、金属结构、车辆和人体反射或散射。接收端拿到的并非一条单独路径，而是多条到达时间、相位和强度不同的信号叠加。当其中一些分量相互抵消时，就会形成衰落。移动几厘米、转一个角度，或者让机体挡住天线，都可能改变这个叠加结果。</p>
      <p>这也是为什么“近距离测试正常”并不能完全代表飞行或移动作业时的稳定性：动态环境里，最差的位置和最差的姿态往往才决定体验。</p>

      <h2>分集不是把两根天线的 dBi 简单相加</h2>
      <p>空间分集的基本思路是让两副天线从略有不同的位置观察同一条链路。如果两路信号的衰落不完全同步，接收机便可以选择当下较好的一路，或按设备架构对多路信号进行合成。它提升的是在变化环境里维持可用信号的机会，并不等于发射功率翻倍，也不等于任何场景都能得到两倍距离。</p>
      <div className="comparison-grid">
        <section><b>单天线</b><h3>一个观察位置</h3><p>某个位置遇到深衰落时，系统只能承受或等待环境变化。天线方向、遮挡和反射会直接反映为画面波动。</p></section>
        <section><b>选择分集</b><h3>从较好的一路接收</h3><p>接收端根据当前信号质量，在不同天线路径之间选择。优势在于降低两路同时落入衰落的概率。</p></section>
        <section><b>合成或多流架构</b><h3>取决于设备设计</h3><p>有些系统可对多路信号进行处理；是否属于此类架构、如何工作，应以具体产品资料为准，不能仅凭天线数量判断。</p></section>
        <section><b>共同前提</b><h3>两路不能“看见完全一样的环境”</h3><p>天线间距、摆放方向和周边遮挡会影响相关性。两根天线挤在一起、同时被碳板遮住，分集价值会被削弱。</p></section>
      </div>

      <figure className="article-product"><img src={sitePath("/products/c403.jpg")} alt="ZYRO C403 Max 数字图传套装、接收端与外接天线" /><figcaption>ZYRO C403 Max 产品资料列出 4 个 IPEX 天线接口，并配有覆盖 3–5 GHz 与 5–7 GHz 的 LHCP 天线。安装前应按设备说明书核对频段、接口和旋向；天线数量本身不能说明接收算法或实际覆盖距离。</figcaption></figure>

      <h2>两根天线怎样摆，才不浪费它们？</h2>
      <ol>
        <li><b>先保证每一根都“正确”。</b>确认实际工作频率落在天线额定范围内，接口牢靠，圆极化天线的旋向一致。不要在未接天线时给发射端上电。</li>
        <li><b>给不同路径一点空间差异。</b>依据设备手册和安装空间，让天线保持合理间隔与不同的可视方向；不要把两根天线一起压在金属或碳纤维边缘。</li>
        <li><b>看任务轨迹，而非静态照片。</b>地面站若使用定向天线，应让主波束覆盖活动区域；移动端则应检查转弯、侧倾、俯仰时是否有天线被机体、电池或人体遮挡。</li>
        <li><b>一次只改一个变量复测。</b>固定频点、带宽、发射设置和测试距离，分别改变天线位置或朝向，并记录画面、链路状态与异常出现的姿态。</li>
      </ol>

      <h2>常见误解：多天线能替代哪些工作，不能替代哪些？</h2>
      <table><thead><tr><th>常见说法</th><th>更准确的理解</th><th>仍需做的检查</th></tr></thead><tbody>
        <tr><td>“双天线一定更远”</td><td>分集主要降低衰落风险；距离还受功率、频率、带宽、环境和灵敏度影响。</td><td>确认整条链路预算与现场遮挡。</td></tr>
        <tr><td>“装两根就不用管方向”</td><td>天线方向图和机体遮挡依然存在，分集不是全向覆盖的替代品。</td><td>按任务轨迹检查安装位置。</td></tr>
        <tr><td>“看到两个接口就是 MIMO”</td><td>接口数量不能定义无线架构；选择、合成和多流传输是不同概念。</td><td>以具体设备的公开规格和说明为准。</td></tr>
      </tbody></table>

      <div className="takeaway"><b>现场结论</b><p>把双天线理解为“抗偶发衰落的保险”，比理解为“距离倍增器”更接近工程现实。先让每根天线的频段、接口和旋向正确，再让它们尽量避开共同遮挡，并用真实移动轨迹验证，才能判断多天线配置是否真正改善了任务链路。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-c403-max.pdf")} target="_blank" rel="noreferrer">ZYRO C403 Max User Guide：天线接口、频段与天线规格</a><a href="https://www.ti.com/lit/an/swra469/swra469.pdf" target="_blank" rel="noreferrer">Texas Instruments, Antenna Diversity：多径衰落与选择分集</a><a href="https://www.itu.int/dms_pub/itu-r/opb/rep/r-rep-m.2038-2004-pdf-e.pdf" target="_blank" rel="noreferrer">ITU-R M.2038：空间分集、切换分集与合成分集</a></div>
    </ArticleShell>
  );
}
