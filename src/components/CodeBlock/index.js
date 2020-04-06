import React from "react"

const CodeBlock = ({ frame, children }) => {
  return (
    /*<Tabs
      defaultValue="repl"
      values={[
        { label: "Python Interpreter", value: "repl" },
        { label: "Python Code", value: "py" },
      ]}
    >
      <TabItem value="repl">
        <iframe
          src={frame}
          width="100%"
          height="356"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          allowFullscreen
        ></iframe>
      </TabItem>
      <TabItem value="py">{children}</TabItem>
    </Tabs>*/
    <>
      <ul>
        <li>{frame}</li>
        <li>{children}</li>
      </ul>
    </>
  )
}
export default CodeBlock
