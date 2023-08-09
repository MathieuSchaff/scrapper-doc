import React from "react"
import Layout from "@theme/Layout"

export default function Contribute() {
  return <Layout title="contribute" description="You can contribute to this project">
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '20px',
      }}>
      <h1>Contribute</h1>
      <p>
        You can contribute to this project or make it yours by forking it
      </p>
    </div>
  </Layout>
}
