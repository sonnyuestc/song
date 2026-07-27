import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { PolarizationFigure } from "../PrincipleFigures";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "图传天线为什么会影响画面？｜ZYRO 技术科普",
  description: "从线极化、圆极化、方向图到安装位置，理解图传链路中最容易被忽略的天线检查项。",
};

export default function AntennaPolarizationArticle() {
  return (
    <ArticleShell
      category="射频基础"
      title="图传天线为什么会影响画面？先读懂极化、方向与安装"
      deck="天线不是“装上就有信号”的附件。极化是否匹配、辐射方向是否覆盖任务区域，以及机体是否遮挡，都会改变接收端真正拿到的信号。"
      date="2026.07.27"
      readingTime="约 7 分钟"
    >
      <p className="article-lead">同一台图传设备，地面端把天线转个方向、飞行器侧倾，画面就可能从稳定变成卡顿。问题未必出在发射功率：天线的极化和安装方式，本身就是链路的一部分。</p>

      <h2>天线的“增益”不是凭空增加功率</h2>
      <p>可以把天线理解为把射频能量分配到不同方向的器件。所谓增益，通常表示某个方向上的辐射或接收能力相对参考天线更集中；换来的是其他方向可能变弱。因此，选天线时不能只看 dBi，还要看它的方向图是否覆盖飞行器或作业设备真正会出现的区域。</p>
      <p>这也解释了一个常见现象：静态对准时信号很好，绕到侧方或机身遮住天线后却迅速下降。此时继续提高发射功率未必是首要措施；先确认天线方向、安装高度和机体遮挡，通常更有价值。</p>

      <h2>极化匹配：看不见，却会影响接收功率</h2>
      <PolarizationFigure />
      <p>线极化天线的电场方向可以理解为水平或垂直。两端保持同一方向时，信号耦合更充分；当一端旋转到与另一端接近正交的方向时，接收会明显变弱。无人机滚转、俯仰或手持设备倾斜，都会让这种相对方向发生变化。</p>
      <p>圆极化天线则使用旋向描述，常见为 RHCP（右旋）和 LHCP（左旋）。使用圆极化时，发射端与接收端需要采用相同旋向；把相反旋向混用，并不是“兼容两种天线”，而会带来额外损失。圆极化也不是对反射、遮挡或干扰的万能解法，它仍需要在真实任务场景中验证。</p>

      <figure className="article-product"><img src={sitePath("/products/c403.jpg")} alt="ZYRO C403 Max 数字图传套装及其外接天线" /><figcaption>ZYRO C403 Max 支持 3–7 GHz、1080p60 与 36 信道。为它配置天线时，应先确认实际工作频段、接口和安装空间，再检查两端的极化与朝向。</figcaption></figure>

      <h2>“同频段”之外，还要核对三件事</h2>
      <div className="comparison-grid">
        <section><b>01 / 频段与接口</b><h3>先匹配，再连接</h3><p>确认天线的额定频段覆盖实际工作频率，并核对连接器类型与机械受力方式。外观能拧上，不代表它适合该频段或能承受飞行振动。</p></section>
        <section><b>02 / 极化与方向</b><h3>让两端“说同一种语言”</h3><p>线极化要关注相对角度；圆极化要关注旋向。定向天线还要对准任务方向，并为移动轨迹留出覆盖范围。</p></section>
        <section><b>03 / 安装与遮挡</b><h3>远离碳板和金属遮挡</h3><p>碳纤维、金属、线束和电池都可能改变近场环境或挡住部分方向。把天线压在机架边缘、贴着其他天线，往往会让测试结果失真。</p></section>
        <section><b>04 / 多天线系统</b><h3>别把“多根”当成自动加倍</h3><p>多天线的价值取决于设备射频架构、天线间隔、不同方向覆盖及算法。按产品资料的接口与建议安装，才能让分集或多天线设计发挥作用。</p></section>
      </div>

      <h2>现场排查：从最简单、最可复现的项开始</h2>
      <ol>
        <li><b>统一配置。</b>记录工作频点、带宽和发射设置，避免把频点变化误判成天线问题。</li>
        <li><b>检查匹配。</b>确认两端的线极化方向或圆极化旋向，并检查接口是否拧紧、馈线是否折伤。</li>
        <li><b>做姿态测试。</b>在安全空旷处以相同距离缓慢改变飞行器或终端朝向，观察画面质量和链路状态是否在固定方向变差。</li>
        <li><b>改变安装位置复测。</b>让天线远离遮挡物并保持合理间隔；每次只改变一个变量，才容易找出真正原因。</li>
      </ol>

      <table>
        <thead><tr><th>现象</th><th>优先检查</th><th>不要急着下的结论</th></tr></thead>
        <tbody>
          <tr><td>转弯或侧倾时画面变差</td><td>线极化相对角度、天线方向图、机体遮挡</td><td>“发射功率一定不够”</td></tr>
          <tr><td>更换天线后反而不稳定</td><td>频段覆盖、旋向、接口与馈线状态</td><td>“增益更高一定更远”</td></tr>
          <tr><td>近距离稳定，远距离波动大</td><td>遮挡、反射、任务轨迹和整体链路余量</td><td>“只换一根接收天线就能解决”</td></tr>
        </tbody>
      </table>

      <div className="takeaway"><b>选型结论</b><p>天线是整条图传链路的一部分。先让频段、接口和极化正确匹配，再按任务轨迹选择方向图与安装位置，最后用真实姿态、距离和遮挡场景验证。这样比只比较功率或天线增益更接近实际可用性。</p></div>

      <div className="article-sources">
        <b>资料来源</b>
        <a href={sitePath("/downloads/zyro-c403-max.pdf")} target="_blank">ZYRO C403 Max Product Brief</a>
        <a href="https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.310-10-201908-I%21%21PDF-E.pdf" target="_blank" rel="noreferrer">ITU-R P.310-10：无线电传播术语与极化失配定义</a>
        <a href="https://www.itu.int/dms_pubrec/itu-r/rec/sm/R-REC-SM.1132-2-200107-I%21%21PDF-E.pdf" target="_blank" rel="noreferrer">ITU-R SM.1132-2：正交极化与频谱复用原则</a>
      </div>
    </ArticleShell>
  );
}
