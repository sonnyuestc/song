import { WikiShell } from "../WikiShell";
import styles from "../wiki.module.css";
export const metadata={title:"开箱与实测视频｜ZYRO Wiki"};
export default function Videos(){return <WikiShell><h1>开箱与实测视频</h1><div className={styles.notice}>视频将按型号与场景逐步上传。目前尚无经过完整播放核验、可公开播放的独立视频。</div><article className={styles.article}><h2>现有素材状态</h2><ul><li>7020 / 7030 拉距测试与 40 km 测试：已有报告和原始图片，独立视频待补充。</li><li>大亚湾约 20 km 测试：报告含现场画面与嵌入对象，待提取、播放及日期核验。</li><li>深圳—中山 MESH 测试：报告引用的视频文件夹尚未提供。</li><li>产品开箱：后续按型号补充配件、接口、首次连接与使用说明。</li><li>PocketLink：规划产品，后续演示将注明硬件阶段。</li></ul><p>每个视频将关联产品型号、拍摄日期与对应文档；实测视频还将注明设备配置、距离和测试条件。</p></article></WikiShell>;}
