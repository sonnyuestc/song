import { WikiShell } from "../WikiShell";
import { sitePath } from "../../site-path";
import styles from "../wiki.module.css";
export const metadata={title:"7030 277 km Report Pending | ZYRO Wiki"};
export default function PendingReport(){return <WikiShell><h1>7030 277 km test report</h1><div className={styles.notice}>The earlier Word document has been withdrawn. A replacement PDF is pending.</div><p>Please browse the field-test cases with complete PDFs currently available.</p><a href={sitePath("/wiki/#cases")}>Back to field tests →</a></WikiShell>;}
