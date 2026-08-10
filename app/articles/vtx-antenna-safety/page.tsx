import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "图传发射端为什么必须先接天线｜ZYRO 技术科普",
  description: "从阻抗匹配、反射功率到现场检查，理解为什么视频发射端不应在未接妥天线时上电发射。",
};

export default function VtxAntennaSafetyArticle() {
  return (
    <ArticleShell category="模拟图传基础" title="图传发射端为什么必须先接天线？别让功率反射回设备" deck="天线不只是把信号“发出去”的附件。对正在工作的发射端，它还是一个需要匹配的负载：连接、频段或接口出错，都可能让本该辐射到空中的能量反射回来。" date="2026.08.10" readingTime="约 6 分钟">
      <p className="article-lead">装机调试时，最容易被忽略的一步往往是天线。视频发射端一上电就可能进入发射状态；若天线未连接、接头松动，或天线根本不覆盖当前频段，链路不仅会变差，发射端还会承受更多反射功率。正确顺序应当是：先核对并接妥天线，再上电测试。</p>

      <h2>天线是发射端的“负载”，不是装饰件</h2>
      <figure className="article-product"><img src={sitePath("/products/vtx-no-antenna-reflection.png")} alt="未连接天线时，反射射频能量返回视频发射端输出级并引起受热风险的原理图" /><figcaption>原理示意：天线未接、接口松脱或严重失配时，部分射频能量不会被有效辐射，而会反射回输出级。图中红橙色路径表示反射能量与受热风险；实际保护能力和损伤阈值因设备设计而异。</figcaption></figure>

      <p>射频能量从发射端经过同轴线、接头到达天线，理想状态下会被天线有效辐射。这个通路通常按 50 Ω 系统设计；当负载阻抗与传输线不匹配时，一部分入射能量会沿原路反射，在线缆上形成驻波。开路、短路、损坏的馈线或超出频段的天线，都是严重失配的典型来源。</p>
      <p>反射并不只意味着远端画面变差：回到输出级的能量会降低可辐射功率，并增加器件的应力和发热风险。设备是否具备、以及如何实现保护，取决于具体硬件；因此不能把任何发射端都当作可以空载上电的设备。</p>

      <div className="comparison-grid">
        <section><span>匹配状态</span><h3>能量主要送往天线</h3><p>天线、线缆和接头与工作频段相符时，反射较少；发射端的输出功率才有机会有效转化为电磁波。</p></section>
        <section><span>失配状态</span><h3>部分能量折返回来</h3><p>接口虚接、线缆受损或频段不对，都会提高反射。此时即使设备仍能工作，也不应凭画面“还看得到”判断它处于安全状态。</p></section>
        <section><span>VSWR / 回波损耗</span><h3>用来描述反射程度</h3><p>VSWR 越接近 1，通常表示匹配越好；回波损耗越高，代表反射越少。二者都是围绕同一类反射现象的表达方式。</p></section>
        <section><span>输出功率</span><h3>不是天线的替代品</h3><p>提高发射功率不能修复失配，也不能代替正确的频段、接口和安装。先把链路接对，再谈功率档位与覆盖范围。</p></section>
      </div>

      <figure className="article-product"><img src={sitePath("/products/tx3w.jpg")} alt="ZYRO 3W 宽频模拟视频发射模块及其天线接口" /><figcaption>ZYRO 3W VTX 系列提供 4.9–6.1 GHz、6.1–7.2 GHz、7.1–8.2 GHz 三个版本，并有 25 mW、1 W、2 W、3 W 输出档位。选天线时必须以设备实际版本和当前工作频率为准，而不是只看“宽频”或功率数字。</figcaption></figure>

      <h2>“接了天线”仍可能不匹配</h2>
      <ol>
        <li><b>频段不重合。</b>天线的标称范围应覆盖实际中心频率。把仅适用于 5.8 GHz 的天线用于更宽的其他频段，不能默认仍有合适的匹配。</li>
        <li><b>接口看起来能接上，但连接不可靠。</b>确认连接器型号、中心针、螺纹或卡扣到位；频繁弯折的细同轴线尤其要检查是否松脱或压伤。</li>
        <li><b>安装位置改变了天线环境。</b>天线紧贴碳纤维、金属、电池或其他天线时，方向图和匹配都可能变化。装好后应在完整机体状态下做短距离功能检查。</li>
        <li><b>把极化当成阻抗匹配。</b>极化不一致主要会带来链路耦合损失；它与 50 Ω 匹配是不同维度。两者都要检查，不能相互替代。</li>
      </ol>

      <h2>上电前的 60 秒检查清单</h2>
      <table><thead><tr><th>检查项</th><th>要确认什么</th><th>发现问题时</th></tr></thead><tbody>
        <tr><td>设备版本</td><td>VTX 的频段版本与当前频道</td><td>先查产品资料或标签；不要仅按外观判断。</td></tr>
        <tr><td>天线范围</td><td>标称频段覆盖当前频率</td><td>换用对应频段的天线，再上电。</td></tr>
        <tr><td>连接与线缆</td><td>接口类型正确、接头锁紧、馈线无压伤</td><td>停电后重新连接或更换部件。</td></tr>
        <tr><td>安装环境</td><td>天线尽量远离遮挡与挤压，固定牢靠</td><td>调整位置，并在最终装机状态复测。</td></tr>
        <tr><td>发射设置</td><td>频道与功率符合当地规则和任务需要</td><td>从合规的低功率测试开始，确认画面后再评估。</td></tr>
      </tbody></table>

      <div className="takeaway"><b>现场结论</b><p>“先接天线，再上电”不是仪式感，而是对射频输出级最基本的保护。天线的频段、接口、馈线和安装位置都属于同一条射频通路；把它们逐项核对，比盲目提高功率更能帮助图传稳定、也更能降低设备风险。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-tx-49-61.pdf")} target="_blank" rel="noreferrer">ZYRO 3W VTX Product Brief：4.9–6.1 GHz 版本与输出档位</a><a href={sitePath("/downloads/zyro-tx-61-72.pdf")} target="_blank" rel="noreferrer">ZYRO 3W VTX Product Brief：6.1–7.2 GHz 版本</a><a href="https://helpfiles.keysight.com/csg/pxivna/Tutorials/Reflection_Measurements.htm" target="_blank" rel="noreferrer">Keysight：反射功率、失配与 VSWR 基础</a><a href="https://www.ni.com/en/shop/electronic-test-instrumentation/switches/what-are-switches/guide-to-understanding-and-developing-an-rf-switch-network/chapter-4--effects-of-impedance-matching-and-switch-quality-on-r.html" target="_blank" rel="noreferrer">NI：阻抗失配、回波与 VSWR 的关系</a></div>
    </ArticleShell>
  );
}
