import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";
import { sitePath } from "../../site-path";

export const metadata: Metadata = {
  title: "快速横移时画面为什么会倾斜？｜ZYRO 技术科普",
  description: "从逐行曝光、相对运动到画面倾斜，读懂滚动快门如何影响 FPV 画面，以及哪些方法真正有用。",
};

export default function RollingShutterArticle() {
  return (
    <ArticleShell category="成像基础" title="快速横移时画面为什么会倾斜？读懂滚动快门" deck="快速横移、急转或拍到高速旋转物时，原本垂直的线条有时会变斜。这通常不是无线链路把画面“拉歪”，而是传感器逐行记录与场景运动在同一段时间里叠加的结果。" date="2026.09.07" readingTime="约 6 分钟">
      <p className="article-lead">当无人机快速侧移时，路灯杆、楼宇边缘或地平线可能看起来像被斜着推了一下。理解这个现象的第一步，是把“一帧画面”从一张瞬间照片，改看成传感器在短时间内按行收集的一组数据。</p>

      <h2>一帧画面，不一定在同一时刻完成</h2>
      <p>滚动快门（rolling shutter）是 CMOS 图像传感器的一种逐行曝光或读出方式：画面上方与下方的像素行并非在完全相同的时刻开始记录。若相机或被摄物体在这段行间时间内明显移动，传感器把各行拼成一帧时，就会把不同瞬间的位置一起保留下来。</p>
      <p>这解释了两个常见现象：横向快速移动时，垂直线可能倾斜；高速转动的桨叶、轮子或螺旋桨，可能弯曲、断裂或出现不符合真实形状的轮廓。它属于成像时序造成的运动伪影，不等同于镜头畸变、对焦问题，也不等同于图传丢帧。</p>

      <figure className="article-product"><img src={sitePath("/products/rolling-shutter-scan.png")} alt="滚动快门原理图：无人机横移时，传感器从上到下逐行扫描，最终画面中的路灯杆和建筑边缘呈倾斜状态" /><figcaption>原创科普原理图：传感器从上到下依次记录各行，扫描过程中无人机继续横移；右侧重组画面将不同时间位置合并，所以本来垂直的路灯杆和建筑边缘会呈倾斜。蓝色扫描带表示当前记录的像素行，橙色箭头表示运动方向。</figcaption></figure>

      <h2>它为什么在 FPV 画面里更容易被注意到？</h2>
      <p>效果大小取决于“场景在扫描期间移动了多少”，而不是只取决于飞行速度。贴近建筑、树枝或电线杆快速横移时，近处目标的视角变化更快，倾斜更显眼；大幅度偏航、机体振动，或画面中存在高速旋转物，也会放大这种时序差异。远处缓慢变化的地平线，往往不那么明显。</p>
      <p>帧率和曝光时间会影响画面的整体观感，但不能把“更高帧率”简单理解为一定消除滚动快门。关键还包括传感器从第一行到最后一行的时序、读出模式、相对运动速度、镜头视场以及后续防抖或裁切。不同相机的实现差异很大，需以具体资料和实拍测试为准。</p>

      <h2>别把三种问题混在一起</h2>
      <table><thead><tr><th>看到的画面</th><th>更可能的原因</th><th>优先检查</th></tr></thead><tbody>
        <tr><td>直杆在快速侧移时整体倾斜</td><td>逐行记录遇到横向相对运动</td><td>横移速度、偏航动作、目标距离与相机读出特性</td></tr>
        <tr><td>广角画面边缘长期向外鼓起</td><td>镜头桶形畸变或校正设置</td><td>FOV、镜头校正与安装角度</td></tr>
        <tr><td>整帧突然马赛克、停顿或跳变</td><td>编码、传输或接收链路波动</td><td>信号、码率、天线与接收端状态</td></tr>
      </tbody></table>

      <h2>现场怎样减少影响？</h2>
      <ol>
        <li><b>把机位和航线一起考虑。</b>贴近竖直结构时，预留距离并降低横移或急偏航速度；同样的速度，在近景里的角速度更大。</li>
        <li><b>优先让机体与云台更稳。</b>检查桨叶、机架、减震与相机固定，避免振动让每一行都在记录不同姿态。后期电子防抖可以改善观感，但不是传感器同步曝光的替代品。</li>
        <li><b>按任务选择相机，而非只看分辨率。</b>涉及高速目标识别、精确测量或读码时，应确认是否需要全局快门（global shutter）或更合适的读出性能。全局快门会让像素在同一时刻采样，能避免这类由行间时间差引起的几何变形，但仍可能出现普通运动模糊。</li>
        <li><b>用可复现动作做实拍测试。</b>对着栅栏、路灯或棋盘格，以预期的距离和动作拍摄；不要只在静止画面中判断相机是否适合动态任务。</li>
      </ol>

      <div className="takeaway"><b>现场结论</b><p>滚动快门不是“坏相机”的同义词，而是一种需要理解其边界的成像时序。先分清画面倾斜来自逐行采样，还是镜头、振动或无线链路；再依据任务速度、距离和判读要求选择动作策略与相机规格，才能避免把不同问题用同一种办法处理。</p></div>
      <div className="article-sources"><b>资料来源</b><a href={sitePath("/downloads/zyro-cam.pdf")} target="_blank" rel="noreferrer">ZYRO Cam Product Brief：低延迟模拟 FPV 相机产品资料</a><a href="https://www.sony-semicon.com/en/technology/industry/rolling-shutter.html" target="_blank" rel="noreferrer">Sony Semiconductor Solutions：Rolling Shutter Technology</a><a href="https://docs.baslerweb.com/electronic-shutter-types" target="_blank" rel="noreferrer">Basler：电子快门类型与滚动快门运动失真</a><a href="https://www.onsemi.com/company/newsroom/blog/industrial/choosing-image-sensors-for-machine-vision-systems" target="_blank" rel="noreferrer">onsemi：滚动快门与全局快门的运动伪影差异</a></div>
    </ArticleShell>
  );
}
