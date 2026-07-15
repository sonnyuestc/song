export function LatencyChainFigure() {
  return (
    <figure className="principle-figure latency-chain" aria-labelledby="latency-chain-caption">
      <div className="figure-heading"><span>原理图 01</span><b>一帧画面的端到端旅程</b></div>
      <div className="signal-flow">
        <div className="flow-node"><i>01</i><strong>光线 / 传感器</strong><small>曝光、逐行读出</small></div>
        <em>→</em>
        <div className="flow-node"><i>02</i><strong>ISP 处理</strong><small>去噪、色彩、缩放</small></div>
        <em>→</em>
        <div className="flow-node accent"><i>03</i><strong>视频编码</strong><small>压缩、缓存、成帧</small></div>
        <em>→</em>
        <div className="flow-node radio"><i>04</i><strong>无线链路</strong><small>排队、发送、重传</small></div>
        <em>→</em>
        <div className="flow-node"><i>05</i><strong>解码 / 显示</strong><small>解码、刷新、呈现</small></div>
      </div>
      <div className="figure-note"><span className="dot radio-dot" />链路 RTT 只描述蓝色环节 <span className="dot total-dot" />端到端延迟包含全部环节</div>
      <figcaption id="latency-chain-caption">“2 ms 链路延迟”和“35 ms 图像延迟”测量边界不同。比较参数之前，先确认计时从哪里开始、在哪里结束。</figcaption>
    </figure>
  );
}

