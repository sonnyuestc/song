import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "看得到不等于链路通畅：菲涅尔区为什么需要留空｜ZYRO 技术科普",
  description: "从直视路径、菲涅尔区到树梢和屋檐造成的绕射，理解图传链路为什么需要空间净空。",
};

export default function FresnelZoneArticle() {
  return (
    <ArticleShell category="射频基础" title="看得到不等于链路通畅：菲涅尔区为什么需要留空" deck="两端彼此可见，并不代表无线电波拥有一条毫无遮挡的通路。围绕直视线还有一片会参与传播的椭球形空间；树梢、屋檐或山脊进入这片空间时，画面就可能先于“完全遮住”而变差。" date="2026.08.17" readingTime="约 6 分钟">
      <p className="article-lead">在空旷处测试稳定的图传，飞到树线、楼顶边缘或山坡后却突然出现卡顿，常被误判为功率不足。实际上，问题可能发生在两端仍然“看得见”的时候：障碍物侵入了菲涅尔区，额外绕射损耗吃掉了原本的链路余量。</p>

      <h2>直视线只是中间那一条线</h2>
      <p>把发射端和接收端连成一条直线，就是几何意义上的视距（LoS）。无线电波的有效传播并不只沿着这条细线进行，而会在其周围的空间内叠加。第一菲涅尔区可以近似理解为一个两端收窄、中间最宽的椭球体；当这片区域保持较干净时，到达接收端的能量更容易同相叠加。</p>
      <div className="formula">第一菲涅尔区半径 R₁ ≈ √(λ × d₁ × d₂ ÷ (d₁ + d₂))</div>
      <p>式中 λ 是波长，d₁ 和 d₂ 是障碍物到两端的距离。它说明了两件实用的事：频率越低，波长越长，所需的净空通常越大；障碍物位于路径中点附近时，第一菲涅尔区最宽，影响往往也更明显。</p>
      <figure className="article-product"><img src={sitePath("/products/fresnel-clearance.png")} alt="无人机与地面接收端之间的第一菲涅尔区净空示意图，树木位于传播空间之外" /><figcaption>原理示意：直视线周围的蓝色椭球体代表第一菲涅尔区。树木虽然靠近路径，但没有进入主要传播空间，链路更容易保留余量。</figcaption></figure>

      <figure className="article-product"><img src={sitePath("/products/c403.jpg")} alt="ZYRO C403 Max 数字图传空中端与地面端产品图" /><figcaption>ZYRO C403 Max 支持 3–7 GHz 多频段与 36 信道。无论实际采用哪个频道，规划空地链路时都应同时检查直视线和其周围的空间净空，而不是只看两端是否能彼此看见。</figcaption></figure>

      <h2>为什么树梢“没挡住”也会让画面不稳？</h2>
      <p>当树梢、屋檐、护栏或地形边缘进入第一菲涅尔区，部分传播路径会被遮挡或发生绕射。接收端得到的信号会出现额外衰减，并且随位置、姿态和环境变化而波动。对视频链路来说，这意味着可用吞吐可能下降，或者在瞬间没有足够余量维持稳定画面。</p>
      <p>工程规划中常把第一菲涅尔区的大约 60% 作为重要的净空参考。它不是“只要留出 60% 就必然稳定”的保证值；天线方向图、极化、同频干扰、天气、地面反射和设备配置仍然会影响结果，但它能帮助发现那些肉眼不容易察觉的路径风险。</p>
      <figure className="article-product"><img src={sitePath("/products/fresnel-obstruction.png")} alt="左右对比的菲涅尔区示意图，右侧屋顶和树冠侵入传播空间并产生绕射" /><figcaption>对比示意：左侧路径的菲涅尔区较干净；右侧的屋顶与树冠侵入传播空间，橙色弧线表示可能增加的绕射与路径波动。两端可见并不等同于净空充足。</figcaption></figure>

      <div className="comparison-grid">
        <section><span>完全遮挡</span><h3>直视线被挡住</h3><p>建筑、山体或厚密植被挡在两端之间时，通常会产生显著衰减。不要把依靠反射或绕射偶尔收到画面当作稳定覆盖。</p></section>
        <section><span>部分侵入</span><h3>肉眼可见也可能变差</h3><p>障碍物没有跨过中心直线，但已进入菲涅尔区；画面可能随着位置或姿态出现间歇性波动。</p></section>
        <section><span>净空较好</span><h3>为链路留出余量</h3><p>抬高地面站天线、改变起降点或调整航线，往往能同时避开障碍和减少近地反射影响。</p></section>
        <section><span>动态环境</span><h3>把最差位置纳入测试</h3><p>飞行器转弯、下降或掠过屋檐时，路径几何关系会变化；测试不应只在悬停的最佳位置进行。</p></section>
      </div>

      <h2>用一个小例子建立直觉</h2>
      <p>假设一条约 1 km 的图传路径，障碍物恰好位于中点附近。以 5.8 GHz 为例，第一菲涅尔区在该处的半径约为 3.6 m；以 3 GHz 为例，约为 5 m。数值只是理想几何计算，却足以说明：在中远距离任务里，一棵树的树冠、一道屋檐或小幅度的地形起伏，都可能进入原本看不见的传播空间。</p>
      <p>不要把这个例子理解成通用距离承诺。实际可用范围还由发射功率、接收灵敏度、天线、带宽、干扰和当地合规要求共同决定。菲涅尔区回答的是“路径有没有留出足够空间”，不是“这台设备一定能飞多远”。</p>

      <h2>现场怎样把净空检查做成可执行的动作？</h2>
      <figure className="article-product"><img src={sitePath("/products/fresnel-field-check.png")} alt="无人机、山顶地面接收站与地形障碍的菲涅尔区现场检查示意图" /><figcaption>现场规划示意：将地面站置于更开阔的高处，并结合任务航线检查树线、房屋和地形是否侵入路径周围的传播空间。</figcaption></figure>
      <ol>
        <li><b>先画任务轨迹。</b>标出起飞、悬停、转弯、下降和最远作业位置，而不只是起点与终点。</li>
        <li><b>从侧面看路径。</b>重点观察路径中点附近的树线、屋檐、山脊和桥梁；这些位置的菲涅尔区通常更宽。</li>
        <li><b>优先调整高度和地面站位置。</b>小幅抬高地面站天线或移动到更开阔处，往往比直接提高发射功率更有效。</li>
        <li><b>在最差姿态复测。</b>按实际航线飞行，记录画面、链路状态和位置；每次只改一个变量，才知道是哪项改动带来改善。</li>
      </ol>

      <table><thead><tr><th>现场现象</th><th>优先检查</th><th>更稳妥的处理</th></tr></thead><tbody>
        <tr><td>越过屋顶边缘后突然卡顿</td><td>屋檐是否进入路径中段的菲涅尔区</td><td>调整飞行高度或地面站站位，再沿同一路径复测。</td></tr>
        <tr><td>低空稳定、靠近树线就波动</td><td>树冠、枝叶和近地反射造成的路径变化</td><td>绕开树线、增加净空，并保留更大的链路余量。</td></tr>
        <tr><td>两端看得见，远距离仍不稳定</td><td>路径中部净空、天线方向和频点环境</td><td>先排查净空和安装，再评估频道或功率设置。</td></tr>
      </tbody></table>

      <div className="takeaway"><b>现场结论</b><p>“能看见对方”是图传规划的起点，不是终点。把第一菲涅尔区当作需要留出的传播空间，尤其关注路径中部的树梢、屋檐和地形边缘；通过优化站位、高度和航线来获得净空，通常比单纯增加功率更可靠。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-c403-max.pdf")} target="_blank" rel="noreferrer">ZYRO C403 Max Product Brief：3–7 GHz、36 信道与数字图传产品信息</a><a href="https://www.itu.int/rec/R-REC-P.526-16-202511-I/en" target="_blank" rel="noreferrer">ITU-R P.526-16：绕射传播与第一菲涅尔区净空参考</a><a href="https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.525-5-202511-I%21%21PDF-E.pdf" target="_blank" rel="noreferrer">ITU-R P.525-5：自由空间传播基础</a></div>
    </ArticleShell>
  );
}
