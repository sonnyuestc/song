import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "模拟图传怎么选频？｜ZYRO 技术科普",
  description: "从频段、频道、带宽与现场规划出发，建立一套安全、可复现的模拟图传选频方法。",
};

export default function AnalogFrequencyPlanningArticle() {
  return (
    <ArticleShell
      category="模拟图传基础"
      title="模拟图传怎么选频？先分清频段、频道与干扰间隔"
      deck="“都是 5.8 GHz”不代表可以任意同时使用。先看设备覆盖的频段，再把频道、实际中心频率、带宽和现场环境放在同一张规划表里，画面才更容易稳定。"
      date="2026.07.27"
      readingTime="约 7 分钟"
    >
      <p className="article-lead">模拟图传常被称作“调一个频道就能飞”，但多人同场、设备型号不同或周围无线设备较多时，频道设置很容易变成画面雪花、条纹或突然断续的来源。选频的第一步不是记频道编号，而是确认每台设备实际工作在哪个频率。</p>

      <h2>频段、频道和频率：三个词分别在说什么？</h2>
      <p><b>频段</b>是设备可以工作的较大频率范围，例如常说的 5.8 GHz；<b>频道</b>是设备菜单中预设的一个位置；<b>中心频率</b>则是该频道实际对应的无线电频率。不同品牌或协议的频道表可能使用相同编号，却不一定对应同一个中心频率，所以跨设备配对时应以 MHz 数值为准，而不是只看 “CH 1” 或 “A1”。</p>
      <p>以 ZYRO Air Analog 为例，产品资料标注其工作在 5.8 GHz、支持 48 个频道及多档发射功率。这里的“48 个频道”表示设备提供多个可选中心频率，并不意味着 48 路都能在同一地点无条件同时使用；是否能共存还取决于每路信号占用的带宽、滤波能力、天线隔离和周边干扰。</p>

      <figure className="article-product"><img src={sitePath("/products/air-analog.jpg")} alt="ZYRO Air Analog 5.8 GHz 模拟图传发射设备" /><figcaption>ZYRO Air Analog：产品资料标注 5.8 GHz、48CH 和最高 2.5 W 发射功率。实际使用时，应在设备支持范围内选择频道，并遵守当地关于频率与发射功率的规定。</figcaption></figure>

      <h2>为什么“没选同一个频道”仍可能互相干扰？</h2>
      <p>模拟视频不是一根无限细的线。发射信号会在中心频率周围占据一定频谱，接收机也有有限的选择能力。两台设备的中心频率即使不同，只要间隔太近、其中一台功率很高、天线距离很近，或者接收端前端被强信号压制，仍可能让另一台画面变差。</p>
      <div className="comparison-grid">
        <section><b>01 / 先看频率</b><h3>用 MHz 建表</h3><p>把每台发射机的实际中心频率写下来。频道名称可以辅助操作，但不应替代频率记录。</p></section>
        <section><b>02 / 留出间隔</b><h3>不要只避开同号频道</h3><p>按设备说明书和现场测试选择间隔较大的频道组合。可用间隔会随设备、带宽和环境变化，不存在一张适用于所有器材的万能表。</p></section>
        <section><b>03 / 控制近场强信号</b><h3>功率不是越高越好</h3><p>同场近距离起飞时，高功率发射机更可能压制邻近接收机。先满足任务距离，再使用当地允许且必要的最低功率。</p></section>
        <section><b>04 / 分开天线</b><h3>给接收端留空间</h3><p>发射天线与其他接收天线过近，会增加近场耦合风险。合理拉开距离、避免金属或碳板遮挡，并在最终安装状态下复测。</p></section>
      </div>

      <h2>一套适合普通用户的现场选频流程</h2>
      <ol>
        <li><b>确认合规边界。</b>查询作业地的无线电管理要求、允许频段和功率限制；活动主办方或场地也可能有额外规则。不要把设备可设置的范围误认为都可以自由使用。</li>
        <li><b>读取每台设备的频率表。</b>确认发射机和接收机都支持同一中心频率，再记录对应的频道名称，避免到现场才发现“同一个频道号”无法对上。</li>
        <li><b>从间隔最大的组合开始。</b>多人使用时，先把中心频率分散开；由一人统一记录和确认，避免临时改频造成冲突。</li>
        <li><b>在最终布局下逐台上电测试。</b>先测试单机，再逐台加入其他发射机，观察每一路画面。发现问题时一次只改变一个变量，例如频道、功率或天线位置。</li>
        <li><b>为临时变化留出流程。</b>若需要换机或换频，通知所有相关人员并更新频率表；不要在他人正在使用的频点附近盲目试发。</li>
      </ol>

      <h2>常见误区：频道多，不等于现场容量大</h2>
      <table>
        <thead><tr><th>常见说法</th><th>更准确的理解</th><th>现场动作</th></tr></thead>
        <tbody>
          <tr><td>“频道号不同就不会冲突”</td><td>要比较实际中心频率、信号带宽与接收机抗干扰能力。</td><td>用 MHz 记录并留出间隔。</td></tr>
          <tr><td>“功率越高越稳定”</td><td>功率只能改善部分链路余量，也可能加重对邻近设备的影响。</td><td>从满足任务的最低合规功率开始测试。</td></tr>
          <tr><td>“起飞前有画面就够了”</td><td>多机同时上电、姿态变化与距离拉开后，干扰关系会不同。</td><td>按最终天线位置和多机状态做复测。</td></tr>
        </tbody>
      </table>

      <div className="takeaway"><b>选频结论</b><p>模拟图传选频的核心是：以实际中心频率而不是频道名为准，在合规范围内为相邻信号留出间隔，并在最终安装和多机同时上电的状态下验证。把这些步骤记录下来，比临场反复试频道更快，也更安全。</p></div>

      <div className="article-sources">
        <b>资料来源</b>
        <a href={sitePath("/downloads/zyro-air-analog.pdf")} target="_blank">ZYRO Air Analog Product Brief</a>
        <a href={sitePath("/downloads/zyro-tx-49-61.pdf")} target="_blank">ZYRO 3W VTX 4.9–6.1 GHz Product Brief</a>
        <a href="https://www.itu.int/rec/R-REC-SM.1046/en" target="_blank" rel="noreferrer">ITU-R SM.1046：频率管理与频谱使用相关术语</a>
      </div>
    </ArticleShell>
  );
}
