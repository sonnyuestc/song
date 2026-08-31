import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "广角看得多，为什么边缘会变形？｜ZYRO 技术科普",
  description: "从视场角、焦距、传感器到桶形畸变，理解 FPV 相机的广角画面该怎样判断和使用。",
};

export default function FovAndDistortionArticle() {
  return (
    <ArticleShell category="成像基础" title="广角看得多，为什么边缘会变形？读懂 FOV 与镜头畸变" deck="广角镜头能把更多环境放进一帧，却不会让每个方向的细节都变大。先分清视场角、边缘变形与画面可读性，才能为飞行和观察选择合适构图。" date="2026.08.31" readingTime="约 6 分钟">
      <p className="article-lead">FPV 画面里常见一种矛盾：换上广角后，路口、树梢和侧方障碍都更容易进入画面；但远处目标显得更小，画面边缘的直线也可能向外弯。它们并不相互矛盾，而是同一套光学取舍的结果。</p>

      <h2>FOV 说的是“看多宽”，不是“看多清”</h2>
      <p>FOV（Field of View，视场角）描述相机在一个方向上能覆盖的角度。相同安装位置下，角度更大，画面容纳的环境通常更多；但同一传感器上的像素也要分给更大的场景范围，因此远处的门洞、线缆或目标轮廓未必更大、更容易辨认。</p>
      <p>视场角不是镜头单独决定的。镜头焦距、传感器有效尺寸和成像比例会共同影响它：同一焦距配更大的传感器，会利用到更大的像面，从而得到更大的视场；焦距变短，视场一般也会变大。产品标签上的“广角”因此只能作为起点，不能直接拿来比较所有相机的细节能力。</p>

      <div className="comparison-grid">
        <section><b>更宽的 FOV</b><h3>环境线索更多</h3><p>起降、穿越和近距离避障时，操作者更容易同时看到两侧边界、转弯方向与临近障碍。</p></section>
        <section><b>更窄的 FOV</b><h3>目标占画面更大</h3><p>在相同传感器与分辨率下，远处物体通常覆盖更多像素；但侧方和近处的环境线索会减少。</p></section>
        <section><b>像素与清晰度</b><h3>仍是另一件事</h3><p>分辨率、对焦、曝光、镜头洁净度、传输和显示都会影响可读性，FOV 本身不等于清晰度等级。</p></section>
      </div>

      <figure className="article-product"><img src={sitePath("/products/cam.jpg")} alt="ZYRO Cam 低延迟模拟 FPV 相机产品图" /><figcaption>ZYRO Cam 产品资料标注 125° FOV。它表示该相机的视野范围；实际飞行中的可读性还取决于安装角度、画幅、相机设置、显示设备和环境光线。</figcaption></figure>

      <h2>为什么广角画面边缘会“弯”？</h2>
      <p>镜头畸变是放大倍率随画面位置改变造成的几何偏移。常见的桶形畸变会让靠近边缘的直线看起来向外鼓，类似鱼眼感；枕形畸变则相反，边缘像被向内拉。广角、短焦镜头更容易面对这项设计取舍，但不能只凭广角就断定畸变一定严重，具体程度仍取决于镜头设计和相机校正。</p>
      <p>畸变不必然代表画面“坏了”。在飞行观察中，适度的广角能带来更完整的周边信息；但若要依据画面测量尺寸、拼接地图，或把边缘直线当成精确几何参考，就应确认相机是否提供校正，并用实际任务画面验证。</p>

      <h2>别把镜头畸变、透视和安装角度混在一起</h2>
      <table><thead><tr><th>看到的现象</th><th>可能原因</th><th>先做什么</th></tr></thead><tbody>
        <tr><td>画面边缘的栏杆或地平线弯曲</td><td>镜头几何畸变</td><td>用直线场景观察中心与边缘；需要测量时确认校正流程。</td></tr>
        <tr><td>近处物体很大、远处物体很小</td><td>拍摄距离带来的透视关系</td><td>改变机位距离再比较，不要误判为镜头损坏。</td></tr>
        <tr><td>飞行时总觉得俯仰角不直观</td><td>相机上仰角与视场共同作用</td><td>在安全场地逐步调整安装角，记录巡航姿态下的地面与天空比例。</td></tr>
        <tr><td>边缘细节总是难辨认</td><td>对焦、脏污、边缘像质、曝光或显示问题</td><td>先清洁镜头并检查对焦、曝光和显示端，再评价 FOV 是否合适。</td></tr>
      </tbody></table>

      <h2>一套更实用的选用方法</h2>
      <ol>
        <li><b>从任务问起。</b>需要看清近侧路径、门框和临近障碍时，优先确认周边覆盖；需要识别更远处的小目标时，别只追求更大角度。</li>
        <li><b>用真实速度测试。</b>静止画面里“看得很广”不代表飞行中好读。按常用速度经过明暗交界、转弯和障碍边缘，检查重要线索是否始终在可用位置。</li>
        <li><b>把安装角一并调。</b>镜头再合适，若构图总是把有效区域给了天空或机身，也会降低任务画面的价值。每次只改一个变量，更容易找到原因。</li>
        <li><b>需要几何准确时单独验证。</b>用于测量、定位或拼接的画面，应使用已知尺寸或直线目标检查畸变与校正后的结果；不能把普通 FPV 预览直接当成测量工具。</li>
      </ol>

      <div className="takeaway"><b>现场结论</b><p>广角 FOV 的价值是把更多环境信息放入画面，而不是把一切都放大或变清楚。把视场角、边缘畸变、安装角和显示效果分开检查，才能判断一套 FPV 画面究竟是在帮助判断，还是在增加视觉负担。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-cam.pdf")} target="_blank" rel="noreferrer">ZYRO Cam Product Brief：125° FOV、低延迟模拟 FPV 相机资料</a><a href="https://www.edmundoptics.com/knowledge-center/application-notes/imaging/understanding-focal-length-and-field-of-view/" target="_blank" rel="noreferrer">Edmund Optics：焦距、传感器尺寸与视场角关系</a><a href="https://www.edmundoptics.com/knowledge-center/application-notes/imaging/distortion/" target="_blank" rel="noreferrer">Edmund Optics：桶形与枕形畸变的定义和影响</a></div>
    </ArticleShell>
  );
}
