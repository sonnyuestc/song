import type { Metadata } from "next";
import { ArticleShell } from "../ArticleShell";

export const metadata: Metadata = {
  title: "Mesh 自组网为什么适合无人系统？｜ZYRO 技术科普",
  description: "从自动入网、多跳中继到多节点视频访问，解释 Mesh 在复杂任务现场的价值与边界。",
};

export default function MeshArticle() {
  return (
    <ArticleShell
      category="网络原理"
      title="Mesh 自组网为什么适合无人系统与应急现场？"
      deck="当任务从一台飞行器扩展到多台无人车、机器人和分布式摄像头，传统的一对一链路很快会变成覆盖与协同瓶颈。"
      date="2026.07.06"
      readingTime="约 9 分钟"
    >
      <p className="article-lead">Mesh 的核心并不是“设备多”，而是节点之间可以自动建立网络关系，并在需要时通过其他节点转发数据。ZYRO Mesh 采用无固定主从的自组织方式，在线节点可访问网络中其他摄像头的视频流，适合拓扑不断变化的移动任务。</p>

      <h2>一对一链路遇到的三个现场问题</h2>
      <div className="numbered-points">
        <section><b>01</b><h3>遮挡</h3><p>建筑、山体、车辆和地形会切断视距。即使发射功率足够，直接路径仍可能不可用。</p></section>
        <section><b>02</b><h3>覆盖</h3><p>单个基站的位置固定，而机器人或无人车会深入街区、隧道和厂区内部。</p></section>
        <section><b>03</b><h3>协同</h3><p>多台设备若各自建立独立链路，会增加频点规划、地面设备和运维复杂度。</p></section>
      </div>

      <h2>Mesh 如何改变数据路径</h2>
      <p>在 Mesh 网络里，节点可自动加入同一网络；没有固定主从意味着某个节点离线时，系统不必因为“主节点消失”而整体失效。部署在高点或转角处的节点还能承担中继角色，把原本不可直达的区域接回网络。</p>
      <div className="mesh-diagram" aria-label="Mesh 多节点链路示意">
        <div>指挥端</div><span>↔</span><div>中继节点</div><span>↔</span><div>无人车 A</div>
        <i>↘</i><div className="mesh-lower">无人机 B</div><i>↗</i><div className="mesh-lower">摄像头 C</div>
      </div>
      <p>ZYRO Mesh 当前资料标注支持最多 2 跳。这里的“跳”是数据经过中间节点转发的次数，并不等于节点总数。每增加一跳都可能扩大覆盖，但也会消耗无线时隙、增加延迟并降低有效吞吐。</p>

      <figure className="article-product"><img src="/products/mesh.jpg" alt="ZYRO Mesh 无线自组网设备" /><figcaption>ZYRO Mesh：自动入网、无固定主从，支持 Web 配置与拓扑查看。</figcaption></figure>

      <h2>带宽不是平均分配这么简单</h2>
      <p>一条视频流若为 8 Mbps，四个摄像头就需要至少 32 Mbps 的有效吞吐；中继节点还要同时接收和发送，同频转发会继续占用空口时间。因此规划时应为协议开销、链路波动和重传留出余量。</p>
      <div className="formula">所需有效带宽 ≈ 视频码率总和 × 中继负担 × 安全余量</div>
      <p>ZYRO Mesh 提供 1.25M、2.5M、5M、10M、20M 以及 10/20/40M 等带宽选项。更宽的信道有利于吞吐，但更容易遇到干扰，也会提高噪声底；复杂现场不应默认选择最大带宽。</p>

      <h2>四步完成现场网络规划</h2>
      <ol>
        <li><strong>画出任务地图：</strong>标记遮挡、制高点、移动路线和必须保证视频的区域。</li>
        <li><strong>确定业务优先级：</strong>区分控制数据、主视频、辅助视频与非实时文件，优先保障控制和关键画面。</li>
        <li><strong>先做单跳，再加中继：</strong>不要一开始就堆叠多跳；用实测信号、吞吐和丢包决定中继位置。</li>
        <li><strong>统一安全策略：</strong>设置一致的 Mesh ID，并按任务要求启用 AES256；避免沿用默认管理密码。</li>
      </ol>

      <table>
        <thead><tr><th>场景</th><th>推荐拓扑</th><th>重点验证</th></tr></thead>
        <tbody>
          <tr><td>多车协同</td><td>地面节点 + 机动中继</td><td>转弯遮挡、漫游恢复</td></tr>
          <tr><td>应急现场</td><td>快速布点 + 高点中继</td><td>部署时间、频谱干扰</td></tr>
          <tr><td>分布式摄像头</td><td>固定节点 + 共享回传</td><td>总码率、并发访问</td></tr>
        </tbody>
      </table>

      <div className="takeaway"><b>选型结论</b><p>Mesh 解决的是动态覆盖和多节点协同，不会自动消除射频规律。中继位置、信道带宽、视频总码率与天线视距仍然决定最终体验。</p></div>
    </ArticleShell>
  );
}
