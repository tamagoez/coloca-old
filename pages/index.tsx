import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <main>
    <style jsx>{`
          .index-wrapper {
            width: 100vw;
            height: 100vh;
            background-color: white;
            position: fixed;
            top: 0;
          }
          .text-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }`}</style>
    <div className="index-wrapper">
      <div className="text-wrap">
        <h1>Coloca</h1>
        <p>Now developing!!</p>
      </div>
    </div>
  </main>
);

export default IndexPage;