export function FrameCadenceFigure() {
  return (
    <figure className="principle-figure cadence-figure" aria-labelledby="cadence-caption">
      <div className="figure-heading"><span>原理图 02</span><b>同样 100 ms，可以容纳多少次画面更新？</b></div>
      <div className="cadence-row"><strong>30 fps</strong><div>{Array.from({ length: 3 }, (_, i) => <i key={i} />)}</div><span>33.3 ms / 帧</span></div>
      <div className="cadence-row"><strong>60 fps</strong><div>{Array.from({ length: 6 }, (_, i) => <i key={i} />)}</div><span>16.7 ms / 帧</span></div>
      <div className="cadence-row"><strong>90 fps</strong><div>{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div><span>11.1 ms / 帧</span></div>
      <figcaption id="cadence-caption">帧率越高，系统等待下一帧的时间颗粒度越小；但码率、处理负载和无线吞吐也会随之增加。</figcaption>
    </figure>
  );
}

export function MeshTopologyFigure() {
  return (
    <figure className="principle-figure mesh-topology" aria-labelledby="mesh-topology-caption">
      <div className="figure-heading"><span>原理图 01</span><b>节点之间没有固定主从，数据按可用路径转发</b></div>
      <div className="topology-stage">
        <span className="topology-link link-a" /><span className="topology-link link-b" /><span className="topology-link link-c" /><span className="topology-link link-d" /><span className="topology-link link-e" />
        <div className="topology-node command"><i>控制</i><strong>指挥端</strong><small>汇聚视频与控制数据</small></div>
        <div className="topology-node relay"><i>中继</i><strong>高点节点</strong><small>跨越建筑遮挡</small></div>
        <div className="topology-node vehicle"><i>移动</i><strong>无人车 A</strong><small>街区内部作业</small></div>
        <div className="topology-node drone"><i>移动</i><strong>无人机 B</strong><small>保持空中视距</small></div>
        <div className="topology-node camera"><i>固定</i><strong>摄像头 C</strong><small>持续视频回传</small></div>
      </div>
      <figcaption id="mesh-topology-caption">实线表示当前主路径，虚线表示可切换的备选路径。节点移动或离线时，网络可以重新建立可用关系。</figcaption>
    </figure>
  );
}

export function MeshAirtimeFigure() {
  return (
    <figure className="principle-figure airtime-figure" aria-labelledby="airtime-caption">
      <div className="figure-heading"><span>原理图 02</span><b>中继为什么会消耗更多空口时间？</b></div>
      <div className="airtime-path">
        <div><strong>源节点</strong><span>发送 8 Mbps 视频</span></div><em>① 接收</em><div className="relay-box"><strong>中继节点</strong><span>同一数据要收一次、再发一次</span></div><em>② 转发</em><div><strong>目的节点</strong><span>接收完整视频</span></div>
      </div>
      <div className="airtime-meter"><span>源节点发送</span><i /><span>中继再次发送</span><i className="second" /></div>
      <figcaption id="airtime-caption">在同频、半双工条件下，一条经过中继的视频会重复占用无线时隙。因此“32 Mbps 视频总码率”不能简单等同于“32 Mbps 信道就够用”。</figcaption>
    </figure>
  );
}

export function LinkBudgetFigure() {
  return (
    <figure className="principle-figure budget-figure" aria-labelledby="budget-caption">
      <div className="figure-heading"><span>原理图 01</span><b>链路预算：把每一项增益和损耗记入同一张账</b></div>
      <div className="budget-flow">
        <div className="budget-item plus"><span>+</span><strong>发射功率</strong><small>P<sub>TX</sub></small></div>
        <div className="budget-item plus"><span>+</span><strong>发射天线</strong><small>G<sub>TX</sub></small></div>
        <div className="budget-item minus"><span>−</span><strong>空间与遮挡</strong><small>L<sub>PATH</sub></small></div>
        <div className="budget-item minus"><span>−</span><strong>线缆与安装</strong><small>L<sub>OTHER</sub></small></div>
        <div className="budget-item plus"><span>+</span><strong>接收天线</strong><small>G<sub>RX</sub></small></div>
        <div className="budget-result"><span>=</span><strong>接收功率</strong><small>P<sub>RX</sub></small></div>
      </div>
      <div className="margin-scale"><div className="noise-zone">不可用</div><div className="working-zone">可工作</div><div className="reserve-zone">抗衰落余量</div><b className="sensitivity-mark">灵敏度门槛</b><b className="signal-mark">实际接收功率</b></div>
      <figcaption id="budget-caption">实际接收功率超过灵敏度门槛的部分，就是链路余量。余量越充足，越能承受姿态变化、遮挡和干扰。</figcaption>
    </figure>
  );
}

export function FresnelFigure() {
  return (
    <figure className="principle-figure fresnel-figure" aria-labelledby="fresnel-caption">
      <div className="figure-heading"><span>原理图 02</span><b>“看得见”不一定等于射频路径足够通畅</b></div>
      <div className="fresnel-stage">
        <div className="tower tx"><i /><strong>发射端</strong></div>
        <div className="fresnel-zone"><span>第一菲涅尔区</span></div>
        <div className="obstacle"><i /><span>树木 / 建筑</span></div>
        <div className="tower rx"><i /><strong>接收端</strong></div>
      </div>
      <div className="fresnel-legend"><span>— 视线中心</span><span>··· 建议保持主要能量区净空</span></div>
      <figcaption id="fresnel-caption">障碍物即使没有完全挡住视线，也可能侵入菲涅尔区并造成明显衰落。升高天线，常常比继续加大发射功率更有效。</figcaption>
    </figure>
  );
}

export function ThermalSpectrumFigure() {
  return (
    <figure className="principle-figure thermal-spectrum" aria-labelledby="thermal-spectrum-caption">
      <div className="figure-heading"><span>原理图 01</span><b>可见光相机与长波红外热成像观察的是不同波段</b></div>
      <div className="spectrum-scale">
        <div className="spectrum-axis"><span>0.4 μm</span><span>0.7 μm</span><span>3 μm</span><span>5 μm</span><span>8 μm</span><span>14 μm</span></div>
        <div className="spectrum-track">
          <div className="visible-band"><b>可见光</b><small>依赖环境照明或主动补光</small></div>
          <div className="midwave-band"><b>中波红外</b><small>MWIR</small></div>
          <div className="longwave-band"><b>ZYRO 探测波段</b><small>8–14 μm / LWIR</small></div>
        </div>
      </div>
      <div className="thermal-compare">
        <div><i>☀</i><strong>白天</strong><span>可见光与热辐射都存在</span></div>
        <em>→</em>
        <div className="night"><i>●</i><strong>全黑环境</strong><span>可见光消失，目标仍在发出热辐射</span></div>
        <em>→</em>
        <div className="detector"><i>▦</i><strong>红外探测器</strong><span>把辐射差异转换为图像信号</span></div>
      </div>
      <figcaption id="thermal-spectrum-caption">热成像不需要先把场景“照亮”。它接收目标自身及环境发出的长波红外辐射，再由图像处理器映射成灰度或伪彩画面。</figcaption>
    </figure>
  );
}

export function ThermalResolutionFigure() {
  return (
    <figure className="principle-figure thermal-resolution" aria-labelledby="thermal-resolution-caption">
      <div className="figure-heading"><span>原理图 02</span><b>同样 12 μm 像元间距，阵列越大，画面包含的信息越多</b></div>
      <div className="thermal-resolution-grid">
        <div className="thermal-sensor sensor-256"><div className="pixel-field" /><strong>256 × 192</strong><span>49,152 个像元</span></div>
        <div className="thermal-sensor sensor-384"><div className="pixel-field" /><strong>384 × 288</strong><span>110,592 个像元</span></div>
        <div className="thermal-sensor sensor-640"><div className="pixel-field" /><strong>640 × 512</strong><span>327,680 个像元</span></div>
      </div>
      <div className="resolution-note"><b>更多像元</b><span>更有利于远距离小目标保留轮廓</span><i>+</i><b>合适镜头</b><span>决定视场宽窄与目标占据的像素数</span></div>
      <figcaption id="thermal-resolution-caption">分辨率并不能单独决定“看多远”。目标尺寸、焦距、视场、对焦、NETD、天气和判读标准都会共同影响结果。</figcaption>
    </figure>
  );
}
