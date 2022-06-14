import { buildTree } from "./common/common";
import { appendix } from "./data";
import Tree from "./components/Tree";
import { useState } from "react";
import { DataIssue } from "./components/types";
import { log } from "console";

function App() {
  const [issuesList, setIssuesList] = useState<DataIssue[]>([]);

  const NodeClickHandler = (issues: DataIssue[]) => {
    setIssuesList(issues);
  };

  return (
    <div style={{ marginLeft: 15 }}>
      <Tree node={buildTree(appendix)} onNodeClick={NodeClickHandler} />
      {issuesList && (
        <ul>
          {issuesList?.map((issue, index) => {
            return (
              <li key={index}>
                {issue.url}
                {`component: ${issue.component} selector: ${issue.selector} type:${issue.type}`}
              </li>
            );
          })}
        </ul>
      )}
      <span>Ⓒ Itay Sorin Ⓒ</span>
    </div>
  );
}

export default App;
